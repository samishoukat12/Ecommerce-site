/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import "./MenuLinks.css"
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function MenuLinks() {
  const classes = useStyles();


  return (
    <Typography className={classes.root}>
     
     <ul>
              <li style={{textDecoration:"none"}}>
                <Link to="/" color="inherit" className="links">Home</Link>
              </li>
              <li>
                <Link to="/Features" color="inherit" className="links">Feature</Link>
              </li>
              <li>
                <Link to="/Shop" color="inherit" className="links">Shop</Link>
              </li>
              <li>
                <Link to="/Elements" color="inherit" className="links">Elements</Link>
              </li>
              <li>
                <Link to="/Blog" color="inherit" className="links">Blog</Link>
              </li>
            </ul>
    </Typography>
  );
}
