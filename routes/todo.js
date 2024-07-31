const router = require('express').Router();
let Todo = require('../models/todo.model');

// Get all Todos
router.route('/').get((req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Add a new Todo
router.route('/add').post((req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
  });

  newTodo.save()
    .then(() => res.json('Todo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;