<template>
	<view class="page_container">

		<view class="logo-wrap">
			<view class="hello-wrap">
				<view class="left-info">
					<view class="title" v-if="isRegister">{{$i18n.t('新用户注册')}}</view>

				</view>
				<img style="border-radius: 24rpx;" src="static/images/new_ui/logo.png" alt="" />
			</view>
		</view>
		<view class="main-wrap">
			<view class="form-wrap">
				<u-form labelPosition="top" :model="userInfo" labelWidth="200" :rules="rules" :labelStyle="{
						fontSize: '28rpx',
						fontWeight: '500',
						color: '#131315',
						marginBottom: '16rpx',
					}" ref="registerForm">
					<u-form-item prop="phoneNumber" :label="$i18n.t('手机号码')">
						<u-input class="input-wrap" :customStyle="{padding: '20rpx 20rpx'}"
							v-model="userInfo.phoneNumber" border="surround" :placeholder="$i18n.t('请输入手机号码')"
							clearable>
							<view slot="prefix" class="phoneNumber_areacode" @click="showPicker" style="width: 160rpx;">
								<image :src="userInfo.nationalFlag" @click="showPicker"
									style="width: 40rpx;height: 40rpx;border-radius: 50rpx;"></image>
								<text
									style="margin-left: 10rpx;font-size: 32rpx;margin-right: 10rpx;">{{userInfo.short}}</text>
								<u-icon class="arrow_down" name="arrow-down"></u-icon>
							</view>
						</u-input>
					</u-form-item>

					<u-form-item :label="$i18n.t('密码')" prop="password">
						<u-input class="input-wrap" :customStyle="{padding: '20rpx 20rpx'}" v-model="userInfo.password"
							border="surround" :placeholder="$i18n.t('请输入密码')" :password="!passwordEying">
							<u-icon @click="updateEye('passwordEying')" color="#999" size="25" slot="suffix"
								:name="passwordEying ? 'eye-off' : 'eye-fill'"></u-icon>
						</u-input>
					</u-form-item>
					<view class="feild_desc" style="font-size: 28rpx;">{{$i18n.t('6～20位，至少包含数字、字母')}}</view>
					<u-form-item :label="$i18n.t('确认密码')" prop="confirmPassword">
						<u-input class="input-wrap" :customStyle="{padding: '20rpx 20rpx'}"
							v-model="userInfo.confirmPassword" border="surround" :placeholder="$i18n.t('请输入密码')"
							:password="!comfirmEying">
							<u-icon @click="updateEye('comfirmEying')" slot="suffix" color="#999" size="25"
								:name="comfirmEying ? 'eye-off' : 'eye-fill'"></u-icon>
						</u-input>
					</u-form-item>
					<u-form-item :label="$i18n.t('邀请码')" prop="password">
						<u-input class="input-wrap" :customStyle="{padding: '20rpx 20rpx'}"
							v-model="userInfo.invitationCode" :disabled="userInfo.invitationCodeDisabled"
							border="surround" :placeholder="$i18n.t('请输入邀请码')">

						</u-input>
					</u-form-item>
					<view class="code_container">
						<view class="code-title-wrap">
							<view class="code_title">{{$i18n.t('请输入验证码')}}</view>
							<view class="code-btn" @click="sendSms()" v-if="count==0">
								<view style="color: #FF126D;font-size: 14px;margin-bottom: 12px;">{{$i18n.t('获取验证码')}}
								</view>
								</u-icon>
							</view>
							<view class="code_des" style="margin-top: 10rpx; font-size: 28rpx;" v-if="count>0">
								<text>
									{{ ` ${count}s ` }}
								</text>
								{{$i18n.t('后')}}
								{{$i18n.t('可重发验证码')}}
							</view>
						</view>
						<view class="code-row">
							<u-code-input fontSize="24" hairline color="#131315" borderColor="#F6F6F6" size="46"
								v-model="userInfo.codeValue" space="9" />
						</view>
					</view>
				</u-form>
			</view>
			<view class="action_btn">
				<u-button shape="circle" style="height: 100rpx;font-weight: 600;" @click="onRegister()" color="#FE3344"
					:disabled="!agreementRadio">
					{{ `${this.$i18n.t('注册')}`   }}
				</u-button>
			</view>
			<view class="agreement_wrap">
				<image src="@/static/images/new_ui/xy_yes.png" v-if="agreementRadio"
					@click="agreementRadio=!agreementRadio"></image>
				<image src="@/static/images/new_ui/xy_no.png" v-if="!agreementRadio"
					@click="agreementRadio=!agreementRadio"></image>
				<view style="margin-left: 20rpx;display: flex;" @click="handleAgreement">
					<view style="color:#8C8C8C;font-size:28rpx;"> {{ $i18n.t('阅读并钩选(同意)')  }}</view>
					<view style="color:#FE3344;font-size:28rpx;">《{{ $i18n.t('用户协议') }}》 </view>
				</view>
			</view>
			<AreaPicker ref="AreaPicker" @chooseArea="chooseArea" />


			<view class="" style="display: flex; justify-content: center;">
				<view class="" style="display: flex;align-items: center;margin-top: 20rpx;">
					<span style="color:#8C8C8C;">
						{{ $i18n.t('已有账号') }}？

					</span>
					<view class="" @click="jump('/pages/index/appDownload')">

						{{ $i18n.t('去下载') }}
					</view>

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import md5 from "md5";
	import AreaPicker from "@/components/AreaPicker";
	import {
		businessSendSms,
		businessVerifyCode,
		businessRegister
	} from "@/api/login";
	// import {
	// 	SmsUserFor
	// } from "@/constant";
	import {
		checkLoginError
	} from "@/util/common";
	import {
		config
	} from '@/api/domain.js'
	let timer;

	export default {
		components: {
			AreaPicker,
		},
		data() {
			return {
				passwordEying: false,
				comfirmEying: false,
				showCountry: false,
				count: 0,
				userInfo: {
					phoneNumber: "",
					email: "",
					areaCode: "86",
					invitationCode: "",
					password: "",
					confirmPassword: "",
					codeValue: "",
					nationalFlag: "/static/flag/cn.png",
					short: "CN"
				},
				isDisabled: false,
				checked: [true],
				rules: {
					codeValue: [{
						type: "string",
						required: true,
						message: `${this.$i18n.t('请输入验证码')}`,
						trigger: ["blur", "change"],
						pattern: /^\d{6}$/,
					}, ],
					phoneNumber: [{
						type: "string",
						required: true,
						message: `${this.$i18n.t('请输入手机号码')}`,
						trigger: ["blur", "change"],
						pattern: /^\d{4,11}$/,
					}, ],
					password: [{
							type: "string",
							required: true,
							message: `${this.$i18n.t('请输入密码')}`,
							trigger: ["blur", "change"],
							pattern: /^[\w]{6,12}$/, ///^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,11}$/,
						},
						{
							validator: (rule, value, callback) => value.length >= 6 && value.length <= 11,
							message: `${this.$i18n.t('密码长度需为6-11位')}`,
							trigger: ["change", "blur"],
						},
					],
					confirmPassword: [{
							type: "string",
							required: true,
							message: `${this.$i18n.t('请输入确认密码')}`,
							trigger: ["blur", "change"],
							pattern: /^[\w]{6,12}$/, ///^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,11}$/,
						},
						{
							validator: (rule, value, callback) => value === this.userInfo.password,
							message: `${this.$i18n.t('两次密码不一致')}`,
							trigger: ["change", "blur"],
						},
					],
				},
				isRegister: true,
				pageStatus: "normal",
				agreementRadio: true
			};
		},
		onLoad(e) {
			if (e.mid) {
				this.userInfo.invitationCode = e.mid
				this.userInfo.invitationCodeDisabled = true
			}
			// this.isRegister = JSON.parse(param.isRegister);
		},
		onUnload() {
			if (timer) {
				clearInterval(timer);
			}
		},
		methods: {

			jump(url) {
				uni.navigateTo({
					url: url
				})
			},
			back() {
				uni.$u.route("/pages/login/index");
			},
			showPicker() {
				this.$refs.AreaPicker.init();
			},
			chooseArea(val) {
				this.userInfo.short = val.short;
				this.userInfo.areaCode = val.value;
				this.userInfo.nationalFlag = val.flag;
			},
			sendFootnote() {
				// 这里写你的脚注发送逻辑
				uni.$u.toast('脚注已发送');
			},
			updateEye(type) {
				this[type] = !this[type];
			},

			startCount() {
				this.isDisabled = true;
				if (timer) {
					clearInterval(timer);
				}
				this.count = 60;
				timer = setInterval(() => {
					if (this.count > 0) {
						this.count--;
					} else if (this.count <= 0) {
						this.isDisabled = false;
						if (timer) {
							clearInterval(timer);
						}
					}
				}, 1000);
			},
			sendSms() {
				if (!this.userInfo.phoneNumber) {
					uni.$u.toast(`${this.$i18n.t('请先输入手机号！')}`);
					return;
				}

				if (this.count !== 0) {
					return;
				}

				const options = {
					phoneNumber: this.userInfo.phoneNumber,
					areaCode: `+${this.userInfo.areaCode}`,
					usedFor: 1,
					operationID: Date.now() + "",
				};

				const newOptions = {
					module: 'app',
					action: 'user',
					app: 'secret_key',
					message_type: 0,
					message_type1: 2,
					phone: this.userInfo.areaCode+'-' + this.userInfo.phoneNumber,
					language: 'en'
				}
				// config.ShopApi + 
				let url = "/gw?store_id=1&store_type=2";

				uni.$u?.http.post(url, JSON.stringify(newOptions))
					.then(res => {
						console.log('res',res)
						if (res && res.data.code == 200 || res.data.code=='200') {
							uni.$u.toast(`${this.$i18n.t('验证码已发送！')}`);
							this.startCount();
						} else {
							uni.$u.toast(res.message || '发送失败');
						}

					})
					.catch((err) => {
						console.error(err);
						uni.$u.toast(checkLoginError(err));
					});
			},
			onRegister() {
				if (this.userInfo.codeValue == "") {
					uni.$u.toast(`${this.$i18n.t('请输入验证码')}`);
					return;
				}
				this.$refs.registerForm.validate().then(async (valid) => {
					console.log('valid', valid);
					if (valid) {
						await this.doRegister();
					} else {
						console.log('xxxx5');
					}
				});
			},
			async doRegister() {
				if (this.loading) {
					return;
				}
				this.loading = true;
				var data = {
					module: 'app',
					action: 'login',
					app: 'user_register',
					phone: this.userInfo.areaCode + "-" + this.userInfo.phoneNumber,
					password: this.userInfo.password,
					keyCode: this.userInfo.codeValue,
					user_p_id: this.userInfo.invitationCode,
					language: "zh",
				};
				console.log("data", data)
				try {
					// config.ShopApi + 
					let loginUrl = "/gw?store_id=1&store_type=2";

					var resData = await uni.$u?.http.post(loginUrl, JSON.stringify(data));
					console.info("注册结果", resData);
					if (resData.data.code == 200) {
						// this.saveLoginInfo();
						uni.$u.toast(`${this.$i18n.t('注册成功')}`)
						setTimeout(() => {
							uni.$u.route("/pages/index/appDownload")
						}, 2000)
					} else {
						uni.$u.toast(this.$i18n.t(resData.data.message))
					}
					this.loading = false;
				} catch (err) {
					console.log(err);
					this.loading = false;
					uni.$u.toast(`${this.$i18n.t(err.errMsg)}`);
				} finally {
					this.loading = false;
				}
			},
			saveLoginInfo() {
				uni.setStorage({
					key: "last_areaCode",
					data: this.userInfo.areaCode,
				});
				uni.setStorage({
					key: "last_phoneNumber",
					data: this.userInfo.phoneNumber,
				});
				uni.setStorage({
					key: "last_email",
					data: this.userInfo.email,
				});
			},
			handleAgreement() {
				this.agreementRadio = true;
				uni.navigateTo({
					url: "/pages/index/agreement",
				});
			}
		},
	};
