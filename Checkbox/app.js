class App {
  constructor() {
    this.inputs = [];
    this.render = new Render();
  }

  checkInputs() {
    const storageInputs = Storage.getInputs();
    this.inputs = [...storageInputs];
  }

  renderInputs() {
    this.render.render(this.inputs);
  }
}
