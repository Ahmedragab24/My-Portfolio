import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Experience = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]"
      id="Experience"
    >
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[9rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Experience
        </h2>
        <Timeline position="alternate-reverse">
          <TimelineItem>
            <TimelineSeparator className="h-32">
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-lg md:text-xl">Mostaql</h2>
              <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                architecto. Dicta voluptates cupiditate pariatur? Ipsa dolorum
                earum perferendis commodi asperiores molestiae aliquam
                excepturi, sunt omnis aut error ut mollitia illo.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator className="h-32">
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-lg md:text-xl">Orkend company</h2>
              <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                architecto. Dicta voluptates cupiditate pariatur? Ipsa dolorum
                earum perferendis commodi asperiores molestiae aliquam
                excepturi, sunt omnis aut error ut mollitia illo.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator className="h-32">
              <TimelineDot className="bg-primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-lg md:text-xl">Eat</h2>
              <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                architecto. Dicta voluptates cupiditate pariatur? Ipsa dolorum
                earum perferendis commodi asperiores molestiae aliquam
                excepturi, sunt omnis aut error ut mollitia illo.
              </p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="bg-primary" />
            </TimelineSeparator>
            <TimelineContent>
              <h2 className="text-lg md:text-xl">Eat</h2>
              <p className="text-[.75rem] md:text-[1rem] font-light text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                architecto. Dicta voluptates cupiditate pariatur? Ipsa dolorum
                earum perferendis commodi asperiores molestiae aliquam
                excepturi, sunt omnis aut error ut mollitia illo.
              </p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
