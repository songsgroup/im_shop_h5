// 域名根据后端进行修改
let config = {
	baseURL: '',
	IMRegisteUrl: '',
	SeApi: '',
	ShopApi: 'https://ishop.iiae.cn',
	VersionApi: ''
}

// if (process.env.NODE_ENV === 'development') {
// 	// console.log('测试环境');

// 	config.baseURL = 'https://s.mytomato.vip/index.json';
// 	config.IMRegisteUrl = 'http://121.41.231.226:10008'
// 	config.SeApi = 'http://47.111.189.7:8803'
// 	// config.ShopApi = 'http://47.111.189.7:8800' //老的
	
// 	config.ShopApi = 'http://47.111.189.7:8800' //新的
// 	config.VersionApi = 'http://47.111.189.7:8809/version.php'
// } else {
// 	// console.log('生产环境');
// 	config.baseURL = 'https://s.mytomato.vip/index.json';
// 	config.IMRegisteUrl = 'http://121.41.231.226:10008'
// 	config.SeApi = 'http://47.111.189.7:8803'
// 	config.ShopApi = 'http://47.111.189.7:8800'
// 	config.VersionApi = 'http://47.111.189.7:8809/version.php'

// }
export {
	config
}