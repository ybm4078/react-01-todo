import { useState } from "react";
import styles from "./App.module.css";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoValue, setTodoValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        const newText = todoValue.trim();
        if (newText === "") {
            return;
        }

        setTodoList([...todoList, { text: newText, completed: false }]);
        setTodoValue("");
    };

    const handleDeleteTodo = target => {
        //delete todoList[(target)]
        const result = todoList.filter((item, index) => {
            return target !== index;
        });

        setTodoList(result);
    };

    const handleToggleTodo = index => {
        const newTodoList = todoList.map((item, i) => {
            if (i !== index) {
                return item;
            }
            return { ...item, completed: !item.completed };
        });
        setTodoList(newTodoList);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>My ToDo ({todoList.length})</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type={"text"}
                    placeholder={"write your to do..."}
                    onChange={event => {
                        setTodoValue(event.target.value);
                    }}
                    value={todoValue}
                />
                <button className={styles.submitButton} type="submit">
                    Add To Do
                </button>
            </form>
            <hr className={styles.divider} />
            <ul className={styles.list}>
                {todoList.map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        <span
                            className={`${styles.text} ${item.completed ? styles.completed : ""}`}>
                            {item.text}
                        </span>
                        <button
                            className={styles.actionButton}
                            onClick={() => {
                                {
                                    /*지금 현재의 completed 값을 반대로 저장*/
                                }
                                handleToggleTodo(index);
                            }}>
                            {item.completed ? "❤️" : "🤍"}
                        </button>
                        <button
                            className={styles.actionButton}
                            onClick={() => {
                                return handleDeleteTodo(index);
                            }}>
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
