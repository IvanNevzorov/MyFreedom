import { Render } from "./Render";
import { Request } from "./Request";

export class App {
  constructor() {
    this.todos = [];
    this.render = new Render(this);
    this.request = new Request();
  }

  loadTodos() {
    this.request
      .getTodos()
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos = data;
        this.renderTodos(this.todos);
      });
  }

  renderTodos() {
    this.render.pushTodos(this.todos);
  }

  addTodo(todo) {
    this.request
      .postTodo(todo)
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos.push(data);
        this.renderTodos();
      });
  }

  changeTodo(id) {
    this.request
      .patchTodo(id)
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos = data;
        this.renderTodos();
      });
  }

  deleteTodo(id) {
    this.request
      .deleteTodo(id)
      .then((data) => data.json())
      .then(({ data }) => {
        this.todos = data;
        this.renderTodos();
      });
  }
}
