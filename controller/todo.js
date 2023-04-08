const { Todo } = require('../models');

const createTodo = async(req,res)=>{
    try {
        const { name } = req.body
        const todo = new Todo({
            name: name
        })

        const createTodo = await todo.save(req.body);
        return res.status(201).json({
            msg: 'succsess create todo',
            data: createTodo
        })
    } catch (error) {
        res.status(500).send('server eror')
    }
};

const getTodo = async (req,res) => {
    try {
        const getAllTodo = await Todo.findAll()
        return res.status(200).json({
            data: getAllTodo
        })
    } catch (error) {
        res.status(500).send('server eror')
    }
};

const updateTodo = async (req,res) => {
    try {
        const {name} = req.body;
        const id = req.params.id;

        const updateTodo = await Todo.update({
            name
        },{
            where: {id:id}
        });

        return res.status(200).json({
            msg: 'succsess update todo'
        });
    } catch (error) {
        res.status(500).send('server eror')
    }
};

const deleteTodo = async (req,res) => {
    try {
        const id = req.params.id;
        const deleteTodo = await Todo.destroy({
            where: {id:id}
        });
        return res.status(200).json({
            msg: "succsess delete todo"
        })
    } catch (error) {
        res.status(500).send('server eror')
    }
}

module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
};