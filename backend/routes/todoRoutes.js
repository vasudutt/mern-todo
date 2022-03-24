const express = require('express');
const router = express.Router();
const { getTodos, setTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, getTodos);

router.post('/', protect, setTodo);

router.put('/:id', protect, updateTodo);

router.delete('/:id', protect, deleteTodo);

module.exports = router;