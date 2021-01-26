class Render {
  render(intuts) {
    if (Array.isArray(intuts)) {
      intuts.forEach((item) => {
        let input = document.createElement("input");
        input.setAttribute("id", item.id);
        input.setAttribute("type", "checkbox");
        if (item.checked) {
          input.setAttribute("checked", "");
        }
        this.addEvent(input, item);
        document.body.appendChild(input);
      });
    }
  }
  //item {id: '123', chacked: false}
  addEvent(input, item) {
    input.addEventListener("change", ({ target }) => {
      item.checked = target.checked;
      Storage.changeInputs(item);
    });
  }
}
