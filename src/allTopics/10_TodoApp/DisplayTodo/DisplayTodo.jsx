import style from "./DisplayTodo.module.css";

const DisplayTodo = ({ allTodos, handledeletetodos, handleEdittodo }) => {
  return (
    <div>
      {allTodos.length === 0 ? (
        <p>No Todos Available</p>
      ) : (
        <section>
          {allTodos.map((todo) => {
            let { id, text } = todo;
            return (
              <div key={id}>
                <h3>{text}</h3>
                <button onClick={() => handleEdittodo(id)}>Edit</button>
                <button onClick={() => handledeletetodos(id)}>Delete</button>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};
export default DisplayTodo;
