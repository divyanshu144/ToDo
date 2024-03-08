const mongoose = require("mongoose");
//mongodb+srv://divyanshu:divyanshu@cluster0.lewitf4.mongodb.net/test

mongoose.connect("mongodb+srv://divyanshu:divyanshu@cluster0.lewitf4.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Bolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}