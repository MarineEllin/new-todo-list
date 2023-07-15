import { useRecoilValue } from "recoil";
import { selectTodosData } from "../states";

function TodoData() {
  const data = useRecoilValue(selectTodosData);
  return (
    <div>
      <ul>
        <li>Nombre de todos : {data.total}</li>
        <li>Nombre de todos en cours : {data.totalOngoing}</li>
        <li>Nombre de todos terminées : {data.totalDone}</li>
        <li>Poucentage de todos terminées : {data.totalDonePercentage}%</li>
      </ul>
    </div>
  );
}

export default TodoData;
