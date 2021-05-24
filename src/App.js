import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filter, setFilter] = useState([]);

  //RUN when App Start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const FilterHandler = () => {
      if (status === 'completed') {
        setFilter(todos.filter((todo) => todo.completed === true));
      } else if (status === 'pending') {
        setFilter(todos.filter((todo) => todo.completed === false));
      } else {
        setFilter(todos);
      }
    };
    FilterHandler();
    //save to local Storage
    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, status]);

  //save to local Storage
  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <Grid>
      <div>
        <h1
          style={{
            fontSize: '50px',
            textAlign: 'center',
          }}
        >
          Todo App!
        </h1>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoFilter
          todos={todos}
          setTodos={setTodos}
          filter={filter}
          setFilter={setFilter}
          status={status}
          setStatus={setStatus}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          filter={filter}
        />
      </div>
    </Grid>
  );
};
export default App;
