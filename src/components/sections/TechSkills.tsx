import React from "react";
import Image from "next/image";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

const TechSkills = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]"
      id="TechSkills"
    >
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[12rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Technical Skills
        </h2>
        <div className="flex flex-col justify-center gap-y-12 items-center md:flex-row      md:justify-between">
          <div
            dir="Rtl"
            className="left flex flex-col justify-center items-center space-y-5 md:space-y-14"
          >
            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <CodeIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Programming languages</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  C - C++ - Python - JavaScript - TypeScript - Sql
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3 ms-20">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <TerminalIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Computer Science</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Algorithms - Data structure - RAM control - Opp - Design
                  Patterns - Solid Principles
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <ControlCameraIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Project control skills</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Command Line - Git & Github - Docker - Postman
                </h3>
              </div>
            </div>
          </div>

          <div className="center">
            <div className="skills--center bg-secondary">
              <Image
                className="rounded-[38%] pt-5 px-5 "
                width={340}
                height={640}
                src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1723562110/me2_xnxgvr.png"
                alt="skills"
              />
            </div>
          </div>

          <div
            dir="Ltr"
            className="right flex flex-col justify-center items-center space-y-5 md:space-y-14"
          >
            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <DesignServicesIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Ui Designer</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  UI Components - Responsive Design - Figma - Design System
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3 ms-20">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <HtmlIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Front-end</h2>

                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Html - Css - Js - Ts - React - Gulp - Pug - Jest - Redux
                  Toolkit - Next.js
                </h3>
              </div>
            </div>

            <div className="flex justify-center items-center gap-x-3">
              <div className="bg-secondary p-2  border-2 border-primary rounded-full">
                <CssIcon className="text-primary" />
              </div>
              <div>
                <h2 className="md:text-xl">Frameworks & Libraries</h2>
                <h3 className="max-w-[20rem] text-muted-foreground text-sm md:text-lg">
                  Bootstrap - Tailwind - Sass - Mui - ChakraUi - ShadcnUi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
