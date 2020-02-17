import requestFn from './request'

/**
 * @description 按分类检索
 * @host /recipe/byclass 
 * 
 *  */
function getMenusByType(data) {
	return requestFn({
		url: '/recipe/byclass',
		data
	})
}

/**
 * @description 按关键字搜索菜谱
 * @host recipe/search
 * 
 *  */
function getMenusByStr(data) {
	return requestFn({
		url: '/recipe/search',
		data
	})
}

/**
 * @description 查询菜谱详情
 * @host /recipe/detail
 * 
 *  */
function getMenuDetail(data) {
	return requestFn({
		url: '/recipe/detail',
		data
	})
}

/**
 * @description 广告状态
 * @host /showAd/wanka 	https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/showAd/wanka
 * @host /showAd/wanka/v2   https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/showAd/wanka/v2
 **/
function getWankaAdState(data={}){
	return requestFn({
		baseurl: 'https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/showAd/wanka/v2',
		data
	})
}

/**
 * @description 广告状态
 * @host /ad/tbAdInfo
 * 
 **/
function getTaobaoAd(data={}){
	
	return requestFn({
		baseurl: 'https://mockapi.eolinker.com/14c9jKx6f5bcb39be03e8182fde6085527b199281f1ff72/ad/tbAdInfo',
		data
	})
}

export default {
	getMenusByType,
	getMenusByStr,
	getMenuDetail,
	getWankaAdState,
	getTaobaoAd
}