import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'
import {Button, IconButton} from '@material-ui/core';

import {ThemeProvider} from '@material-ui/core/styles';

import theme from './temaconfig'

import Navbar from './Components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Navbar/>

      <header className="App-header">
        
        <h1>Bibliteca Personal</h1>

        
       
        <Button variant="contained" color="secondary" endIcon={<DeleteIcon/>}>
          Borrar
        </Button>
        <p>
           <DeleteIcon color="primary"/>
        </p>
        <p>
           <IconButton aria-label="delete">
               <DeleteIcon color="secondary"/>
           </IconButton>
        </p>

        <hr/>

        <p>
          <Button variant="contained" color="primary">
              Botón1
          </Button>
          <Button variant="contained" color="secondary">
              Botón2
          </Button> 
        </p>
        
      </header>
    </ThemeProvider>
  );
}

export default App;
