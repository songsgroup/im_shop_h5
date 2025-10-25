<template>
    <view class="landing-page">
        <!-- Hero Section -->
        <view class="hero-section">
            <!-- Animated Particle Background (CSS-only for app compatibility) -->
            <view class="particle-background">
                <view class="particle particle-1"></view>
                <view class="particle particle-2"></view>
                <view class="particle particle-3"></view>
                <view class="particle particle-4"></view>
                <view class="particle particle-5"></view>
                <view class="particle particle-6"></view>
                <view class="particle particle-7"></view>
                <view class="particle particle-8"></view>
                <view class="particle particle-9"></view>
                <view class="particle particle-10"></view>
                <view class="particle particle-11"></view>
                <view class="particle particle-12"></view>
                <view class="particle particle-13"></view>
                <view class="particle particle-14"></view>
                <view class="particle particle-15"></view>
                <view class="particle particle-16"></view>
                <view class="particle particle-17"></view>
                <view class="particle particle-18"></view>
                <view class="particle particle-19"></view>
                <view class="particle particle-20"></view>
            </view>

            <view class="hero-content">
                <view class="nav-bar" @tap="toUrl('/pages/tabBar/home')">
                    <img class="image_2" referrerpolicy="no-referrer" src="static/landing/logo.svg" />
                </view>

                <view class="hero-content-box">
                    <view class="hero-content-box-left">
                        <view class="hero-span">
                            <span class="main-headline">Sell Globally • Zero Cost • Just 1 Hour a Day</span>
                            <span class="sub-headline">Launch Your Cross-Border Side Business</span>
                            <span class="sub-headline">No Risk • High Profit • Zero Barrier</span>
                            <!-- Font Test -->
                        </view>

                        <view class="app-buttons">
                            <image class="app-button" src="/static/landing/Apple.svg" @click="download('ios')" />
                            <image class="app-button" src="/static/landing/google.svg" @click="download('android')" />
                        </view>
                    </view>
                    <view class="hero-content-box-right">
                        <image class="phone-image" src="/static/landing/phone.png" />
                    </view>
                </view>

            </view>


        </view>

        <!-- Follow Us Section -->
        <view class="follow-section">
            <span class="section-title">Follow us</span>
            <view class="social-icons">
                <image class="social-icon" src="/static/landing/tiktok.svg" />
                <image class="social-icon" src="/static/landing/FB.svg" />
                <image class="social-icon" src="/static/landing/twitter.svg" />
            </view>
        </view>

        <!-- Who Are We Section -->
        <view class="who-are-we-section">
            <span class="section-title-who-are-we">Who Are We?</span>
            <span class="section-description">We are a comprehensive cross-border eCommerce company, offering</span>
            <span class="section-sub-description">Reach customers everywhere – sell to anyone, anywhere.</span>
            <view class="cta-link">
                <span>Join and Sell Now</span>
                <image class="arrow" src="/static/landing/arrow.svg" />
            </view>

            <view class="slider-banner">
                <swiper class="banner-swiper" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="500"
                    circular>
                    <swiper-item>
                        <image class="slider-banner-image" src="/static/landing/banner.png" />
                    </swiper-item>
                    <swiper-item>
                        <image class="slider-banner-image" src="/static/landing/banner.png" />
                    </swiper-item>
                    <swiper-item>
                        <image class="slider-banner-image" src="/static/landing/banner.png" />
                    </swiper-item>
                </swiper>
            </view>
        </view>

        <!-- Who Can Join Us Section -->
        <view class="who-can-join-section">
            <span class="section-title-join-us">Who Can Join Us?</span>
            <span class="section-subtitle-join-us">No Experience Required – We Offer Full Training & Support</span>
            <view class="partner-grid-container">
                <span class="partner-grid-title">We are looking for partners like</span>
                <view class="partner-grid">
                    <view class="partner-item">
                        <image class="partner-image" src="/static/landing/partner1.png" />
                        <span class="partner-span">Freelancers / Side Hustlers</span>
                    </view>

                    <view class="partner-item">
                        <image class="partner-image" src="/static/landing/partner2.png" />
                        <span class="partner-span">Freelancers / Side Hustlers</span>
                    </view>

                    <view class="partner-item">
                        <image class="partner-image" src="/static/landing/partner3.png" />
                        <span class="partner-span black">Part-timers, Parents, or Students with 1 Hour Daily</span>
                    </view>

                    <view class="partner-item">
                        <image class="partner-image" src="/static/landing/partner4.png" />
                        <span class="partner-span black">Suppliers with Local Stock</span>
                    </view>
                </view>
            </view>

        </view>

        <!-- What Do We Provide Section -->
        <view class="what-we-provide-section">
            <span class="section-title-what-we-provide">What Do We Provide?</span>

            <view class="benefit-box">
                <image class="benefit-icon" src="/static/landing/bag.png" />
                <span class="benefit-span">Zero Barriers:No Inventory, <br></br> No Risk</span>
            </view>

            <view class="services-list">
                <view class="service-item">
                    <view class="service-number-container">
                        <span class="service-number">01</span>
                    </view>
                    <view class="service-content">
                        <span class="service-title">Dropshipping & Local Warehouse Fulfillment</span>
                    </view>
                </view>
                <view class="service-item dot-line"></view>
                <view class="service-item">
                    <view class="service-number-container">
                        <span class="service-number">02</span>
                    </view>
                    <view class="service-content">
                        <span class="service-title">Influencer-Driven Marketing on TikTok for High Conversions</span>
                    </view>
                </view>
                <view class="service-item dot-line"></view>

                <view class="service-item">
                    <view class="service-number-container">
                        <span class="service-number">03</span>
                    </view>
                    <view class="service-content">
                        <span class="service-title">Smart System: 1-Click Product Listing & Payment Collection</span>
                    </view>
                </view>
                <view class="service-item dot-line"></view>

                <view class="service-item">
                    <view class="service-number-container">
                        <span class="service-number">04</span>
                    </view>
                    <view class="service-content">
                        <span class="service-title">We Pay for Ads, Shipping, and Logistics – You Just Sell</span>
                    </view>
                </view>
            </view>

            <view class="app-store">
                <image class="app-store-image" src="/static/landing/google.svg" @click="download('android')" />
                <image class="app-store-image" src="/static/landing/Apple.svg" @click="download('ios')" />
            </view>
        </view>

        <!-- Footer -->
        <view class="footer">
            <view class="footer-content">
                <view class="footer-top">
                    <view class="footer-top-left">
                        <view class="footer-logo">
                            <img class="image_2" referrerpolicy="no-referrer" src="static/landing/logo.svg" />
                        </view>

                        <view class="footer-social">
                            <image class="social-icon" src="/static/landing/tw.svg" />
                            <image class="social-icon" src="/static/landing/fb1.svg" />
                            <image class="social-icon" src="/static/landing/whatsapp.svg" />
                            <image class="social-icon" src="/static/landing/instagram.svg" />
                        </view>
                    </view>
                    <view class="footer-top-right">
                        <image class="footer-top-right-image" src="/static/landing/google-white.svg"
                            @click="download('android')" />
                        <image class="footer-top-right-image" src="/static/landing/Apple-white.svg"
                            @click="download('ios')" />
                    </view>
                </view>

                <view class="footer-sections">
                    <view class="footer-section">
                        <span class="footer-section-title">Legal</span>
                        <span class="footer-link">Terms of Service</span>
                        <span class="footer-link">Privacy Policy</span>
                    </view>
                    <view class="footer-section-content">

                        <view class="footer-section hasBorder">

                            <span class="footer-section-title">Contact Us</span>
                            <view class="contact-item">
                                <image class="contact-icon" src="/static/landing/email.svg" />
                                <span class="contact-span">Tomato ES@gmail.com</span>
                            </view>
                        </view>
                        <view class="footer-section hasBorder">
                            <span class="footer-section-title">Payment Methods</span>
                            <view class="payment-icons">
                                <image class="payment-icon" src="/static/landing/paypal.png" />
                                <image class="payment-icon" src="/static/landing/pay.png" />
                                <image class="payment-icon" src="/static/landing/btc.png" />
                            </view>
                        </view>
                    </view>

                </view>

                <span class="copyright">© Copyright 2024 Tomato ES Inc. All rights reserved</span>
            </view>
        </view>

        <!-- Floating App Download Section (Always at bottom) -->
        <view class="floating-download-section">
            <view class="floating-content">
                <image class="floating-image" src="/static/landing/google.svg" @click="download('android')" />
                <image class="floating-image" src="/static/landing/Apple.svg" @click="download('ios')" />
            </view>
        </view>
    </view>
