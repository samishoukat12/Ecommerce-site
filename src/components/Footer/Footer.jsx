import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";
import Link from "@material-ui/core/Link";
import MenuLinks from "./FooterLinks/MenuLinks";
import Typography from "@material-ui/core/Typography";
import FooterSearch from "./FooterSearch/FooterSearch";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
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
      <div
        className={classes.root}
        style={{ paddingBottom: 200, paddingTop: 50 }}
      >
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography className="FooterBold">Menu</Typography>
              <MenuLinks />
            </div>
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography className="FooterBold">Categories</Typography>
              <ul>
                <li>
                  <Link href="#" color="inherit" className="links">
                    Men's Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" className="links">
                    Women's Collection
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" className="links">
                    Jewellery
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" className="links">
                    Accessories
                  </Link>
                </li>
              </ul>
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
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <div style={{ borderTop: "1px solid lightgray" }}>
              <Typography>
                <Link href="#" color="inherit" className="FooterBold">
                  Bengvo
                </Link>
              </Typography>
            </div>
            <div>
              <FooterSearch />
            </div>
            <div className="iconDiv">
              <Button href="https://www.facebook.com/" target="blank" style={{borderRadius:"64px"}}>
                <FacebookIcon className="Footericons" />
              </Button>
              <Button href="https://twitter.com/" target="blank" style={{borderRadius:"64px"}}>
                <TwitterIcon className="Footericons"  />
              </Button>
              <Button href="https://www.instagram.com/" target="blank" style={{borderRadius:"64px"}}>
                <InstagramIcon className="Footericons" />
              </Button>
              <Button href="https://www.youtube.com/" target="blank" style={{borderRadius:"64px"}}>
                <YouTubeIcon className="Footericons" />
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
