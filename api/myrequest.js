// import config from "@/common/config";

import {
	config
} from "./domain.js";

//基于request的封装
function get(url, params) {
	const baseURL = config.ShopApi;
	return new Promise((resolve, reject) => {

		uni.request({
			url: baseURL + url, // 拼接基础URL和具体路径
			method: 'GET',
			data: params || {}, // 默认数据为空对象
			header: {
				imextToken: uni.getStorageSync("IMToken"),
				token: uni.getStorageSync("BusinessToken"),
			},
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); // 请求成功，返回数据
				} else {
					reject(new Error('请求失败' + res.statusCode)); // 请求失败，返回错误信息
				}
			},
			fail: (error) => {
				reject(error); // 请求失败，返回错误信息
			}
		});
	});
}

function post(url, params) {
	const baseURL = config.ShopApi;
	return new Promise((resolve, reject) => {
		console.log('baseURL + url,',baseURL + url,)
		uni.request({
			url: baseURL + url, // 拼接基础URL和具体路径
			method: 'POST',
			data: params || {}, // 默认数据为空对象
			header: {
				imextToken: uni.getStorageSync("IMToken"),
				token: uni.getStorageSync("BusinessToken"),
				operationID: Date.now() + ""
			},
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); // 请求成功，返回数据
				} else {
					reject(new Error('请求失败' + res.statusCode)); // 请求失败，返回错误信息
				}
			},
			fail: (error) => {
				reject(error); // 请求失败，返回错误信息
			}
		});
	});
}

function Post(url, params) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url, // 直接使用传入的URL
			method: 'POST',
			data: params || {}, // 默认数据为空对象
			header: {
				imextToken: uni.getStorageSync("IMToken"),
				token: uni.getStorageSync("BusinessToken"),
				operationID: Date.now() + ""
			},
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); // 请求成功，返回数据
				} else {
					reject(new Error('请求失败' + res.statusCode)); // 请求失败，返回错误信息
				}
			},
			fail: (error) => {
				reject(error); // 请求失败，返回错误信息
			}
		});
	});
}

function Get(url, params) {
	return new Promise((resolve, reject) => {
		console.log("url", url);
		uni.request({
			url: url, // 直接使用传入的URL
			method: 'GET',
			data: params || {}, // 默认数据为空对象
			header: {
				imextToken: uni.getStorageSync("IMToken"),
				token: uni.getStorageSync("BusinessToken"),
				operationID: Date.now() + ""
			},
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data); // 请求成功，返回数据
				} else {
					reject(new Error('请求失败' + res.statusCode)); // 请求失败，返回错误信息
				}
			},
			fail: (error) => {
				reject(error); // 请求失败，返回错误信息
			}
		});
	});
}

module.exports = {
	post,
	get,
	Post,
	Get
}