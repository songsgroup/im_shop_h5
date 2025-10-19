const locales = {};
const list = require('./list.json');
for (let key in list) {
	locales[list[key]] = require("./" + list[key] + '.json');
}

let currentLocale = '';
 
if (!uni.getStorageSync('locale')) {
	//第一次进入系统，取默认语言
	const systemLanguage = uni.getSystemInfoSync().language;
	currentLocale = 'zh'
	for (let key in list) {
		if (list[key] === systemLanguage) {
			currentLocale = systemLanguage
		}
	}
	uni.setStorageSync('locale', currentLocale);
} else {
	currentLocale = uni.getStorageSync('locale'); // 用户切换过语言，使用用户上次切换的语言
}
 
const i18n = {
	t(key) {
		return locales[currentLocale][key] || key;
	},
	setLocale(locale) {
		if (locales[locale]) {
			currentLocale = locale;
			// 切换语言后存储在本地，下次进入页面使用用户切换过的语言
			uni.setStorageSync('locale', currentLocale);
		} else {
			console.warn(`Locale ${locale} not found`);
		}
	},
};
export default i18n;
