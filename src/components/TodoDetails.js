function TodoDetails({ todo: { _id, createdAt } }) {
  return (
    <div className="">
      <ul>
        <li>Todo créée le : {createdAt}</li>
        <li>Todo id : {_id} </li>
      </ul>
    </div>
  );
}

export default TodoDetails;
