import fetch from '@system.fetch';
import config from './config';

/**
 * @description fetch 请求封装，异步函数
 * @param {Object} args : { url: '', base_url:'',timeout: 10000,method:get/post, data:{}}
 * @returns Promise
 * */
export default function requestFn(args = {}) {
	let {
		baseurl = '',
		url = '',
		data = {},
		timeout = 5000,
		method = 'get'
	} = args;

	// let date = new Date();
	// showapi_appid=&showapi_timestamp=20200304155918&showapi_sign=

	let ajax = new Promise((resolve, reject) => {
		try {
			let parmas = Object.assign({}, args, {
				url: baseurl || config.baseUrl + url,
				method,
				data: {
					showapi_appid: '107909',
					showapi_sign: '360f8d24bf6840818c03023677c013aa',
					...data
				},
				header: {
					'Content-Type': 'application/json'
				},
				success: function (data) {
					console.log(`data >>>>>>>>>>` , data );
					
					resolve(JSON.parse(data.data));
				},
				fail: function (data, code) {
					resolve(JSON.parse(data.data));
				}
			});
			fetch.fetch(parmas);
		} catch (err) {
			console.log(`err`, err);
			resolve({});
		}
	});
	let timeout_fn = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				status: 204,
				msg: 'Request timed out'
			});
		}, timeout);
	});
	return Promise.race([timeout_fn, ajax]);
}
