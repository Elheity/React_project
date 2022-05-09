import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import Search from './Search';


export default function Home(){
        return (
          <MuiThemeProvider>
            <div>
              <NavBar />
              <Search />
            </div>
          </MuiThemeProvider>
        );
}

