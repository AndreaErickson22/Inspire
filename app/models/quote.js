export default class Quote {
  constructor(data) {
    this.tags = data.tags || data.quote.tags
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author

  }
  getTemplate() {
    return `
    <div id="current-quote" class="card">
  <div class="card-header">
 <p class="card-text">${this.tags}</p>
  </div>
  <div class="card-body">
    <p class="card-text">${this.body}</p>
    <p class="card-text">${this.author}</p>
</div>
`
  }
}