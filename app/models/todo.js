export default class Todo {
  constructor(data) {
    this.id = data.id || data._id
    this.name = data.name
    this.user = data.user
    this.description = data.description || 'CLASSIFIED'

  }



  getCard(button) {
    return `
        <div id="TODO-CARDS" class="col-12 align-items-center align-items: baseline; justify-content-center">
        <div class="card w-100">
                <div class="card-body TO-DO">
             <h5 class="card-title">${this.description}</h5>
                    ${button}
                </div>
              
        </div>
        </div>
        `
  }
}

