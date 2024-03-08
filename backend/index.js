const express = require('express');
const { createTodo, updateTodo } = require('./typezod');
const app = express()


app.use(express.json()) // express.json() -> middleware


app.post("/todo", (req,res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
})

app.get("/todos", (req,res) => {

    
    
})

app.put("/completed", (req,res) => {

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return
    }
    //mongodb
    
})