</template>

<script>
import {
    config
} from '@/api/domain.js'

export default {
    name: 'LandingPage',
    data() {
        return {
            downloadurl: "https://d1rcayzp2c1pnb.cloudfront.net/06wk314uqs7ucg",
            osType: 'other'
        }
    },
    onLoad() {
        uni.setNavigationBarTitle({
            title: this.$i18n.t('APP'),
        });
        this._axios();
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
        toUrl(url) {
            uni.navigateTo({
                url: url
            });
        },
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
        _axios() {
            //每次点击 都得初始化上一次商品瀑布流的数据
            var data = {
                module: 'app',
                action: 'config',
                app: 'getConfig',
                keycode: 'appdownload_url'
            };
            this.$req.post('', data).then(res => {
                console.info(res)
                if (res.code == 200) {
                    console.info(res);
                    this.downloadurl = res.data;
                } else {
                    // Handle error if needed
                }
            })
        }
    }
}
</script>

<style scoped>
/* Custom Font Face Declarations */
@font-face {
    font-family: 'MyFont';
    src: url('/static/fonts/RobotoCondensed-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
    unicode-range: U+0000-FFFF;
}

@font-face {
    font-family: 'MyFont';
    src: url('/static/fonts/RobotoCondensed-Italic-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
    unicode-range: U+0000-FFFF;
}

/* Fallback font loading */
@font-face {
    font-family: 'MyFont-Fallback';
    src: url('/static/fonts/RobotoCondensed-VariableFont_wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}

.landing-page {
    min-height: 100vh;
    position: relative;
    /* padding-bottom: 200rpx; */
    /* Space for floating section */
}

/* Hero Section */
.hero-section {
    background: url('/static/landing/hero-bg.png') no-repeat center center;
    background-size: cover;
    display: flex;
    padding: 60rpx 0rpx;
    position: relative;
    overflow: hidden;
    padding-bottom: 10rpx;
}

/* Animated Particle Background */
.particle-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.particle {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    pointer-events: none;
}

/* Individual particle animations */
.particle-1 {
    left: 10%;
    top: 20%;
    width: 4rpx;
    height: 4rpx;
    animation: float1 8s ease-in-out infinite, twinkle 2s ease-in-out infinite;
}

.particle-2 {
    left: 25%;
    top: 40%;
    width: 3rpx;
    height: 3rpx;
    animation: float2 10s ease-in-out infinite, twinkle 3s ease-in-out infinite 0.5s;
}

.particle-3 {
    left: 40%;
    top: 15%;
    width: 5rpx;
    height: 5rpx;
    animation: float3 12s ease-in-out infinite, twinkle 2.5s ease-in-out infinite 1s;
}

.particle-4 {
    left: 60%;
    top: 35%;
    width: 4rpx;
    height: 4rpx;
    animation: float4 9s ease-in-out infinite, twinkle 3s ease-in-out infinite 1.5s;
}

.particle-5 {
    left: 75%;
    top: 25%;
    width: 3rpx;
    height: 3rpx;
    animation: float5 11s ease-in-out infinite, twinkle 2s ease-in-out infinite 2s;
}

.particle-6 {
    left: 15%;
    top: 60%;
    width: 4rpx;
    height: 4rpx;
    animation: float6 10s ease-in-out infinite, twinkle 3s ease-in-out infinite 0.3s;
}

.particle-7 {
    left: 30%;
    top: 70%;
    width: 5rpx;
    height: 5rpx;
    animation: float7 8s ease-in-out infinite, twinkle 2.5s ease-in-out infinite 0.8s;
}

.particle-8 {
    left: 50%;
    top: 50%;
    width: 3rpx;
    height: 3rpx;
    animation: float8 12s ease-in-out infinite, twinkle 3s ease-in-out infinite 1.2s;
}

.particle-9 {
    left: 70%;
    top: 65%;
    width: 4rpx;
    height: 4rpx;
    animation: float9 9s ease-in-out infinite, twinkle 2s ease-in-out infinite 1.8s;
}

.particle-10 {
    left: 85%;
    top: 55%;
    width: 5rpx;
    height: 5rpx;
    animation: float10 11s ease-in-out infinite, twinkle 3s ease-in-out infinite 2.3s;
}

.particle-11 {
    left: 20%;
    top: 80%;
    width: 3rpx;
    height: 3rpx;
    animation: float11 10s ease-in-out infinite, twinkle 2.5s ease-in-out infinite 0.6s;
}

.particle-12 {
    left: 45%;
    top: 85%;
    width: 4rpx;
    height: 4rpx;
    animation: float12 8s ease-in-out infinite, twinkle 3s ease-in-out infinite 1.4s;
}

.particle-13 {
    left: 65%;
    top: 10%;
    width: 5rpx;
    height: 5rpx;
    animation: float13 12s ease-in-out infinite, twinkle 2s ease-in-out infinite 2.1s;
}

.particle-14 {
    left: 80%;
    top: 45%;
    width: 3rpx;
    height: 3rpx;
    animation: float14 9s ease-in-out infinite, twinkle 3s ease-in-out infinite 0.4s;
}

.particle-15 {
    left: 35%;
    top: 30%;
    width: 4rpx;
    height: 4rpx;
    animation: float15 11s ease-in-out infinite, twinkle 2.5s ease-in-out infinite 1.1s;
}

.particle-16 {
    left: 55%;
    top: 75%;
    width: 5rpx;
    height: 5rpx;
    animation: float16 10s ease-in-out infinite, twinkle 3s ease-in-out infinite 1.7s;
}

.particle-17 {
    left: 90%;
    top: 30%;
    width: 3rpx;
    height: 3rpx;
    animation: float17 8s ease-in-out infinite, twinkle 2s ease-in-out infinite 2.5s;
}

.particle-18 {
    left: 5%;
    top: 45%;
    width: 4rpx;
    height: 4rpx;
    animation: float18 12s ease-in-out infinite, twinkle 3s ease-in-out infinite 0.9s;
}

.particle-19 {
    left: 48%;
    top: 5%;
    width: 5rpx;
    height: 5rpx;
    animation: float19 9s ease-in-out infinite, twinkle 2.5s ease-in-out infinite 1.6s;
}

.particle-20 {
    left: 72%;
    top: 90%;
    width: 3rpx;
    height: 3rpx;
    animation: float20 11s ease-in-out infinite, twinkle 3s ease-in-out infinite 2.2s;
}

/* Floating animations */
@keyframes float1 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(20rpx, -30rpx);
    }
}

@keyframes float2 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-30rpx, 20rpx);
    }
}

