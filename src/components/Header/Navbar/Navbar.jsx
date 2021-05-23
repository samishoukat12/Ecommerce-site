import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {useState} from "react"
export default function NaVbar() {
  return (
    <>
    <Navbar expand="lg"  sticky='top' style={{ backgroundColor: "#FF5757"}}>
      <Grid container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Grid item xs={12}>
            <Nav className="mr-auto justify-content-center">
              <Nav.Link
                className="NVBR"
                to="/"
                varient="tabs"

              >
                <Link to="/" className="Lnk ">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Features"
                className="NVBR"
                varient="tabs"

              >
                <Link to="/Features" className="Lnk current">
                  Features
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Shop"
                varient="tabs"
                className="NVBR"

              >
                <Link to="/Shop" className="Lnk ">
                  Shop
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Elements"
                className="NVBR"
                varient="tabs"

              >
                <Link to="/Elements" className="Lnk ">
                  Elements
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Blog"
                varient="tabs"
                className="NVBR"

              >
                <Link to="/Blog" className="Lnk ">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Blog"
                // className="NVBR"
                varient="tabs"

              >
                {/* <Link to="/Blog" className="Lnk ">
                  Pages
                </Link> */}
              </Nav.Link>
            </Nav>
          </Grid>
        </Navbar.Collapse>
      </Grid>
    </Navbar>

    </>
  );
}
