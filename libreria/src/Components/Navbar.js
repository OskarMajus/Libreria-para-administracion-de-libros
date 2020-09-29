import React, {Component} from 'react';
import {AppBar, IconButton, Toolbar, Typography, Button, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) =>({
  
  menuButton:{
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]:{
      display: 'none',
    }
  },
  title:{
    flexGrow: 1
  }, 
  appBar:{
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    }
  }
}));


const Navbar = (props)=>{   
                  
        const classes = useStyles();     
        return(            
          
              <nav>
                  <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="menu"  onClick={() =>props.accionAbrir()}>
                            <MenuIcon/>
                        </IconButton>
                      <Typography variant="h6" className={classes.title} color="inherit" >
                            Biblioteca Personal
                      </Typography>
                      <Button   color="inherit"> Login </Button>
                    </Toolbar>
                  </AppBar>
                             
                  
              </nav>
        );
    
}

export default Navbar;