<template>
	<view>
		<!-- <headerLevel2 :title="$i18n.t('用户协议')" /> -->
		<view class="title_wrap">《跨境电商平台与商家协议》</view>
		<view class="content_wrap">
			<u-parse :content="content"></u-parse>
		</view>
		<view class="action_btn">
			<u-button shape="circle" style="height: 100rpx;font-weight: 600;" @click="handleAgree" color="#FE3344">
				{{ `${this.$i18n.t('同意')}`   }}
			</u-button>
		</view>
	</view>
</template>

<script>
	// import headerLevel2 from "../../../components/base/header_level2.vue";
	import {
		config
	} from '@/api/domain.js'
	export default {
		// components: {headerLevel2},
		data() {
			return {
				content: "《跨境电商平台于商家协议》"
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$i18n.t('用户协议'),
			});
			this.getContent();
		},
		methods: {
			getContent() {
				uni.request({
					url: config.SeApi + '/agreement.html' + '?rnd=' + Math.floor(Math.random() * 100000),
					method: 'GET',
					success: (res) => {
						console.log("res", res)
						this.content = res.data;
					},
					fail: (err) => {
						console.log('请求失败', err);
					}
				});

			},
			handleAgree() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action_btn {
		margin: 100rpx 200rpx;
		padding-bottom: 100rpx;
	}

	.content_wrap {
		padding: 0 40rpx;
	}

	.title_wrap {
		text-align: center;
		font-size: 36rpx;
		font-weight: 600;
		margin-bottom: 40rpx;
		margin-top: 20rpx;
	}
</style>