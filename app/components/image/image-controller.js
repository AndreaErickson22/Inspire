import ImageService from "./image-service.js";

const _is = new ImageService()
function drawImage() {
  let image = _is.getImageData

  document.querySelector('#Background').innerHTML = template
}
// function logImages() {
//   console.log("images UPDATed")
export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawImage)
    _is.getImageData()
  }

}

