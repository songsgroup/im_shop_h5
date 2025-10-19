<template>
  <view class="download-container">
    <!-- <heads   :ishead_w="2"></heads> -->
    <!-- <view class="app-desc">一站式移动商城，购物更便捷，体验更流畅！</view> -->
    <view class="qrcode-wrap">
      <canvas id="qrcode" canvas-id="qrcode" class="qrcode-img" mode="aspectFit"
        style="width: 180px; height: 180px;"></canvas>
    </view>
    <view class="btn-group">
      <view class="btn" @click="download()"><image src="@/static/img/ios.png" style="width: 150rpx;height: 50rpx;"></image></view>
      <view class="btn" @click="download()"><image src="@/static/img/andrio.png" style="width: 150rpx;height: 50rpx;"></image></view>
    </view>
    <view class="version">Current Version：v1.0.0</view>
  </view>
</template>

<script>
  import UQRCode from "@/uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js";
import {
		config
	} from '@/api/domain.js'
  export default {
    data() {
      return {
        downloadurl: "https://d1rcayzp2c1pnb.cloudfront.net/06wk314uqs7ucg",
        osType: 'other'
      }
    },
    onLoad() {
      console.info("开始调用!");
      // this.$nextTick(() => {
      //   console.info("开始调用1!");
      //   
      // })
	  uni.setNavigationBarTitle({
	  	title: this.$i18n.t('APP'),
	  });
	  this._axios();
	  // this.createQRCode();
    },
    mounted() {
      // #ifdef H5
      const ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('android') > -1) {
        this.osType = 'android';
      } else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1) {
        this.osType = 'ios';
      } else {
        this.osType = 'other';
      }
      // #endif

      // #ifdef APP-PLUS
      if (uni.getSystemInfoSync().platform === 'android') {
        this.osType = 'android';
      } else if (uni.getSystemInfoSync().platform === 'ios') {
        this.osType = 'ios';
      } else {
        this.osType = 'other';
      }
      // #endif
    },
    methods: {
      download(type) {
        // 这里替换为你的实际下载链接
        let url = '';
        if (type === 'android') {
          url = this.downloadurl;
        } else {
          url = this.downloadurl;
        }
        window.location.href = url;
      },
      createQRCode() {
        // 获取uQRCode实例
        var qr = new UQRCode();
        // 设置二维码内容
        qr.data = this.downloadurl;
       
        // 设置二维码大小，必须与canvas设置的宽高一致
        qr.size = 180;
        qr.margin = 10;
        qr.make();
        // 获取canvas上下文
        var canvasContext = uni.createCanvasContext("qrcode", this); // 如果是组件，this必须传入
        // 设置uQRCode实例的canvas上下文
        qr.canvasContext = canvasContext;
        // 调用绘制方法将二维码图案绘制到canvas上
        qr.drawCanvas();
		console.log('画图完成')
      },
      _axios() {
        //每次点击 都得初始化上一次商品瀑布流的数据

        var data = {
          module: 'app',
          action: 'config',
          app: 'getConfig',
          keycode: 'appdownload_url'
        };
        // console.log('请求接口：data', data);
        this.$req.post('',data).then(res => {
          console.info(res)
          if (res.code == 200) {

            console.info(res);
            this.downloadurl = res.data;
            this.createQRCode()

          } else {

          }
        })
      },
    }
  }
</script>

<style scoped lang="less">
  .download-container {
    min-height: 100vh;
    background: #f7f8fa;
    text-align: center;
    background-image: url("@/static/img/download_bk.png");
    background-size: cover;
    width: 100%;
  }

  .logo-wrap {
    margin-top: 60rpx;
    margin-bottom: 24rpx;
  }

  .app-logo {
    width: 140rpx;
    height: 140rpx;
    border-radius: 32rpx;
    background: #fff;
    box-shadow: 0 4rpx 24rpx rgba(0, 0, 0, 0.08);
  }

  .app-title {
    font-size: 40rpx;
    font-weight: bold;
    color: #222;
    margin-bottom: 12rpx;
  }

  .app-desc {
    font-size: 28rpx;
    color: #666;
    margin-bottom: 32rpx;
    text-align: center;
  }

  .qrcode-wrap {
    padding: 340rpx 0 0 0;
    display: flex;
    justify-content: center;
  }

  .qrcode-img {
    background: #fff;
    border-radius: 16rpx;
    margin-bottom: 8rpx;
  }

  .qrcode-tip {
    font-size: 24rpx;
    color: #888;
  }

  .btn-group {
    margin: 650rpx 0 40rpx 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .btn {
      background-color: #000;
      border-radius: 40rpx;
      margin: 0 50rpx;
      padding: 5rpx 0;
    }
  }

  .download-btn {
    flex: 1;
    margin: 0 12rpx;
    height: 80rpx;
    font-size: 32rpx;
    border-radius: 40rpx;
    border: none;
    color: #fff;
    background: linear-gradient(90deg, #fa5151 0%, #ff8a00 100%);
  }

  .download-btn.ios {
    background: linear-gradient(90deg, #007aff 0%, #00c6ff 100%);
  }

  .version {
    font-size: 24rpx;
    color: #999;
  }

  .update-log {
    width: 100%;
    background: #fff;
    border-radius: 16rpx;
    padding: 24rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
  }

  .log-title {
    font-size: 28rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 8rpx;
  }

  .log-content {
    font-size: 24rpx;
    color: #666;
    line-height: 1.8;
  }
</style>
