import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import { useState } from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function HeartButton() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  let [value, setvalue] = useState(0);
  const ctahandlerIncrement = () => {
    value = value + 1;
    console.log(value);
    setvalue(value);
  };
  const ctahandlerdecrement = () => {
    value = value - 1;
    console.log(value);
    setvalue(value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-label="show new mails"
        style={{ borderRadius: 50 }}
        color="secondary"
        ria-describedby={id}
        onClick={handleClick}
      >
        <StyledBadge badgeContent={value} max={999} color="secondary">
          <FavoriteTwoToneIcon />
        </StyledBadge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography} variant="h6">
          This is Demo Button.
          <Typography>
            {" "}
            Increment or Decrement the value as you want.
          </Typography>
        </Typography>

        <div style={{ marginBottom: 20 }}>
          <center>
            <Button
              onClick={ctahandlerdecrement}
              color="secondary"
              variant="contained"
              style={{ marginRight: 10 }}
            >
              -<FavoriteIcon />
            </Button>
            <Button
              onClick={ctahandlerIncrement}
              color="secondary"
              variant="contained"
            >
              <FavoriteIcon />+
            </Button>
          </center>
        </div>
      </Popover>
    </div>
  );
}