@keyframes float3 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(25rpx, 25rpx);
    }
}

@keyframes float4 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-20rpx, -25rpx);
    }
}

@keyframes float5 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(30rpx, 15rpx);
    }
}

@keyframes float6 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-25rpx, -20rpx);
    }
}

@keyframes float7 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(15rpx, 30rpx);
    }
}

@keyframes float8 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-30rpx, -15rpx);
    }
}

@keyframes float9 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(20rpx, 20rpx);
    }
}

@keyframes float10 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-15rpx, 25rpx);
    }
}

@keyframes float11 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(25rpx, -20rpx);
    }
}

@keyframes float12 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-20rpx, 30rpx);
    }
}

@keyframes float13 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(30rpx, -25rpx);
    }
}

@keyframes float14 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-25rpx, 15rpx);
    }
}

@keyframes float15 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(15rpx, -30rpx);
    }
}

@keyframes float16 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-30rpx, 20rpx);
    }
}

@keyframes float17 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(20rpx, 25rpx);
    }
}

@keyframes float18 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-15rpx, -20rpx);
    }
}

@keyframes float19 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(25rpx, 30rpx);
    }
}

@keyframes float20 {

    0%,
    100% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(-20rpx, -15rpx);
    }
}

/* Twinkle animation */
@keyframes twinkle {

    0%,
    100% {
        opacity: 0.3;
    }

    50% {
        opacity: 1;
    }
}

