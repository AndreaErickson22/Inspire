import QuoteService from "./quote-service.js";

const _quoteService = new QuoteService()

function drawQuote() {
  let template = _quoteService.Quote.getTemplate()

  document.querySelector('#current-quote').innerHTML = template
}
export default class QuoteController {

  constructor() {
    _quoteService.addSubscriber('quote', drawQuote)
    _quoteService.getQuote()
  }
}
