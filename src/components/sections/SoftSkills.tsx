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
import { motion } from "framer-motion";

const SoftSkills = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="SoftSkills"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text:xl md:text-2xl mb-20 w-[9rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          Soft Skills
        </motion.div>

        <div className="flex justify-center items-center text-center">
          <Box sx={{ width: 950, fontSize: "4rem", position: "relative" }}>
            <Grid container justifyContent="center" className="sm:mb-16">
              <Grid item>
                <motion.div
                  className="sm:space-x-11"
                  initial={{ opacity: 0, y: -100 }} // بدء الحركة من الأعلى
                  whileInView={{ opacity: 1, y: 0 }} // الانتقال إلى مكانه الطبيعي
                  transition={{ duration: 0.7 }} // تحديد مدة الحركة
                >
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                          The ability to clearly articulate ideas and
                          suggestions, whether in writing or orally. Ability to
                          actively listen and understand customer and team
                          members&apos; requirements.
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
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                </motion.div>
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
                  <motion.div
                    initial={{ opacity: 0, x: -100 }} // بدء الحركة من اليسار
                    whileInView={{ opacity: 1, x: 0 }} // الانتقال إلى مكانه الطبيعي
                    transition={{ duration: 0.8 }} // تحديد مدة الحركة
                  >
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                            programming challenges and unexpected problems.
                            Ability to research and discover appropriate
                            solutions when faced with technical obstacles.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </motion.div>
                </Grid>

                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }} // بدء الحركة من اليسار
                    whileInView={{ opacity: 1, x: 0 }} // الانتقال إلى مكانه الطبيعي
                    transition={{ duration: 1 }} // تحديد مدة الحركة
                  >
                    <AlertDialog>
                      <AlertDialogTrigger className="px-14">
                        <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                            Ability to effectively manage time to meet
                            deadlines. Priority in distributing tasks and
                            working on the most important tasks first.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </motion.div>
                </Grid>
              </Grid>

              <div className="socket ">
                <div className="gel center-gel">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c1 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c2 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c3 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c4 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c5 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c6 r1">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>

                <div className="gel c7 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>

                <div className="gel c8 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c9 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c10 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c11 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c12 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c13 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c14 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c15 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c16 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c17 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c18 r2">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c19 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c20 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c21 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c22 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c23 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c24 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c25 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c26 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c28 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c29 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c30 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c31 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c32 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c33 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c34 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c35 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c36 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
                <div className="gel c37 r3">
                  <div className="hex-brick h1"></div>
                  <div className="hex-brick h2"></div>
                  <div className="hex-brick h3"></div>
                </div>
              </div>

              <Grid
                item
                xs={6}
                className="sm:space-y-10 flex flex-col justify-center items-center sm:justify-end sm:items-end"
              >
                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }} // بدء الحركة من اليمين
                    whileInView={{ opacity: 1, x: 0 }} // الانتقال إلى مكانه الطبيعي
                    transition={{ duration: 0.8 }} // تحديد مدة الحركة
                  >
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                  </motion.div>
                </Grid>

                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, x: 100 }} // بدء الحركة من اليمين
                    whileInView={{ opacity: 1, x: 0 }} // الانتقال إلى مكانه الطبيعي
                    transition={{ duration: 1 }} // تحديد مدة الحركة
                  >
                    <AlertDialog>
                      <AlertDialogTrigger className="px-14">
                        <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                            user experience. Ensure that high quality and
                            flawless work is provided.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" className="sm:mt-16">
              <Grid item>
                <motion.div
                  className="sm:space-x-11"
                  initial={{ opacity: 0, y: 100 }} // بدء الحركة من الأسفل
                  whileInView={{ opacity: 1, y: 0 }} // الانتقال إلى مكانه الطبيعي
                  transition={{ duration: 0.7 }} // تحديد مدة الحركة
                >
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                          Willingness to work in changing environments and
                          handle diverse tasks.
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
                      <h2 className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-primary px-4 py-2 duration-300 hover:duration-300">
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
                          Ability to think outside the box and provide
                          innovative solutions. Develop attractive user
                          interfaces that are simple to use.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
