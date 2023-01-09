const express = require("express");
const createUser = require("../controller/user-controller")
const { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } = require("../controller/todo-controller")
const loginController = require("../controller/login-controller")
const route = express.Router();


route.post('/todos', addTodo);
route.get('/todos',getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);
route.post('/register',createUser);
route.post('/login', loginController);


module.exports = route 