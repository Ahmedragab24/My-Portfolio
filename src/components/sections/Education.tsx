"use client";

import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { StepConnector, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/hooks";
import { steps } from "@/constants";

const Education = () => {
  const lang = useAppSelector((state: RootState) => state.language.lang);

  const iconMap = {
    SchoolIcon,
    CodeIcon,
  };

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
          className="text-center text:xl md:text-2xl mb-20 w-fit px-4 mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          {lang == "English" ? "Education" : "التعليم"}
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
              {steps.map(
                ({
                  title,
                  history,
                  description,
                  icon,
                  arabicTitle,
                  arabicDescription,
                  arabicHistory,
                }) => (
                  <Step key={title}>
                    <StepLabel>
                      {React.createElement(
                        iconMap[icon as keyof typeof iconMap],
                        { className: "md:text-lg" }
                      )}
                      <span className="ml-2 md:text-lg">
                        {lang == "English" ? title : arabicTitle}
                      </span>
                    </StepLabel>
                    <Typography className="text-center text-[.75rem] font-light mt-1">
                      {lang == "English" ? history : arabicHistory}
                    </Typography>
                    <Typography className="md:w-[70%] m-auto text-center text-sm font-light text-muted-foreground mt-4">
                      {lang == "English" ? description : arabicDescription}
                    </Typography>
                    <div className="flex justify-center mt-4">
                      <Button variant={"link"}>
                        {lang == "English" ? "View certificate" : "عرض الشهادة"}
                      </Button>
                    </div>
                  </Step>
                )
              )}
            </Stepper>
          </Box>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
