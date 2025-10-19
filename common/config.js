// let baseURL = uni.getStorageSync("HTTPUrl"); 
// console.log("baseURL", baseURL);

// if(!baseURL){ //如果没有基础地址，就设置基础地址等信息
	baseURL = 'https://s.mytomato.vip/index.json';
	uni.setStorageSync("CurrRoute", "默认线路");
	uni.setStorageSync("HTTPUrl", baseURL);
	
	uni.setStorageSync("IMRegisteUrl", "http://121.41.231.226:10008");
	uni.setStorageSync("IMApiUrl", "http://121.41.231.226:10002");
	uni.setStorageSync("IMWsUrl", "ws://121.41.231.226:10001");
	uni.setStorageSync("SeApi", "http://47.111.189.7:8803");
	uni.setStorageSync("ShopApi", "http://47.111.189.7:8800");
	uni.setStorageSync("VersionApi", "http://47.111.189.7:8809/version.php");

	// uni.setStorageSync("IMRegisteUrl", "http://118.31.239.140:10008");
	// uni.setStorageSync("IMApiUrl", "http://118.31.239.140:10002");
	// uni.setStorageSync("IMWsUrl", "ws://118.31.239.140:10001");
	// uni.setStorageSync("SeApi","http://120.26.180.223:88" );
	// uni.setStorageSync("ShopApi", "https://api.mytomato.vip");
	// uni.setStorageSync("VersionApi", "http://120.26.180.223:88/version.php");
// }

const version = 'IM Shop';

// 高德地图web api key  用于根据经纬度生成快照  当前key已绑定安卓包名  需要自行申请替换
const AmapWebKey = "";

const getBaseURL = () => uni.getStorageSync("HTTPUrl");
const getCurrRoute = () => uni.getStorageSync("CurrRoute");
const getRegisterUrl = () => uni.getStorageSync("IMRegisteUrl");
const getApiUrl = () => uni.getStorageSync("IMApiUrl");
const getWsUrl = () => uni.getStorageSync("IMWsUrl");
const getSeApi = () => uni.getStorageSync("SeApi");
const getShopApi = () => uni.getStorageSync("ShopApi");
module.exports = {
  version,
  AmapWebKey,
  getBaseURL,
  getCurrRoute,
  getRegisterUrl,
  getApiUrl,
  getWsUrl,
  getSeApi,
	getShopApi
};
