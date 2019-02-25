// @ts-ignore
import Image from "../../models/image.js"
let _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
})
let _state = {
	apiImage: {}
}
let _subscribers = {
	apiImage: []
}
function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get Image() {
		return _state.apiImage
	}
	getImageData() {
		_imgApi.get()
			.then(res => {
				let data = new Image(res.data)
				setState('apiImage', data)
			})
	}
}
