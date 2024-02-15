import { useEffect } from "react";
import PropTypes from "prop-types";

export const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  //Function to create a to-do
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: input,
          completed: false,
        },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a to do..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

Form.propTypes = {
  input: PropTypes.string,
  setInput: PropTypes.func,
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  editTodo: PropTypes.string,
  setEditTodo: PropTypes.func,
};
