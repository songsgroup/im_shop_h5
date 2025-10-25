<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			uni.setStorageSync("IMRegisteUrl", "http://121.41.231.226:10008");
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
</style>
