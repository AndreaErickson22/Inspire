export default class Image {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.imgUrl

  }
  getTemplate() {
    `
  <div id="Image">
    <img src="${this.imgUrl}" alt="">
	</div>`
  }
}