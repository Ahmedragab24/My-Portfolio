"use client";

import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { ExperienceData } from "@/constants";

const Experience = () => {
  const lang = useAppSelector((state: RootState) => state.language.lang);

  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="Experience"
    >
      <div className="container">
        <m.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text:xl md:text-2xl mb-20 w-fit px-4 mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          {lang == "English" ? "Experience" : "الخبرة"}
        </m.div>
        <Timeline position="alternate-reverse">
          {ExperienceData.map(
            (item) => (
              <TimelineItem key={item.title}>
                <TimelineSeparator className="md:h-36">
                  <TimelineDot className="bg-primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <m.div
                    initial={{ opacity: 0, x: item.motion }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: item.duration }}
                  >
                    <h2 className="text-lg md:text-xl text-primary font-bold">
                      {lang == "English" ? item.title : item.arabicTitle}
                    </h2>
                    <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                      {lang == "English" ? item.description : item.arabicDescription}
                    </p>
                    <Link
                      href={item.link}
                      target="_blank"
                      className="underline decoration-primary"
                    >
                      {lang =="English" ? item.titleLink : item.arabicTitleLink}
                    </Link>
                  </m.div>
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
