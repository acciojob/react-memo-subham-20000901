import React, {useMemo} from "react";

const UseMemoExample = ({todos}) => {
  const totalTodos = useMemo(() => {
    console.log("Calculating...");
    return todos.length;
  },[todos]);

return <p> Todos: {totalTodos}</p>;

}
export default UseMemoExample;
