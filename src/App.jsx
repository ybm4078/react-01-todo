import { useState } from "react";

function App() {

    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoValue==="" || todoValue===" ") {
            return;
        }
        setTodoList([...todoList,todoValue])
        setTodoValue("");
    }

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input type={"text"}
                       placeholder={"write your to do..."}
                       onChange={(event) => {setTodoValue(event.target.value)}}
                       value={todoValue}
                />
                <button type="submit">Add To Do</button>
            </form>
            <hr />
            <ul>
                {todoList.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}

export default App;