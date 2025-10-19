export const checkUpdateFormPgyer = (appid, version) =>{
	// console.log('获得版本升级地址['+uni.getStorageSync("VersionApi")+']')
	return new Promise((resolve, reject) => {
		uni.request({
			url: uni.getStorageSync("VersionApi"),
			method: 'POST',
			data: {
				appid,
				version
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				let data = res.data;
				// console.log(data);
				let rsData = {
					buildHaveNewVersion:data['vers'],
					needForceUpdate:(data['need_upd']==1),
					downloadURL:data['down_url'],
					iosDownloadURL:data['ios_down_url'],
					isFull:data['is_full'],
					buildUpdateDescription:data['remark'],
					buildVersion:data['vers']
				}
				resolve(rsData);
			},
			fail: (err) => {
				console.log('Version升级版本检查请求失败', err);
				reject(err);
			}
		});
	});
};
