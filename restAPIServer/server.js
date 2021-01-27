const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var cors = require("cors");
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

let dbTodos = [
  { id: 1, title: "Something", completed: false, date: "10-11-2020" },
];

app
  .route("/api/todos")
  .get((req, res) => {
    console.log(req.query);
    let result = JSON.stringify({ data: dbTodos });
    return res.status(200).send(result);
  })
  .post((req, res) => {
    const todo = req.body;
    console.log(todo);
    todo.id = Date.now();
    dbTodos.push(todo);
    console.log(dbTodos);
    let result = JSON.stringify({ data: todo });
    return res.status(200).send(result);
  })
  .patch((req, res) => {
    const idTodo = req.body;
    console.log(idTodo);
    dbTodos.forEach((item) => {
      if (item.id === idTodo.id) {
        item.completed = true;
      }
    });
    let result = JSON.stringify({ data: dbTodos });
    return res.status(200).send(result);
  })
  .delete((req, res) => {
    const idTodo = req.body;
    console.log(idTodo.id);
    dbTodos = dbTodos.filter((item) => item.id !== idTodo.id);
    console.log(dbTodos);
    let result = JSON.stringify({ data: dbTodos });
    return res.status(200).send(result);
  });

app.listen(port, () => console.log(`server start  port ${port}`));
