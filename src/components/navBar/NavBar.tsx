"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ModeToggle } from "../ui/modeToggle";
import Link from "next/link";
import Fade from "@mui/material/Fade";

interface Menu {
  Title: string;
  Url: string;
}

const MenuLink: Menu[] = [
  {
    Title: "Home",
    Url: "./",
  },
  {
    Title: "About me",
    Url: "./about",
  },
  {
    Title: "Contact Me",
    Url: "./#Contact",
  },
];

const NavLink: Menu[] = [
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      className="!bg-primary z-50 border-b-4 border-primary shadow-sm shadow-gray-700 rounded-br-[2rem] rounded-bl-[2rem] sticky "
    >
      <Container className="container">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
              {MenuLink.map(({ Title, Url }) => (
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
              <MenuItem>
                <Typography
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  textAlign="center"
                  className="duration-300 hover:!text-primary hover:duration-300"
                >
                  About me
                  <ArrowDropDownIcon />
                </Typography>
              </MenuItem>

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {NavLink.map(({ Title, Url }) => (
                  <MenuItem onClick={handleClose} key={Title}>
                    <Link href={Url}>{Title}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            {MenuLink.map(({ Title, Url }) => (
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
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ my: 2, color: "white", display: "block" }}
              className="!text-white capitalize duration-300 hover:!text-secondary hover:duration-300"
            >
              About me
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {NavLink.map(({ Title, Url }) => (
                <MenuItem onClick={handleClose} key={Title}>
                  <Link href={Url}>{Title}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <ModeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