.hero-content {
    flex: 1;
    z-index: 10;
    position: relative;
}

.nav-bar {
    padding: 0rpx 28rpx;
}

.hero-content-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.hero-content-box-left {
    padding: 112rpx 0 28rpx 28rpx;
}

.hero-content-box-right {}

.logo-section {
    display: flex;
    align-items: center;
    margin-bottom: 60rpx;
}

.logo-icon {
    width: 60rpx;
    height: 60rpx;
    background-color: #ff6b35;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 32rpx;
    font-weight: bold;
    margin-right: 20rpx;
}

.logo-span {
    color: white;
    font-size: 36rpx;
    font-weight: bold;
}

.hero-span {
    margin-bottom: 40rpx;
}

.main-headline {
    display: block;
    font-family: 'MyFont', sans-serif;
    font-size: 44rpx;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 60rpx;
    span-align: left;
    font-style: normal;
    margin-bottom: 30rpx;
}

.sub-headline {
    display: block;
    font-family: 'MyFont', sans-serif;
    font-weight: 400;
    font-size: 22rpx;
    color: #FFFFFF;
    line-height: 40rpx;
    span-align: left;
    font-style: normal;
}

.font-test {
    display: block;
    font-family: 'MyFont', sans-serif;
    font-weight: bold;
    font-size: 20rpx;
    color: #FF6B9D;
    line-height: 30rpx;
    margin-top: 20rpx;
    border: 1px solid #FF6B9D;
    padding: 10rpx;
    border-radius: 8rpx;
}



