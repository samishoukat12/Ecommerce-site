import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import PersonIcon from "@material-ui/icons/Person";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AppsIcon from '@material-ui/icons/Apps';
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FetchAddCart } from "./FetchAddCart";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import LineWeightIcon from '@material-ui/icons/LineWeight';
import { RotateSpinner } from "react-spinners-kit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function AddCartDetailsList() {
  const classes = useStyles();
  const [Cartz, Loading] = FetchAddCart();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  if (Loading) {
    return (
      <center>
        <RotateSpinner size={40} color="#FF5757" style={{ color: "#FF5757" }} />

      </center>
    );
  }

  return (
    <>
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            List of Total Carts
          </ListSubheader>
        }
      />
      {Cartz.map((cart, id) => {
        return (
          <>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  user Id
                </ListSubheader>
              }
            >
              <ListItem button onClick={handleClick} style={{ backgroundColor: "#FF5C5F", color: "#ffffff" }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={cart.userId} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Date and Time
                    </ListSubheader>
                  }
                >
                  <ListItem button className={classes.nested} style={{ backgroundColor: "#FF7073", color: "#ffffff" }}>
                    <ListItemIcon>
                      <CalendarTodayIcon />
                    </ListItemIcon>
                    <ListItemText primary={cart.date} />
                  </ListItem>
                </List>
                <List
                  component="div"
                  disablePadding
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Product Id
                    </ListSubheader>
                  }
                >
                  <ListItem button className={classes.nested} style={{ backgroundColor: "#FF8587", color: "#ffffff" }}>
                    <ListItemIcon>
                      <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary="5" />
                  </ListItem>
                </List>
                <List
                  component="div"
                  disablePadding
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Product Quantity
                    </ListSubheader>
                  }
                >
                  <ListItem button className={classes.nested} style={{ backgroundColor: "#FF999B", color: "#ffffff" }}>
                    <ListItemIcon>
                      <LineWeightIcon />
                    </ListItemIcon>
                    <ListItemText primary="10" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </>
        );
      })}
    </>
  );
}
