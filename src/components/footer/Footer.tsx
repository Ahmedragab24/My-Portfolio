import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      className=" bg-primary text-primary-content  py-3 border-t-1 border-primary rounded-tr-[6rem] rounded-tl-[6rem] shadow-sm shadow-gray-700 "
      id="Footer"
    >
      <aside className="container  flex-col flex md:flex-row justify-between items-center text-center gap-y-3">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CodeOffIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: "inherit",
            }}
          >
            Ahmed Ragab
          </Typography>
        </Box>

        {/* <p className="font-bold">ACME Industries Ltd.</p> */}

        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
