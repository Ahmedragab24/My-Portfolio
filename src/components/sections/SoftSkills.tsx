"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Handshake } from "lucide-react";
import { Bug } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InsightsIcon from "@mui/icons-material/Insights";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const SoftSkills = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]"
      id="SoftSkills"
    >
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[9rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Soft Skills
        </h2>

        <div className="flex justify-center items-center text-center">
          <Box sx={{ width: 950, fontSize: "4rem", position: "relative" }}>
            <Grid container justifyContent="center" className="sm:mb-20">
              <Grid item className="sm:space-x-11">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                      <Handshake className="mx-2" />
                      Effective Communication
                    </h2>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <Handshake className="mx-2 inline" />
                        Effective Communication
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        The ability to clearly articulate ideas and suggestions,
                        whether in writing or orally. Ability to actively listen
                        and understand customer and team members&apos;
                        requirements.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                      <Bug className="mx-2" />
                      Problem Solving
                    </h2>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <Bug className="mx-2 inline" />
                        Problem Solving
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Critical and analytical thinking to deal with
                        programming challenges and unexpected problems. Ability
                        to research and discover appropriate solutions when
                        faced with technical obstacles.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Grid>
            </Grid>

            <Grid
              container
              justifyContent="center"
              className="!flex !flex-col sm:!flex-row !justify-center !items-center"
            >
              <Grid
                item
                xs={6}
                className="sm:space-y-10 flex flex-col justify-center items-center sm:justify-start sm:items-start"
              >
                <Grid item>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                        <GroupsIcon className="mx-2" />
                        Teamwork & collaboration
                      </h2>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <GroupsIcon className="mx-2" />
                          Teamwork & collaboration
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Ability to work effectively with other developers,
                          designers, and project managers. Understand the
                          importance of cooperation in achieving common goals.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Grid>

                <Grid item>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                        <AvTimerIcon className="mx-2" />
                        Time management
                      </h2>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <AvTimerIcon className="mx-2" />
                          Time management
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Ability to effectively manage time to meet deadlines.
                          Priority in distributing tasks and working on the most
                          important tasks first.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Grid>
              </Grid>

              <div className="loader">
                <div className="box">
                  <div className="logo">
                    <svg aria-hidden="true" viewBox="0 0 100 100">
                      <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                    </svg>
                  </div>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>

              <Grid
                item
                xs={6}
                className="sm:space-y-10 flex flex-col justify-center items-center sm:justify-end sm:items-end"
              >
                <Grid item>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                        <LocalLibraryIcon className="mx-2" />
                        Continuous Learning
                      </h2>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <LocalLibraryIcon className="mx-2" />
                          Continuous Learning
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Passion for learning new technologies and keeping
                          abreast of continuous updates in the field of web
                          development. Prepare to continuously develop your
                          skills and follow the latest trends in front-end
                          development.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Grid>

                <Grid item>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                        <SettingsSuggestIcon className="mx-2" />
                        Attention To Detail
                      </h2>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          <SettingsSuggestIcon className="mx-2" />
                          Attention To Detail
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Ability to detect small errors that may affect the
                          user experience. Ensure that high quality and flawless
                          work is provided.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" className="sm:mt-20">
              <Grid item className="sm:space-x-11">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                      <InsightsIcon className="mx-2" />
                      Resilience & Adaptation
                    </h2>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <InsightsIcon className="mx-2" />
                        Resilience & Adaptation
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Ability to adapt to changes in projects or tools used.
                        Willingness to work in changing environments and handle
                        diverse tasks.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                  <AlertDialogTrigger>
                    <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2">
                      <EmojiObjectsIcon className="mx-2" />
                      Creativity & Excellence
                    </h2>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <EmojiObjectsIcon className="mx-2" />
                        Creativity & Excellence
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Ability to think outside the box and provide innovative
                        solutions. Develop attractive user interfaces that are
                        simple to use.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
