import styled from "@emotion/styled";
import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Star } from "@mui/icons-material";

const Banner = styled("img")({
  width: "47px",
});

const Container = styled(List)({
  display: "flex",
});

function MoviesList({ movie }) {
  return (
    <>
      {movie.map((e) => (
        <Container key={e}>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
            />
          </ListItem>
          <ListItem>{e.original_title}</ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography>{e.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{e.release_date}</Typography>
          </ListItem>
        </Container>
      ))}
    </>
  );
}

export default MoviesList;
