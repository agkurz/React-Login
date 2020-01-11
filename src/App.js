import React from 'react';
import { Grid } from '@material-ui/core/';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3} className="mainContainer">
        <Login />
      </Grid>
    </div>
  );
}

export default App;
