import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState, useEffect } from "react";
import { FetchCarouseldata } from "./fetchCarouseldata";
import "./Carousel.css";
import { WaveSpinner } from "react-spinners-kit";


export default function CarouselSlider(props) {
  const [Imgs, Loading] = FetchCarouseldata();
  if (Loading) {
    return (
      <div className="SpinnerSize">
        <center>
          <WaveSpinner size={50} color="#FF5757" />
        </center>
      </div>
    );
  }

  return (
    <>
      <Carousel
        animation="slide"
        timeout={800}
        swipe="boolean"
        fullHeightHover="boolean"
        navButtonsAlwaysVisible="boolean"
        indicators="false"
      >
        {Imgs.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
}

function Item(props) {
  const [Imgs, Loading] = FetchCarouseldata();

  if (Loading) {
    return (
      <center>
        <Skeleton variant="rect" width={650} height={500} />
      </center>
    );
  }
  return (
    <Paper>
      <center>
        {" "}
        <img src={props.item.image} alt={props.item.image} className="Image" />
      </center>

      {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
    </Paper>
  );
}
