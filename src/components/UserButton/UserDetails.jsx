import { FetchUser } from "./FetchUser";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import EmailIcon from "@material-ui/icons/Email";
import LinearProgress from "@material-ui/core/LinearProgress";
import { RotateSpinner } from "react-spinners-kit";
import HomeIcon from "@material-ui/icons/Home";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./UserButton.css";

import ContactsIcon from "@material-ui/icons/Contacts";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const useStyless = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function UserDetails() {
  const classes = useStyless();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const [Users, Loading] = FetchUser();

  if (Loading) {
    return (
      <center>
        <RotateSpinner size={40} color="#FF5757" />
      </center>
    );
  }
  return (
    <>
      {Users.map((item, id) => {
        return (
          <>
            <List>
              <ListItem
                button
                onClick={handleClick}
                style={{ backgroundColor: "#FF5C5F", color: "#ffffff" }}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={item.username} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {Loading ? (
                <div className={classes.root}>
                  <LinearProgress />
                  <LinearProgress color="secondary" />
                </div>
              ) : (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.nested}
                      style={{ backgroundColor: "#FF7073", color: "#ffffff" }}
                    >
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.email} />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.nested}
                      style={{ backgroundColor: "#FF8587", color: "#ffffff" }}
                    >
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.address.street} />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.nested}
                      style={{ backgroundColor: "#FF999B", color: "#ffffff" }}
                    >
                      <ListItemIcon>
                        <ContactsIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.phone} />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.nested}
                      style={{ backgroundColor: "#FFADAF", color: "#ffffff" }}
                    >
                      <ListItemIcon>
                        <FormatListNumberedIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.address.zipcode} />
                    </ListItem>
                    <ListItem
                      button
                      className={classes.nested}
                      style={{ backgroundColor: "#FF999B", color: "#ffffff" }}
                    >
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.address.geolocation.lat} />
                    </ListItem>
                  </List>
                </Collapse>
              )}
            </List>
          </>
        );
      })}
    </>
  );
}