</script>
<style lang="scss" scoped>
	.phoneNumber_areacode {
		display: flex;
		align-items: center;
		font-size: 36rpx;
		border-right: 2rpx solid #d8d8d8;
		margin-right: 48rpx;

		.areacode_content {
			font-weight: 400;
			font-size: 28rpx;
			margin-right: 12rpx;
		}

		.arrow_down {
			margin-right: 12rpx;
		}
	}

	.page_container {
		background-image: url("@/static/images/new_ui/login-header-bk.png");
		background-repeat: round;
		justify-content: space-between;
		padding-top: var(--status-bar-height);

		.back_icon {
			padding: 10rpx 40rpx;
		}

		.logo-wrap {
			margin-top: 20rpx;
			padding: 0 40rpx;

			.hello-wrap {
				display: flex;
				align-items: center;
				font-size: 48rpx;
				font-weight: 600;
				justify-content: space-between;

				img {
					width: 130rpx;
				}
			}
		}
	}

	.main-wrap {
		width: 100%;
		margin-top: 60rpx;
		border-radius: 40rpx 40rpx 0px 0px;
		background-color: #fff;
		flex: 1;
	}

	.form-wrap {
		padding: 0 40rpx;
	}

	.action_btn {
		margin-top: 44rpx;
		padding: 0 32rpx;
	}

	.input-wrap {
		background-color: #F6F6F6;
		border-radius: 16rpx;
		padding: 0 10rpx;
		height: 70rpx;
		font-size: 14px;
		border: none;
	}

	.code-btn {
		font-size: 28rpx;
		font-weight: 500;
	}

	.code_container {
		margin-top: 20rpx;

		.code_title {
			font-size: 28rpx;
			font-weight: 500;
			color: #131315;
			margin-bottom: 24rpx;
		}

		.code_des {
			margin-top: 24rpx;
			font-size: 24rpx;
			color: $u-tips-color;

			.blue_text {
				color: $u-primary;

				&:nth-child(2) {
					margin-left: 15rpx;
					cursor: pointer;
				}
			}
		}
	}

	::v-deep .u-code-input__item {
		background-color: #F6F6F6;
		border-radius: 16rpx;
		margin-right: 13rpx;
		width: 96rpx;
		height: 96rpx;
		font-weight: 600;
	}

	.code-row {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.code-title-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.code-row .u-button--mini {
		height: 56rpx !important; // 修改为56rpx高度
		min-width: 56rpx !important; // 宽高一致
		padding: 0 !important;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.agreement_wrap {
		margin-top: 40rpx;
		padding: 0 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;

		image {
			width: 28rpx;
			height: 28rpx;
		}
	}
</style>