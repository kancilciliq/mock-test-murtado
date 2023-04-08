const express = require('express');
const router = express.Router();
const auth = require ('../controller/auth');
const todo = require('../controller/todo');

router.post('/api/register', auth.register);
router.post('/api/login', auth.login);

router.post('/api/create-todo', todo.createTodo);
router.get('/api/get-todo', todo.getTodo);
router.put('/api/update-todo/:id', todo.updateTodo);
router.delete('/api/delete-todo/:id', todo.deleteTodo);

module.exports = router;