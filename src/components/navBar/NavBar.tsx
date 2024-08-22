"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ModeToggle } from "../ui/modeToggle";
import Link from "next/link";

const pages = [
  {
    Title: "Home",
    Url: "./",
  },
  {
    Title: "About me",
    Url: "./about",
  },
  {
    Title: "Technical Skills",
    Url: "./#TechSkills",
  },
  {
    Title: "Soft Skills",
    Url: "./#SoftSkills",
  },
  {
    Title: "Educations",
    Url: "./#Education",
  },
  {
    Title: "Experience",
    Url: "./#Experience",
  },
  {
    Title: "Projects",
    Url: "./#Projects",
  },
  {
    Title: "Contact Me",
    Url: "./#Contact",
  },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      className="!bg-primary  z-50 border-b-4 border-primary rounded-br-[2rem] rounded-bl-[2rem] sticky "
    >
      <Container className="container">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ Title, Url }) => (
                <MenuItem key={Title} onClick={handleCloseNavMenu}>
                  <Link href={Url}>
                    <Typography
                      textAlign="center"
                      className="duration-300 hover:!text-primary hover:duration-300"
                    >
                      {Title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ Title, Url }) => (
              <Link key={Title} href={Url}>
                <Button
                  className="capitalize duration-300 hover:!text-secondary hover:duration-300"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {Title}
                </Button>
              </Link>
            ))}
          </Box>

          <ModeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
