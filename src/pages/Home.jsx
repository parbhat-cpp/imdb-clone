import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { categoryMovies } from "../services/api";
import { NOWPLAYING_API_URL } from "../constants/constant";
import { Box } from "@mui/material";
import Banner from "../components/common/Banner";
import UpNext from "../components/common/UpNext";
import styled from "@emotion/styled";
import Slide from "../components/common/Slide";

const Wrapper = styled(Box)({
  display: "flex",
  padding: "20px 0",
});

const Component = styled(Box)({
  padding: "0 115px",
});

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);
  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movie={movies} />
          <UpNext movie={movies} />
        </Wrapper>
        <Slide movie={movies} />
        <Slide movie={movies} />
        <Slide movie={movies} />
        <Slide movie={movies} />
        <Slide movie={movies} />
      </Component>
    </>
  );
}

export default Home;
