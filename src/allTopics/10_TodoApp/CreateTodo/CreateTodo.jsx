import style from "./CreateTodo.module.css";

const CreateTodo = ({ todo, setTodo, handleCreateTodo,editTodoId }) => {
  return (
    <div>
      <form className={style.todoForm} onSubmit={handleCreateTodo}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Enter a todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button >{editTodoId ? "update" :"create"}</button>
      </form>
    </div>
  );
};
export default CreateTodo;
