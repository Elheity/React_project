import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Link } from "react-router-dom";
import './App.css';
import { black, blueA700, red100 } from "material-ui/styles/colors";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(1),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    color: black
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Dates() {
  const classes = useStyles();
  const [currentDate, setCurrentData] = useState(new Date());
  return (
    
    <div className="Dates" style={{backgroundColor: 'white',height:"100px"}}>

      <AppBar color="transparent">
        <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              Pixypay
            </Typography>
              <div className={classes.navlinks}>
                <Link to="/Home" className={classes.link}>
                    Home
                </Link>
                <Link to="/Dates" className={classes.link}>
                    Date
                </Link>
                <Link to="/login" className={classes.link}>
                    logOut
                </Link>
            
              </div>
          </Toolbar>
      </AppBar>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <DatePicker value={currentDate} onChange={setCurrentData} />
        <TimePicker value={currentDate} onChange={setCurrentData} />
        <DateTimePicker value={currentDate} onChange={setCurrentData} />
      </MuiPickersUtilsProvider>
      
    </div>
    
  );
}

export default Dates;

