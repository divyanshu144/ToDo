const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://divyanshu:divyanshu@cluster0.lewitf4.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}
