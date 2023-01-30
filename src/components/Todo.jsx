import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllToDos from "../Services/Actions/Actions";
import "./Todo";

const Todo = () => {
  const { toDos, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllToDos());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo App</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <p>{error.message}</p>}
      <section className="todo__section">
        {toDos &&
          toDos.map((todo) => {
            console.log(todo);
            const { id, title } = todo;
            return (
              <article>
                <h4>{id}</h4>
                <h4>{title}</h4>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Todo;
