import myrequest from "../api/myrequest.js";


/**
 * 实时时间转换指令，大于一个月则返回具体的年月日
 * @param { string } timeStamp - 时间 格式：年-月-日 时:分:秒 或 时间戳
 * @returns { string }
 */
function getFormatTime(timeStamp){
	var dateTime = new Date(timeStamp);
	var no1new = dateTime.valueOf();
	var year = dateTime.getFullYear();
	var month = dateTime.getMonth() + 1;
	var day = dateTime.getDate();
	var hour = dateTime.getHours();
	var minute = dateTime.getMinutes();
	var second = dateTime.getSeconds();
	var now = new Date();
	var now_new = now.valueOf();
	var milliseconds = 0;
	var timeSpanStr;
	
	milliseconds = now_new - no1new;

	if (milliseconds <= 1000 * 60 * 1) {
		timeSpanStr = '刚刚';
	}else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
		timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
	}else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
		timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
	}else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
		timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
	}else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
		// timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		timeSpanStr = year + '-' + month + '-' + day
	}else {
		// timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
		timeSpanStr = year + '-' + month + '-' + day
	}
	
	return timeSpanStr;
}

function numberToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
 
    // 使用padStart来确保时间总是两位数
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    remainingSeconds = remainingSeconds.toString().padStart(2, '0');
 
    return `${hours}:${minutes}:${remainingSeconds}`;
}

//用户登录完成，同步IM的id，face等信息到商店上
function updateShopUserFromIMUser(nickName,avatar,userImId, accessId){		
	var params = {
		api: "vod.User.updateMyInfo",
		nickname: nickName,
		avatar: avatar,
		user_im_id: userImId,		 
		access_id: accessId,
	};		
	;
	myrequest.Post(uni.getStorageSync("ShopApi") + "/gw?store_id=1&store_type=2",
		params
	).then(res => {
		if (res.code == 200) {
			console.log("登录信息同步成功", res)
		} else {
			console.log("登录信息同步失败", res)
		}
	}).catch(err => {
		console.log("登录信息同步失败", err)
	})
}

function dateFormat(val) {
  if (val === null || val === "") {
    return "暂无时间";
  }
  const d = new Date(val); // val 为表格内取到的后台时间
  const month =
    d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  const hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours();
  const min = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
  const sec = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
  const times = `${d.getFullYear()}-${month}-${day} ${hours}:${min}:${sec}`;
  return times;
}

module.exports = {
	getFormatTime,
	numberToTime,
	updateShopUserFromIMUser,
	dateFormat
}