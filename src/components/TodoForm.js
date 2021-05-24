import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const TodoForm = ({ todos, setTodos, inputText, setInputText }) => {
  const submitInputText = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        date: new Date(),
      },
    ]);
    setInputText('');
  };
  return (
    <div style={{ marginBottom: '20px' }}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <TextField
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          label='Add Todo Here...'
          variant='outlined'
        />
        <Button
          onClick={submitInputText}
          style={{ margin: '8px' }}
          variant='contained'
          color='primary'
          size='large'
          startIcon={<AddIcon style={{ fontSize: '35px' }} />}
        >
          Add
        </Button>
      </Grid>
    </div>
  );
};
export default TodoForm;
