import { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectFilterTodos, selectTodoDetails } from "../states";
import TodoDetails from "./TodoDetails";
import TodoItem from "./TodoItem";

function TodoList() {
  const [id, setId] = useState(null);
  const filteredTodos = useRecoilValue(selectFilterTodos);
  const todoDetails = useRecoilValue(selectTodoDetails(id));

  function selectTodo(_id) {
    setId(_id);
  }

  return (
    <>
      <ul className="mb-20">
        {filteredTodos &&
          filteredTodos.map((t) => (
            <TodoItem key={t._id} todo={t} onClick={() => selectTodo(t._id)} />
          ))}
      </ul>
      {todoDetails && <TodoDetails todo={todoDetails} />}
    </>
  );
}

export default TodoList;
