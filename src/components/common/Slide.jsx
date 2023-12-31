import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  width: "100%",
  marginTop: "20px",
});

const Title = styled(Typography)({
  color: "#fff",
});

function Slide({ movie }) {
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      slidesToSlide={1}
    >
      {movie.map((e) => (
        <>
          <StyledBanner
            key={e.id}
            src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          />
          <Title>{e.original_title}</Title>
        </>
      ))}
    </Carousel>
  );
}

export default Slide;
