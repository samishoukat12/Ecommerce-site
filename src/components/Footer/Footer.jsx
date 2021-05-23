import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";
import Link from "@material-ui/core/Link";
import MenuLinks from "./FooterLinks/MenuLinks";
import Typography from "@material-ui/core/Typography";
import FooterSearch from "./FooterSearch/FooterSearch";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#ff5757",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className="container-fluid footerColor">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item lg={2} md={2} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography>
                <Link href="#" color="inherit" className="FooterBold">
                  Bengvo
                </Link>
              </Typography>
            </div>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography className="FooterBold">Menu</Typography>
              <MenuLinks />
            </div>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography className="FooterBold">Contact</Typography>

              <Typography className="Contact">
                Street:2017 Harron Drive
              </Typography>

              <Typography className="Contact">City:Baltimore</Typography>

              <Typography className="Contact">State Full: Maryland</Typography>

              <Typography className="Contact">Zip Code:21201</Typography>

              <Typography className="Contact">
                Phone Number:443-498-7166
              </Typography>

              <Typography className="Contact">
                Mobile Number:443-934-9384
              </Typography>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <FooterSearch />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
