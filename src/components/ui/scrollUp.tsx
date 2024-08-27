"use client";

import React from "react";
import { Button } from "./button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUpElement = document.getElementById("scroll-up");
      if (window.scrollY >= 250) {
        if (scrollUpElement) {
          scrollUpElement.classList.add("show-scroll");
        }
      } else {
        if (scrollUpElement) {
          scrollUpElement.classList.remove("show-scroll");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      size={"icon"}
      className="scrollup"
      id="scroll-up"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <KeyboardArrowUpIcon />
    </Button>
  );
};

export default ScrollUp;
