import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import React from "react";
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));

function Navbar() {

  const classes = useStyles();
  let history = useHistory();

  function routerTo(path) {
    history.push(path)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          PUNK API PROJECT :D
        </Typography>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => routerTo('/')}>
          <HomeIcon/>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => routerTo('/about-us')}>
          <RoomIcon/>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => routerTo('/table-list-beers')}>
          <BatteryFullIcon/>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => routerTo('/table-list-beers')}>
          <BatteryFullIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
