import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, filter }) => {
  return (
    <div>
      {filter.map((todo) => {
        return (
          <div key={todo.date} style={{ marginBottom: '25px' }}>
            <TodoItem setTodos={setTodos} todo={todo} todos={todos} />
          </div>
        );
      })}
    </div>
  );
};
export default TodoList;
