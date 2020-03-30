import requestFn from './request';
import config from './config';


const adurl = {
	'v1': 'online_state',
}

const appListApi = 'app_list';	 // 应用列表
const footMenuApi = 'foot_menu'; // 底部菜单状态

/**
 * @description 脑经急转弯列表
 * @host 1618-2
 * 
 *  */
function getBrainTeaserList(data) {
	return requestFn({
		url: '1618-2',
		data
	})
}

/**
 * @description 获取随机谜语列表
 * @host 151-2
 * 
 *  */
function getRandomRiddles(data) {
	return requestFn({
		url: '151-2',
		data
	})
}

/**
 * 
 * @description 获取特定类型谜语列表
 * @param {object} data 
 * @host 151-4
 * 
 */
function getRiddlesById(data) {
	return requestFn({
		url: '151-4',
		data
	})
}


/**
 * @description 绕口令
 * @host 1623-1
 * 
 *  */
function getTongueTwisterList(data) {
	return requestFn({
		url: '1623-1',
		data
	})
}


/**
 * @description 藏头诗生成
 * @host 950-1
 * 
 *  */
function getTibetanPoem(data){
	return requestFn({
		url: '950-1',
		data
	})
}


/**
 * @description 广告状态
 * @host /showAd/wanka 
 * @host /showAd/wanka/v2  
 **/
function onlineState(data={}){
	return requestFn({
		baseurl: config.mockUrl + adurl.v1,
		data
	})
}

/**
 * @description 应用列表
 * @host /appList 	https://mockapi.eolinker.com/Z3shjCRbd5c820753f8782b604d7a42c4b7db0fd8c53ca6/app_list
 **/
function appList(data={}){
	return requestFn({
		baseurl: config.mockUrl + appListApi,
		data
	})
}

/**
 * @description 底部菜单栏
 * @host /footMenu 	https://mockapi.eolinker.com/Z3shjCRbd5c820753f8782b604d7a42c4b7db0fd8c53ca6/app_list
 **/
function footMenu(data={}){
	return requestFn({
		baseurl: config.mockUrl + footMenuApi,
		data
	})
}


export default {
	getBrainTeaserList,
	getTongueTwisterList,
	getRandomRiddles,
	onlineState,
	getRiddlesById,
	getTibetanPoem,
	appList,
	footMenu
}