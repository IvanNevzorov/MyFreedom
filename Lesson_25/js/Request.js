export class Request {
  constructor() {
    this.url = "http://localhost:4000/api/todos/";
  }

  getTodos() {
    return fetch(this.url);
  }

  postTodo(body) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  patchTodo(id) {
    return fetch(this.url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  }

  deleteTodo(id) {
    return fetch(this.url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  }
}
