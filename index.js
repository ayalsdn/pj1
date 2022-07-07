class Assignment {
  constructor() {}

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#phoneEl = this.#containerEl.querySelector("#phone");
  }
}
