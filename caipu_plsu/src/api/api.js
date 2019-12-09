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

export default {
	getMenusByType,
	getMenusByStr,
	getMenuDetail
}