import { useState } from "react";

function App() {
    // 컴포넌트를 만들 떄 처음 해야되는건, 내가 원하는 모양을 구상하고
    // 그 원하는 걸 만들어낼 때 필요한 state에 대해서 생각해봄

    // 1. 투두 리스트의 갯수를 관리할 state  => number    => array고, length를 구하면 갯수가 나오네?  => 필요없겠다
    // 2. 투두 리스트 목록을 관리할 state   => 어떠한 모양이 되어야 하냐 => 목록이니까 array겠다 => 그 안엔 string이 들어가겠다
    const [todoList, setTodoList] = useState([]);          // To Do 리스트를 저장할

    return (
        <>
            <h1>My ToDo ({todoList.length})</h1>
            <from>
                <input type={"text"} placeholder={"write your to do..."}/>
                <button type="submit">Add To Do</button>
            </from>
            <hr />
            <ul>
                <li>더미</li>
                <li>데이터</li>
                <li>투두 추가</li>
            </ul>
        </>
    )
}

export default App;