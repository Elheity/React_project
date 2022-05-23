import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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

function Navbar() {
  const classes = useStyles();
  
  return (
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
  );
}
export default Navbar;
