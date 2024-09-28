"use client";

import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepConnector, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface Step {
  title: string;
  history: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const steps: Step[] = [
  {
    title: "Bachelor of Social Work",
    history: "From 2020 to 2024",
    description:
      "I hold a bachelor's degree in social work from the Higher Institute of Social Work in Alexandria in 2024",
    icon: <SchoolIcon />,
    link: "/",
  },
  {
    title: "Computer Science CS50",
    history: "From 2020 to 2022",
    description:
      "Harvard University degree in computer science, CS50 curriculum in computer science integrated",
    icon: <CodeIcon />,
    link: "/",
  },
];

const Education = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="Education"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text:xl md:text-2xl mb-20 w-[9rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          Education
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ width: "100%" }}>
            <Stepper
              activeStep={3}
              alternativeLabel
              connector={<StepConnector />}
              orientation={"horizontal"}
            >
              {steps.map(({ title, history, description, icon }) => (
                <Step key={title}>
                  <StepLabel>
                    <span className="md:text-lg">{icon}</span>
                    <span className="ml-2 md:text-lg">{title}</span>
                  </StepLabel>
                  <Typography className="text-center text-[.75rem] font-light mt-1">
                    {history}
                  </Typography>
                  <Typography className="md:w-[70%] m-auto text-center text-sm font-light text-muted-foreground mt-4">
                    {description}
                  </Typography>
                  <div className="flex justify-center mt-4">
                    <Button variant={"link"}>View certificate</Button>
                  </div>
                </Step>
              ))}
            </Stepper>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
