// @ts-ignore
let _imgApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});
let _state = {
	apiImages: ''
}
let _subscribers = {
	apiImages: []
}
function setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	getImage() {
		return _state.apiImages
	}
	getImageData() {
		_imgApi.get()
			.then(res => {
				setState('image', res.data.url)
			})
	}
}
