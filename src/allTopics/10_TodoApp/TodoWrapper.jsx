import { useState } from "react";
import CreateTodo from "./CreateTodo/CreateTodo";
import DisplayTodo from "./DisplayTodo/DisplayTodo";
import style from "./TodoWrapper.module.css";

const TodoWrapper = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    let todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  });

  const [editTodoId, setEditTodoId] = useState(null);
  const handleCreateTodo = (e) => {
    e.preventDefault();
    console.log("Todo Created");

    if (editTodoId) {
      const updateTodos = allTodos.map((ele) => {
        if (ele.id === editTodoId) {
          return { ...ele, text: todo };
        }
        return ele;
      });
      setAllTodos(updateTodos)
      localStorage.setItem("todos",JSON.stringify(updateTodos))
      setTodo("")
      setEditTodoId(null);
      return;
    }

    let newTodo = {
      id: Date.now(),
      text: todo.trim(), //it is used for remove extra spacing
    };
    console.log(newTodo);

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    setAllTodos(todos);

    setTodo(""); //clearing input field
  };
  const handledeletetodos = (id) => {
    let todos = [...allTodos];
    let filteredTodos = todos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };
  const handleEdittodo = (id) => {
    const todos = [...allTodos];
    const todoToBeEdited = todos.find((ele) => ele.id === id);
    setTodo(todoToBeEdited.text);
    setEditTodoId(id);
  };
  return (
    <main className={style.wrapper}>
      <h1 className={style.heading}>Todo App</h1>
      <CreateTodo
        todo={todo}
        setTodo={setTodo}
        handleCreateTodo={handleCreateTodo}
        editTodoId={editTodoId}
      />
      <DisplayTodo
        allTodos={allTodos}
        handledeletetodos={handledeletetodos}
        handleEdittodo={handleEdittodo}
      />
    </main>
  );
};
export default TodoWrapper;
