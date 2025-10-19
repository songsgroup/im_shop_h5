// 登录
import {
	post
} from '@/api/myrequest.js'



export const businessLogin = (params) =>
	post("/account/login", JSON.stringify(params));
export const businessSendSms = (params) =>
	post("/account/code/send", JSON.stringify(params));
export const businessVerifyCode = (params) =>
	post("/account/code/verify", JSON.stringify(params));
export const businessRegister = (params) =>
	post("/account/register", JSON.stringify(params));
export const businessReset = (params) =>
	post("/account/password/reset", params);

//登录到php的api
export const shopLogin = (url, params) =>
	post(url, JSON.stringify(params));

export const shopRegister = (url, params) =>
	post(url, JSON.stringify(params));

export const shopSendSms = (url, params) =>
	post(url, JSON.stringify(params));

export const shopVerifyCode = (url, params) =>
	post(url, JSON.stringify(params));

export const shopReset = (url, params) =>
	post(url, JSON.stringify(params));

export const shopUpdatepassword = (url, params) =>
	post(url, JSON.stringify(params));
	
export const businessModify = (params) =>
	post(
		"/account/password/change",
		JSON.stringify({
			...params,
		}), {
			header: {
				token: uni.getStorageSync("BusinessToken"),
			},
		}
	);

// 用户信息
export const businessInfoUpdate = (params) =>
	post(
		"/user/update",
		JSON.stringify({
			...params,
		}), {
			header: {
				token: uni.getStorageSync("BusinessToken"),
			},
		}
	);
export const businessGetUserInfo = (userID) =>
	post(
		"/user/find/full",
		JSON.stringify({
			userIDs: [userID],
		}), {
			header: {
				token: uni.getStorageSync("BusinessToken"),
			},
		}
	);

export const businessSearchUserInfo = (keyword) =>
	post(
		"/user/search/full",
		JSON.stringify({
			keyword,
			pagination: {
				pageNumber: 1,
				showNumber: 10,
			},
		}), {
			header: {
				token: uni.getStorageSync("BusinessToken"),
			},
		}
	);

export const businessSearchUser = (keyword) =>
	post(
		"/friend/search",
		JSON.stringify({
			keyword,
			pagination: {
				pageNumber: 1,
				showNumber: 99,
			},
		}), {
			header: {
				token: uni.getStorageSync("BusinessToken"),
			},
		}
	);