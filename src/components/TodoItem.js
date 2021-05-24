import React from 'react';
import './TodoItem.css';
import { Button, Card, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import dateFormat from 'dateformat';

const TodoItem = ({ todos, setTodos, todo, setFilter }) => {
  const deleteItem = () => {
    setTodos(todos.filter((el) => el.date !== todo.date));
  };

  const completeItem = () => {
    setTodos(
      todos.map((item) => {
        if (item.date === todo.date) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid md={6} xl={3}>
          <Card
            variant='outlined'
            className={` ${todo.completed ? 'completed' : 'item-card'}`}
          >
            <List>
              <ListItem>
                <ListItemText
                  className={` ${todo.completed ? 'completed-text' : ''}`}
                  primary={todo.text}
                  secondary={dateFormat(
                    todo.date,
                    'dddd, mmmm d, yyyy, h:MM TT'
                  )}
                />
              </ListItem>
              <Button
                onClick={deleteItem}
                style={{ margin: '8px' }}
                variant='contained'
                color='secondary'
                size='large'
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Button
                onClick={completeItem}
                style={{ margin: '8px' }}
                variant='contained'
                color='primary'
                size='large'
                startIcon={<CheckIcon />}
              >
                finish
              </Button>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default TodoItem;
