import * as React from 'react';
import  { useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TvIcon from '@material-ui/icons/Tv';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import {useNavigate} from 'react-router-dom';


const useStyles = makeStyles({
    root:{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex:100,
    },
});

const SimpleBottomNavigation=()=> {
   const classes =  useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

useEffect(() =>{
  if (value === 0) navigate("/");
  else if (value === 1) navigate("/movies");
  else if (value === 2) navigate("/series");
  else if (value === 3) navigate("/search");
}, [value,navigate])

  return (
  
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        style={{ backgroundColor: "black" }}
        showLabels
        className={classes.root}
      >

        <BottomNavigationAction
         style={{ color: "white" }}
         label="Trending"
         icon={<WhatshotIcon />} 
        />

        <BottomNavigationAction
         style={{ color: "white" }}
         label="Movie"
         icon={<MovieIcon />} />

        <BottomNavigationAction
         style={ { color: "white" }} 
         label="TvSeries"
         icon={<TvIcon />} />

        <BottomNavigationAction
         style={{ color: "white" }}
         label="Search"
         icon={<SearchIcon />} />
      </BottomNavigation>
   
  );
}

export default SimpleBottomNavigation;