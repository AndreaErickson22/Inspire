export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.url


  }
  getTemplate() {
    return `
${this.url}
  `
  }
}