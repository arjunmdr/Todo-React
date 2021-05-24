import React from 'react';
import { Grid } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TodoFilter = ({ todos, setTodos, status, setStatus }) => {
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      <FormControl style={{ minWidth: 220, marginBottom: 50 }}>
        <InputLabel id='demo-simple-select-label'>Filter ToDo</InputLabel>
        <Select onChange={StatusHandler} value={status}>
          <MenuItem value='all'>All</MenuItem>
          <MenuItem value='completed'>Completed</MenuItem>
          <MenuItem value='pending'>Pending!</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default TodoFilter;
