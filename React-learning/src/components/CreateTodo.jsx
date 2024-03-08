import { useState } from "react";

export const CreateTodo = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleFetch = () => {
        fetch("http://localhost:3000/todo", {
            method: "POsT",
            body: JSON.stringify({
                title: title,
                description: description,
            }),
            headers: {
                "contentType": "application/json"
            }
        })
        .then(async (res) => {
            const json = await res.json();
            console.log(json)
            alert("Todo added")
        })
    }
  return (
    <div>
        <input 
            type="text" 
            placeholder="title" 
            onChange={ (e) => {
            const value = e.target.value;
            setTitle(value)
        }}>
        </input> <br />

        <input 
            type="text" 
            placeholder="description"
            onChange={(e) => {
                const value = e.target.value;
                setDescription(value)
            }}>
            </input> <br />

        <button onClick={handleFetch}>Add a todo</button>
    </div>
  )
}
