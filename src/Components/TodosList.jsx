import PropTypes from "prop-types";

export const TodosList = ({ todos, setTodos, setEditTodo }) => {
  //Function to complete a to-do
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  //Functiom to edit a to-do
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  //Function to delete a to-do
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo?.id}>
          <input
            type="text"
            placeholder="Enter a To do"
            value={todo?.title}
            className={`list ${todo?.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa-solid fa-circle-check"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

TodosList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  setEditTodo: PropTypes.func,
};
