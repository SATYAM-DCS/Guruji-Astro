const express = require('express');
const passport = require('passport');
const router = express.Router();

const taskController = require('../../../controllers/api/v1/task_controller');


router.post('/create',taskController.createTask);

router.delete('/delete/:id',taskController.deleteTask)

router.get('/get/all',taskController.getAllTasks);

router.get('/get/:id',taskController.getTask);

router.put('/update/:id',taskController.updateTask);

module.exports = router;