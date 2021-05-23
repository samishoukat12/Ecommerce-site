import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
      justifyContent:"center",
      display:'flex'
    },

  },
}));

export default function Features() {
  const classes = useStyles();
 
  const [page,setPage]=useState(1)
  const handleChange = (event,value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10}  page={page} onChange={handleChange}  />
    </div>
  );
}
