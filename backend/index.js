const express = require('express');
const cors = require("cors")
const { createTodo, updateTodo } = require('./typezod');
const { todo } = require('./db');
const app = express()
const PORT = 3000;


app.use(express.json()) // express.json() -> middleware
app.use(cors())


app.post("/todo", async (req,res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req,res) => {

    const todos = await todo.find({});
})

app.put("/completed", async (req,res) => {

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return
    }
    //mongodb
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    
})

app.listen(PORT, (req,res) => {
    console.log("server listening at port", PORT)
})
