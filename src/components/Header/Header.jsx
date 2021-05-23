import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import UserButtonModal from "../UserButton/UserButton";
import HeartButton from "../HeartButton/HeartButton";
import AddCart from "../AddCartButton/AddCart"
import SearchButton from "../searchButton/SearchButton"
import logo from "../../Assets/logo/Ecommerce.jpg"

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function Header() {
  return (
    <div>
      <center className="HeaderColor">
        <Link to="/" className="HeaderLink">
          <span >Hy! Nice to meet you</span>
        </Link>
      </center>
      <Navbar expand="lg" bg="light" sticky="top"  className="nav-padding" >
        <Grid container xs={12}>
          <Grid item lg={4} xs={3} md={4} sm={4} className="d-flex ">
            <div>
              <UserButtonModal />
            </div>
            <div>
              <HeartButton />
            </div>
          </Grid>
          <Grid itemlg={4} xs={6} md={4} sm={4}>
            <center>
              <Typography>
                <Navbar.Brand href="/"  className="brandBold animate__rubberBand">
                Bengvo
                </Navbar.Brand>
              </Typography>
            </center>
          </Grid>
          <Grid
            item
            lg={4}
            xs={3}
            sm={4}
            md={4}
            className="d-flex flex-row-reverse"
          >
            <div>
              <SearchButton/>
            </div>

           <div>
           <AddCart/>
           </div>
          </Grid>
        </Grid>
      </Navbar>
    </div>
  );
}
