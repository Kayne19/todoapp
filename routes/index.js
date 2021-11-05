var express = require('express');
var router = express.Router();
const toDoController = require("../controllers/todo_controller.js")
const {sequelize} = require("../models/index");
const {QueryTypes} = require("sequelize");

router.get('/', toDoController.homeRoute);

router.get('/add', toDoController.renderAddForm);

router.post('/add', toDoController.renderAddItem);

router.get('/complete/:id', toDoController.renderUpdateTrue);

router.get('/incomplete/:id', toDoController.renderUpdateFalse);

router.get('/delete/:id', toDoController.renderDeleteItem);

router.get('/edit/:id', toDoController.renderEditItem);

router.post('/edit/:id', toDoController.editItemDescription);

module.exports = router;