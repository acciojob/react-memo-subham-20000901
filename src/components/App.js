import React from "react";
import { useState} from "react";
import TodoList from "./ReactMemo";
import UseMemoExample from "./UseMemo";

const App = () => {
  
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function increasedCount() {
    setCount(count + 1);
  }

  function addTodo() {
    setTodos([...todos, "New Todo"]);
  }

  function handleInputs() {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    } else {
      alert("Minimum 5 characters required");
    }
  }

  return (
    <>
      <div className="container">
        <h1>My todos</h1>

        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={handleInputs}>Submit</button>

        <br />
        <br />
        <button onClick={addTodo}>Add Todo</button>

        <TodoList todos={todos} />

        <UseMemoExample todos={todos} />

        <hr />

        <p>
          Count : {count}
          <button onClick={increasedCount}>+</button>
        </p>
      </div>
    </>
  );
};

export default App;
