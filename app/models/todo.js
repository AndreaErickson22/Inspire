export default class Todo {
  constructor(data) {
    this.id = data.id || data._id
    this.name = data.name
    this.user = data.user
    this.description = data.description || 'CLASSIFIED'

  }



  getCard(button) {
    return `
        <div class="col-12 align-items-center align-items: baseline; justify-content-center">
        <div id="TODO-CARDS" class="card w-75">
                <div class="card-body TO-DO">
              <h5 class="card-title">To Do List</h5>
                    <h5 class="card-title">${this.description}</h5>
                    <p class="card-text">${this.user}</p>
                    ${button}
                </div>
              
        </div>
        </div>
        `
  }
}

