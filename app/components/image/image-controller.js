import ImageService from "../../components/image/image-service.js";
let _imageService = new ImageService()

function drawImage() {
  let image = _imageService.Image

  document.getElementById('bg-image').setAttribute('background', image.getTemplate());
}
// function logImages() {
//   console.log("images UPDATed")
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('apiImage', drawImage)
    _imageService.getImageData()
  }

}

