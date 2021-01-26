class App {
  constructor() {
    this.inputs = [];
  }

  checkInputs() {
    const storageInputs = Storage.getInputs();
    this.inputs = [...storageInputs];
  }

  renderInputs() {
    let render = new Render();
    render.render(this.inputs);
  }
}
