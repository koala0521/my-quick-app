import fetch from '@system.fetch'
import config from './config'


/** 
 * @description fetch 请求封装，异步函数
 * @param {Object} args : { url: '', base_url:'',timeout: 10000,method:get/post, data:{}}
 * @returns Promise
 * */
export default function requestFn(args = {}) {

	let {
		url = '',
		data = {},
		timeout = 10000,
		method = 'get'
	} = args;

	let ajax = new Promise((resolve, reject) => {

	try {
		let parmas = Object.assign({}, args, {
			url: config.baseUrl + url,
			method,
			data:{
				// appkey: "87b02e76865221f2",
				...data
			},
			// header: {
			// 	'Content-Type': 'application/x-www-form-urlencoded'
			// },
			success: function (data) {

				resolve(data.data)
			},
			fail: function (data, code) {

				resolve(data.data)
			}
		});
		fetch.fetch(parmas)

	} catch (err) {
		console.log(`err`, err);
	}

});
	let timeout_fn = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				status: 204,
				msg: 'Request timed out'
			})
		}, timeout);
	})
	return Promise.race([timeout_fn, ajax])

}
