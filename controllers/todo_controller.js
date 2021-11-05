const {sequelize} = require("../models/index");
const {QueryTypes} = require("sequelize");
const {sequelize} = require("../models/index");
const {QueryTypes} = require("sequelize");
module.exports.homeRoute = async function(req, res, next) {
    let toDoItems = await sequelize.query('select * from todo', {type: QueryTypes.SELECT});
    res.render('index', {toDoItems});
}

module.exports.renderAddForm = function(req,res)
{
    res.render('create_todo');
};
module.exports.renderAddItem = async function(req,res)
{
    await sequelize.query('insert into todo (description) values (:description)',{
        type: QueryTypes.INSERT,
        replacements: {
            description: req.body.description
        }
    });
    res.redirect('/');
};
module.exports.renderUpdateTrue = async function(req,res) {
    await sequelize.query('update todo set completed = true where id = :id', {
        type: QueryTypes.INSERT,
        replacements: {
            id: req.params.id
        }
    });
    res.redirect('/')
};
module.exports.renderUpdateFalse = async function(req,res) {
    await sequelize.query('update todo set completed = false where id = :id', {
        type: QueryTypes.INSERT,
        replacements: {
            id: req.params.id
        }
    });
    res.redirect('/')
};
module.exports.renderDeleteItem = async function(req,res) {
    await sequelize.query('delete from todo where id = :id', {
        type: QueryTypes.DELETE,
        replacements: {
            id: req.params.id
        }
    });
    res.redirect('/')
};
module.exports.renderEditItem = async function(req,res) {
    const results = await sequelize.query('select * from todo where id = :id', {
        type: QueryTypes.SELECT,
        replacements: {
            id: req.params.id
        }
    });
    const item = results[0];
    console.log(results);
    res.render('edit_todo', {item})
};
module.exports.editItemDescription = async function(req,res) {
    await sequelize.query('update todo set description = :description where id = :id', {
        type: QueryTypes.UPDATE,
        replacements: {
            id: req.params.id,
            description: req.body.description
        }
    });
    res.redirect('/')
};