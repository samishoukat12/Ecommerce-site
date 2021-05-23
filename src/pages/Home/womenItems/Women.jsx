import Container from "@material-ui/core/Container";
import { FetchWomenItem } from "./FetchWomenItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Skeleton from "@material-ui/lab/Skeleton";
import "./Women.css";
import ReadMoreReact from "read-more-react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { WaveSpinner } from "react-spinners-kit";


// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//   },
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function WomenItems() {

 

  const [products, Loading] = FetchWomenItem();
  if (Loading) {

    return (
      // <center>
      //   <Button variant="primary">
      //     {/* <Spinner
      //       as="span"
      //       animation="grow"
      //       size="sm"
      //       role="status"
      //       aria-hidden="true"
      //     /> */}
      //     <CircularProgress style={{height:20,width:20,marginRight:10}} />
      //     <span className="sr-only">Loading...</span>
      //   </Button>
      // </center>
      <div className="spinnerSize">
        <center>
        <WaveSpinner size={50} color="#FF5757" />
        </center>
      </div>
    );
  }
  return (
    <Container className="margin-Top">
      <Row>
        <Col xs={12} xl={4} md={4} sm={12}>
          {products.map((item, id) => {
            if (Loading) {
              return (
                <center>
                  <Button variant="primary">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                </center>
              );
            }
            return (
              <CardGroup>
                <Card className="Card product-box">
                  <div>
                    <div className="img-section">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className=" card-img  "
                      />
                      <div className="overlay">
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#FF5757", color: "#ffffff" }}
                          className="bton"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="card-description text-muted">
                        <ReadMoreReact
                          text={item.description}
                          min={80}
                          ideal={100}
                          max={200}
                          readMoreText="Read More..."
                        />
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </CardGroup>
            );
          })}
        </Col>
        <Col xs={12} xl={4} md={4} sm={12}>
          {products.map((item, id) => {
            if (Loading) {
              return (
                <center>
                  <Button variant="primary">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                </center>
              );
            }
            return (
              <CardGroup>
                <Card className="Card product-box">
                  <div>
                    <div className="img-section">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className=" card-img  "
                      />
                      <div className="overlay">
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#FF5757", color: "#ffffff" }}
                          className="bton"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="card-description text-muted">
                        <ReadMoreReact
                          text={item.description}
                          min={80}
                          ideal={100}
                          max={200}
                          readMoreText="Read More..."
                        />
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </CardGroup>
            );
          })}
        </Col>
        <Col xs={12} xl={4} md={4} sm={12}>
          {products.map((item, id) => {
            if (Loading) {
              return (
                <center>
                  <Button variant="primary">
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Loading...</span>
                  </Button>
                </center>
              );
            }
            return (
              <CardGroup>
                <Card className="Card product-box">
                  <div>
                    <div className="img-section">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className=" card-img  "
                      />
                      <div className="overlay">
                        <Button
                          variant="contained"
                          style={{ backgroundColor: "#FF5757", color: "#ffffff" }}
                          className="bton"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="card-description text-muted">
                        <ReadMoreReact
                          text={item.description}
                          min={80}
                          ideal={100}
                          max={200}
                          readMoreText="Read More..."
                        />
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </CardGroup>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
