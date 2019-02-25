export default class Quote {
  constructor(data) {
    this.tags = data.tags || data.quote.tags
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author

  }
  getTemplate() {
    return `
    <div id="current-quote" class="card">
  <div class="quote-card-header">
 <h2 id="TAG" class="card-text">${this.tags}</h2>
  </div>
  <div class="quote-card-body">
    <p class="card-text">${this.body}</p>
    <p class="card-text">${this.author}</p>
</div>
`
  }
}