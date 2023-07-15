import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";
import TodoData from "./components/TodoData";
import { Suspense } from "react";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="cardTitle d-flex flex-row my-20">
        <h1 className="d-flex flex-fill">Todo List</h1>
        <FilterTodo />
      </div>
      <div className="card mb-20">
        <Suspense>
          <TodoData />
        </Suspense>
      </div>
      <div className="card">
        <AddTodo />
        <Suspense>
          <TodoList />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
