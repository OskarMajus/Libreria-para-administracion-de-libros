import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider}from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const Listas = () =>{
    return (
        <div>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <LibraryBooksIcon/>
                    </ListItemIcon>
                    <ListItemText primary="primer elemento" />                  
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LocalLibraryIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Segundo elemento" />                  
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}

export default Listas;