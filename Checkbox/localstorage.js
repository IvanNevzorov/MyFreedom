class Storage {
  static getInputs() {
    const json = localStorage.getItem("inputs");
    let result = [];
    if (json !== null) {
      result = JSON.parse(json);
    }
    return result;
  }

  static changeInputs(item) {
    let inputs = Storage.getInputs();
    let result = inputs.map((element) => {
      if (element.id === item.id) {
        element = item;
      }
      return element;
    });
    localStorage.setItem("inputs", JSON.stringify(result));
  }
}
