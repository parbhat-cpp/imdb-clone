import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Box, Divider, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { categoryMovies } from "../services/api";
import styled from "@emotion/styled";
import {
  POPULAR_API_URL,
  TOPRATED_API_URL,
  UPCOMING_API_URL,
  movieType,
} from "../constants/constant";
import { useLocation } from "react-router-dom";
import MoviesList from "../components/common/MoviesList";

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
  height: "450px",
  width: "100%",
});

const Component = styled(Box)({
  width: "80%",
  margin: "auto",
});

const Container = styled(Box)({
  background: "#f5f5f5",
  padding: "10px",
});

function Category() {
  const [movies, setMovies] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await categoryMovies(API_URL);
      setMovies(response.results);
    };
    let API_URL = "";
    if (search.includes("popular")) {
      API_URL = POPULAR_API_URL;
    } else if (search.includes("upcoming")) {
      API_URL = UPCOMING_API_URL;
    } else if (search.includes("toprated")) {
      API_URL = TOPRATED_API_URL;
    }
    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          slidesToSlide={1}
        >
          {movies.map((e) => (
            <StyledBanner
              key={e.id}
              src={`https://image.tmdb.org/t/p/original/${e.backdrop_path}`}
            />
          ))}
        </Carousel>
        <Container>
          <Typography variant="h6">IMDb Charts</Typography>
          <Typography variant="h4">
            IMDb {movieType[search.split("=")[1]]} Movies
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              margin: "5px",
            }}
          >
            IMDb top {movies.length} as rated by regular IMDb voters.
          </Typography>
          <Divider />
          <MoviesList movie={movies} />
        </Container>
      </Component>
    </>
  );
}

export default Category;
