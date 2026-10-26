import { useState } from "react";

function App() {

    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }

        setTodoList([...todoList,{text: newText, completed: false}]);
        setTodoValue("");
    }

    const handleDeleteTodo = (target) => {
        //delete todoList[(target)]
       const result = todoList.filter((item, index) => {return target !== index});

       setTodoList(result);
    }

    const handleToggleTodo = (index) => {
        const newTodoList = todoList.map((item, i) => {
            if (i !== index) {
                return item;
            }
            return {...item, completed: !item.completed};
        })
        setTodoList(newTodoList);
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
                {todoList.map((item, index) =>
                    <li key={index}> {item.text}
                        <button onClick={() => {
                            {/*지금 현재의 completed 값을 반대로 저장*/}
                            handleToggleTodo(index);
                        }}>{item.completed ? "❤️" : "🤍"}</button>
                        <button onClick={() => {
                            return handleDeleteTodo(index);
                        }}>❌</button>
                    </li>)}
            </ul>
        </>
    )
}

export default App;