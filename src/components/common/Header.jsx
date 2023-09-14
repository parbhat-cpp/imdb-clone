import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import { logoUrl } from "../../constants/constant";
import { Menu, BookmarkAdd, ExpandMore } from "@mui/icons-material";

// components
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../constants/route";

const StyledToolBar = styled(Toolbar)({
  background: "#121212",
  minHeight: "56px !important",
  padding: "0 115px !important",
  justifyContent: "space-between",
  "& > *": {
    padding: "0 16px",
  },
  "& > div": {
    display: "flex",
    alignItem: "center",
    cursor: "pointer",
    "& > p": {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  "& > p": {
    fontSize: 14,
    fontWeight: 600,
  },
});

const Logo = styled("img")({
  width: 64,
});

const InputSearchField = styled(InputBase)({
  background: "#fff",
  height: "30%",
  width: "55%",
  borderRadius: 5,
});

function Header() {
  const [open, setOpen] = useState(null);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Logo
          src={logoUrl}
          onClick={() => navigate(routePath.home)}
          style={{ cursor: "pointer" }}
        />
        <Box onClick={handleClick}>
          <Menu />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDB
          <Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>WatchList</Typography>
        </Box>
        <Typography>Sign in</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
}

export default Header;