.app-buttons {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.app-button {
    width: 336rpx;
    height: 84rpx;
}

.app-icon {
    width: 40rpx;
    height: 40rpx;
    margin-right: 20rpx;
}

.button-span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.button-span-small {
    color: white;
    font-size: 24rpx;
    line-height: 1;
}

.button-span-large {
    color: white;
    font-size: 32rpx;
    font-weight: bold;
    line-height: 1;
}

.phone-mockup {
    position: absolute;
    right: 40rpx;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.phone-image {
    width: 300rpx;
    height: 600rpx;
}

/* Follow Us Section */
.follow-section {
    padding: 0rpx 40rpx;
    /* span-align: center; */
    background-color: white;
}

.section-title {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 28rpx;
    color: #000000;
    line-height: 44rpx;
    span-align: left;
    margin-bottom: 40rpx;
    font-style: normal;
    display: block;
}

.section-title-who-are-we {
    font-family: 'MyFont', sans-serif;
    font-weight: bold;
    font-size: 32rpx;
    color: #000000;
    line-height: 48rpx;
    span-align: left;
    font-style: normal;
    margin-bottom: 20rpx;
    display: block;
}

.social-icons {
    display: flex;
    gap: 24rpx;
}

.social-icon {
    width: 64rpx;
    height: 64rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-icon.tiktok {
    background-color: #000;
}

.social-icon.facebook {
    background-color: #1877f2;
}

.social-icon.twitter {
    background-color: #000;
}

.social-icon image {
    width: 40rpx;
    height: 40rpx;
}

/* Who Are We Section */
.who-are-we-section {
    padding: 66rpx 40rpx;
    background-color: white;
}

.section-description {
    font-family: 'MyFont', sans-serif;
    font-weight: 700;
    font-size: 40rpx;
    color: #000000;
    line-height: 52rpx;
    span-align: left;
    font-style: normal;
    margin-bottom: 20rpx;
    display: block;
}

.section-sub-description {
    font-family: 'MyFont', sans-serif;
    font-weight: 400;
    font-size: 28rpx;
    color: #898B8F;
    line-height: 44rpx;
    span-align: left;
    font-style: normal;
    margin-bottom: 40rpx;
    display: block;
}

.cta-link {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #000000;
    font-family: 'MyFont', sans-serif;
    padding-bottom: 10rpx;
    font-weight: 500;
    font-size: 32rpx;
    color: #000000;
    line-height: 48rpx;
    text-align: left;
    font-style: normal;
    align-items: center;
}

.arrow {
    margin-left: 10rpx;
    font-size: 24rpx;
    width: 24rpx;
    height: 24rpx;

}

/* Slider Banner */
.slider-banner {
    margin-top: 64rpx;
    overflow: hidden;
}

.banner-swiper {
    height: 582rpx;
    border-radius: 0;
}

.slider-banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Who Can Join Us Section */
.who-can-join-section {
    padding: 0 40rpx 80rpx 40rpx;
}

.section-title-join-us {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 40rpx;
    color: #000000;
    line-height: 60rpx;
    text-align: left;
    font-style: normal;
    margin-bottom: 20rpx;
    display: block;
}

.section-subtitle {
    font-size: 28rpx;
    margin-bottom: 60rpx;
    display: block;
    opacity: 0.9;
}

.section-subtitle-join-us {
    font-family: 'MyFont', sans-serif;
    font-weight: normal;
    font-size: 28rpx;
    color: #666666;
    line-height: 44rpx;
    text-align: left;
    font-style: italic;
    margin-bottom: 60rpx;
    display: block;
}

.partner-grid-container {
    background: url('/static/landing/partner-bg.png') no-repeat center center;
    background-size: cover;
    height: 880rpx;
}

.partner-grid-title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40rpx;
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 36rpx;
    color: #FFFFFF;
    line-height: 48rpx;
    text-align: left;
    font-style: normal;
}

.partner-grid {
    padding: 40rpx;
    padding-top: 260rpx;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40rpx;

}

.partner-item {
    span-align: center;
}

.partner-image {
    width: 100%;
    height: 120rpx;
    border-radius: 12rpx;
}

.partner-span {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 22rpx;
    color: #FFFFFF;
    line-height: 32rpx;
    text-align: left;
    font-style: normal;
    span-align: center;
}

.black {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 22rpx;
    color: #1A1A1A;
    line-height: 32rpx;
    text-align: left;
    font-style: normal;
}

/* What Do We Provide Section */
.what-we-provide-section {
    padding: 0rpx 40rpx;
    background-color: white;

}

.section-title-what-we-provide {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 40rpx;
    color: #000000;
    line-height: 60rpx;
    text-align: left;
    font-style: normal;
    margin-bottom: 40rpx;
}


.benefit-box {
    background: #FFEDF7;
    border-radius: 32rpx 32rpx 0rpx 0rpx;
    padding: 40rpx 0;
    display: flex;
    align-items: center;
    margin-bottom: 60rpx;
    margin-top: 40rpx;
}

.benefit-icon {
    position: absolute;
    left: 60rpx;
    width: 186rpx;
    height: 186rpx;
    padding-bottom: 64rpx;

}

.benefit-span {
    padding-left: 224rpx;
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 36rpx;
    color: #1D1D1D;
    line-height: 24rpx;
    text-align: left;
    font-style: normal;
}

.services-list {
    margin-bottom: 60rpx;
    position: relative;
    padding-left: 40rpx;
}



.service-item {
    display: flex;
    margin-bottom: 10rpx;
    position: relative;
    z-index: 2;
    justify-content: flex-start;
}

.dot-line {
    height: 60rpx;
    border-left: 2rpx dotted #DF33A7;
    margin-left: 30rpx;
}

.service-number-container {
    position: relative;
    z-index: 3;
    margin-right: 30rpx;
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    padding-top: 10rpx;
}

.service-number {
    font-family: 'MyFont', sans-serif;
    font-weight: bold;
    font-size: 40rpx;
    color: #DF33A7;
    line-height: 48rpx;
    text-align: left;
    font-style: normal;
    padding: 0 10rpx;
}

.service-content {
    flex: 1;
    padding-top: 8rpx;
}

.service-title {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 28rpx;
    color: #1D1D1D;
    line-height: 44rpx;
    text-align: left;
    font-style: normal;
    display: block;
    margin-bottom: 4rpx;
}

.app-store {
    display: flex;
    gap: 20rpx;
    justify-content: center;
    margin-bottom: 40rpx;
}

.app-store-image {
    width: 300rpx;
    height: 84rpx;
}

/* Footer */
.footer {
    background-color: #000;
    color: white;
    padding: 40rpx 40rpx;
}

.footer-content {
    max-width: 1200rpx;
    margin: 0 auto;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60rpx;
}

.footer-top-right {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.footer-top-right-image {
    width: 284rpx;
    height: 72rpx;
}

.footer-logo {
    display: flex;
    align-items: center;
    margin-bottom: 28rpx;
}

.footer-social {
    display: flex;
    gap: 20rpx;
    margin-bottom: 40rpx;
}

.footer-social .social-icon {
    width: 48rpx;
    height: 48rpx;
}

.footer-sections {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64rpx;
}

.footer-section-content {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.footer-section {
    flex: 1;
}

.hasBorder {
    border-left: 1px solid #F80089;
    padding-left: 20rpx;
}

.footer-section-title {
    font-family: 'MyFont', sans-serif;
    font-weight: 500;
    font-size: 28rpx;
    color: #FFFFFF;
    line-height: 44rpx;
    text-align: left;
    font-style: normal;
    margin-bottom: 32rpx;
    display: block;
}

.footer-link {
    font-family: 'MyFont', sans-serif;
    font-weight: 400;
    font-size: 24rpx;
    color: #FFFFFF;
    line-height: 40rpx;
    text-align: left;
    font-style: normal;
    margin-bottom: 32rpx;
    opacity: 0.5;
    display: block;
}

.contact-item {
    display: flex;
    align-items: center;
}

.contact-icon {
    width: 24rpx;
    height: 24rpx;
    margin-right: 10rpx;
}

.contact-span {
    font-family: 'MyFont', sans-serif;
    font-size: 24rpx;
    color: #ccc;
}

.payment-icons {
    display: flex;
    gap: 20rpx;
}

.payment-icon {
    width: 40rpx;
    height: 40rpx;
}

.copyright {
    font-family: 'MyFont', sans-serif;
    font-weight: 400;
    font-size: 20rpx;
    color: #FFFFFF;
    line-height: 32rpx;
    text-align: left;
    font-style: normal;
    display: flex;
    justify-content: center;
    span-align: center;
    padding: 28rpx 0;
    opacity: 0.5;
    border-top: 1px solid rgba(137, 140, 140, 0.2);
}

/* Floating Download Section */
.floating-download-section {
    position: fixed;
    bottom: 20rpx;
    left: 20rpx;
    right: 20rpx;
    background-color: white;
    padding: 20rpx;
    box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.1);
    border-radius: 72rpx;
    z-index: 1000;
}

.floating-content {
    display: flex;
    justify-content: center;
    gap: 20rpx;
}

.floating-image {
    width: 284rpx;
    height: 72rpx;
}

.floating-buttons {
    display: flex;
    gap: 20rpx;
    margin-bottom: 20rpx;
}

.floating-app-button {
    flex: 1;
    background-color: #000;
    border-radius: 12rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    border: none;
}

.floating-app-icon {
    width: 32rpx;
    height: 32rpx;
    margin-right: 15rpx;
}

.floating-button-span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.floating-button-span-small {
    color: white;
    font-size: 20rpx;
    line-height: 1;
}

.floating-button-span-large {
    color: white;
    font-size: 26rpx;
    font-weight: bold;
    line-height: 1;
}

.floating-description {
    font-size: 24rpx;
    color: #666;
    span-align: center;
    display: block;
}
</style>
