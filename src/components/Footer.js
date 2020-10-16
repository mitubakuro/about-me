import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import GitHubIcon from '@material-ui/icons/GitHub';
import Twitter from "@material-ui/icons/Twitter";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://github.com/mitubakuro"><BottomNavigationAction icon={<GitHubIcon />} className={classes.root} /></a>
      <a href="https://twitter.com/programike"><BottomNavigationAction icon={<Twitter />} className={classes.root} /></a>
    </BottomNavigation>
  );
};
export default Footer;
