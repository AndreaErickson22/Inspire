import ImageService from "../../components/image/image-service.js";
let _imageService = new ImageService()

function drawImage() {
  let template = ''
  let image = _imageService.Image
  template = image.getTemplate()
  console.log(template)

  document.querySelector('#Image').innerHTML = template;
}
// function logImages() {
//   console.log("images UPDATed")
export default class ImageController {
  constructor() {
    _imageService.addSubscriber('apiImage', drawImage)
    _imageService.getImageData()
  }

}

