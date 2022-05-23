import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import Search from './Search';
import {Helmet} from 'react-helmet';

export default function Home(){
        return (
          
          <MuiThemeProvider>
            
            <div>
            <Helmet>
                <style>{'body { background:	grey ;  }'}</style>
            </Helmet>
              <NavBar />
              <Search />
            </div>
          </MuiThemeProvider>
        );
}

