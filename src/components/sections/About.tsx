"use client";

import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const About = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 350 && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [started]);

  // Count 1
  useEffect(() => {
    if (started && count1 < 20) {
      const timer = setInterval(() => {
        setCount1((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [started, count1]);

  // Count 2
  useEffect(() => {
    if (started && count2 < 80) {
      const timer = setInterval(() => {
        setCount2((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [started, count2]);

  // Count 3
  useEffect(() => {
    if (started && count3 < 100) {
      const timer = setInterval(() => {
        setCount3((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [started, count3]);

  // Count 4
  useEffect(() => {
    if (started && count4 < 50) {
      const timer = setInterval(() => {
        setCount4((prevCount) => prevCount + 1);
      }, 20);

      return () => clearInterval(timer);
    }
  }, [started, count4]);

  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="About"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text:xl md:text-2xl mb-20 w-[8rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          About Me
        </motion.div>

        <div className=" flex flex-col justify-center items-center gap-5 md:flex-row mb-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="circle flex flex-col space-y-3 w-56 bg-secondary p-8 md:p-4 xl:p-14  rounded-[5rem] text-center"
          >
            <h3 className="text-2xl text-primary font-bold duration-300">
              {count1}
            </h3>
            <p className="text-sm font-light">Total items</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <KeyboardDoubleArrowRightIcon className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="circle flex flex-col space-y-3 w-56 bg-secondary p-8 md:p-4 xl:p-14 rounded-[5rem] text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-primary font-bold">{count2}</h3>
            <p className="text-sm font-light">Total items</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <KeyboardDoubleArrowRightIcon className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="circle flex flex-col space-y-3 w-56 bg-secondary p-8  md:p-4 xl:p-14 rounded-[5rem] text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-primary font-bold">{count3}</h3>
            <p className="text-sm font-light">Total items</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <KeyboardDoubleArrowRightIcon className="hidden lg:block text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="circle flex flex-col space-y-3 w-56 bg-secondary p-8 md:p-4 xl:p-14 rounded-[5rem] text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl text-primary font-bold">{count4}</h3>
            <p className="text-sm font-light">Total items</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm md:text-lg m-auto text-muted-foreground md:w-[70%]"
        >
          My solid foundation in data structures, algorithms, object-oriented
          programming, and design patterns has allowed me to develop efficient,
          maintainable, and scalable code. I am proficient in JavaScript and
          TypeScript and have extensive experience working with React and Redux.
          I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and
          other front-end technologies.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center mt-4"
        >
          <Button variant={"secondary"} size={"lg"}>
            Show code
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
