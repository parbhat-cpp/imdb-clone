import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  width: "100%",
});

function Banner({ movie }) {
  return (
    <Box
      sx={{
        width: "65%",
      }}
    >
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
          <StyledBanner
            key={e.id}
            src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default Banner;
