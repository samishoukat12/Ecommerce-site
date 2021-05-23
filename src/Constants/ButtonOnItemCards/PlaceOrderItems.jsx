import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {FetchItemTitleOrPrice} from "./FetchItemTitleOrPrice"
import { Typography } from '@material-ui/core';
import { WaveSpinner } from "react-spinners-kit";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function PlaceOderItems() {
 const[NameOrPrice,Loading] = FetchItemTitleOrPrice();
  const classes = useStyles();

  if (Loading) {
    return (
      <div className="spinnerSize">
        <center>
        <WaveSpinner size={50} color="#FF5757" />
      </center>
      </div>
    );
  }
  return (
   <>
  {
    NameOrPrice.map((itemss)=>{
    return(
     
      <p>{itemss.price}</p>
      
     
    )
     
    })
  }
  
   <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
     
     
    </form>
   </>
  );
}
