import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Component = styled(Box)({
  width: "40%",
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  paddingLeft: "20px",
  "&>p": {
    color: "#f5c518",
    fontWeight: 600,
    fontSize: "18px",
    marginBottom: 10,
  },
});

const Poster = styled("img")({
  width: "88px",
});

const Wrapper = styled(Box)({
  color: "#fff",
  display: "flex",
  "&>p": {
    marginLeft: "20px",
  },
});

function UpNext({ movie }) {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movie.splice(0, 3).map((e) => (
        <Wrapper key={e.id}>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
          />
          <Typography>{e.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
}

export default UpNext;
