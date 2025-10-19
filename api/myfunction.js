
function playRingtone(src) {
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.src = src; // 设置铃声文件路径
	innerAudioContext.loop = true;
	innerAudioContext.play(); // 播放铃声
	return innerAudioContext;
}

function stopRingtone(innerAudioContext) {
	innerAudioContext.pause(); // 停止播放
	innerAudioContext.currentTime = 0;
	return 0;
}

module.exports = {
	playRingtone,
	stopRingtone
}