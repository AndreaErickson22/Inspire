export default class Image {
  constructor(data) {
    this.id = data.id
    this.img = data.url
    this.location = data.site

  }
  getTemplate() {
    return `
   
  
    <img id="Image" src="${this.img}" alt="">
  `
  }
}