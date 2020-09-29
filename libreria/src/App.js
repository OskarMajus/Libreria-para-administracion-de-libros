import React from 'react';

import {IconButton} from '@material-ui/core';

import {ThemeProvider} from '@material-ui/core/styles';

import theme from './temaconfig'


import Principal from './Components/Principal';

function App() {
  return (
    <ThemeProvider theme={theme}>  
    
      <Principal/>

    </ThemeProvider>
  );
}

export default App;
