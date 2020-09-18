import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete'
import {Button, IconButton} from '@material-ui/core';



function App() {
  return (
    <div className="App">
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
        
      </header>
    </div>
  );
}

export default App;
