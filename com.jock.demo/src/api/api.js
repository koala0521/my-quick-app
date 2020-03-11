import requestFn from './request'


const adurl = {
	'v1': 'online_state',
}

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
function getTibetanPoem(){
	return requestFn({
		url: '950-1',
		data
	})
}


/**
 * @description 广告状态
 * @host /showAd/wanka 	https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/showAd/wanka
 * @host /showAd/wanka/v2   https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/showAd/wanka/v2
 **/
function onlineState(data={}){
	return requestFn({
		url: adurl.v1,
		data
	})
}


export default {
	getBrainTeaserList,
	getTongueTwisterList,
	getRandomRiddles,
	onlineState,
	getRiddlesById,
	getTibetanPoem
}