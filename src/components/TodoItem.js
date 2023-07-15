import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../states";
import { deleteTodoRequest, updateTodoRequest } from "../apis";

function TodoItem({ todo, onClick }) {
  const setTodosState = useSetRecoilState(todosState);
  const [inputValue, setInputValue] = useState(todo.content);

  async function updateTodo(editTodo) {
    const updatedTodo = await updateTodoRequest(editTodo);
    setTodosState((oldTodosState) => {
      return oldTodosState.map((ot) =>
        ot._id === updatedTodo._id ? updatedTodo : ot
      );
    });
  }

  async function handleClickDeleteTodo() {
    await deleteTodoRequest(todo._id);
    setTodosState((oldTodosState) => {
      return oldTodosState.filter((ot) => ot._id !== todo._id);
    });
  }

  return (
    <li className="d-flex align-items-center mb-20">
      {todo.edit ? (
        <>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className="flex-fill mr-5"
          />
          <button
            onClick={() =>
              updateTodo({ ...todo, edit: false }, setInputValue(todo.content))
            }
            className="btn btn-reversed mr-5"
          >
            Annuler
          </button>
          <button
            onClick={() =>
              updateTodo({ ...todo, content: inputValue, edit: false })
            }
            className="btn btn-primary"
          >
            Enregister
          </button>
        </>
      ) : (
        <>
          {todo.done ? (
            <i
              onClick={() => updateTodo({ ...todo, done: !todo.done })}
              className="fa-regular fa-circle-check mr-5"
            />
          ) : (
            <i
              onClick={() => updateTodo({ ...todo, done: !todo.done })}
              className="fa-regular fa-circle mr-5"
            />
          )}
          <span
            className="flex-fill mr-5"
            style={{ textDecoration: todo.done && "line-through" }}
          >
            {todo.content}
          </span>
          <button
            onClick={() => updateTodo({ ...todo, edit: true })}
            className="btn btn-reversed mr-5"
          >
            Modifier
          </button>
          <button
            onClick={handleClickDeleteTodo}
            className="btn btn-warning mr-5"
          >
            Suprimer
          </button>
          <button onClick={onClick} className="btn btn-primary">
            Details
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
