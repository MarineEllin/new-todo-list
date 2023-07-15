import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../states";
import { createTodoRequest } from "../apis";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const setTodosState = useSetRecoilState(todosState);

  function handleChangeAddTodoInput(e) {
    setInputValue(e.target.value);
  }

  async function handleClickAddTodo() {
    const newTodo = await createTodoRequest({
      content: inputValue,
      done: false,
      edit: false,
    });
    setTodosState((oldTodosState) => {
      return [...oldTodosState, newTodo];
    });
    setInputValue("");
  }

  return (
    <div className="d-flex flex-row jc-ai-center mb-20">
      <input
        value={inputValue}
        onChange={handleChangeAddTodoInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClickAddTodo();
          }
        }}
        type="text"
        placeholder="Entrez votre todo"
        className="mr-5 flex-fill"
      />
      <button onClick={handleClickAddTodo} className="btn btn-primary">
        Ajouter
      </button>
    </div>
  );
}

export default AddTodo;
