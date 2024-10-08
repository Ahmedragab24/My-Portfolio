"use client";

import Link from "next/link";
import Typewriter from "typewriter-effect";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button } from "@/components/ui/button";
import DownloadingIcon from "@mui/icons-material/Downloading";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="home"
    >
      <div className="container flex flex-col-reverse md:flex-row md:items-center md:justify-between md:h-[89vh]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-2 text-center md:text-left"
          data-aos="fade-up"
        >
          <div className="home--data">
            <h3 className="text-xl lg:text-2xl">Hello,</h3>

            <div className="flex space-x-3 py-2 text-xl lg:text-3xl font-bold justify-center md:justify-start items-center">
              <h1>I&apos;m</h1>
              <div className="text-primary">
                <Typewriter
                  options={{
                    strings: ["Eng-Ahmed Ragab", "Front-end Developer"],
                    autoStart: true,
                    delay: 100,
                    loop: true,
                  }}
                />
              </div>
            </div>

            <p className="text-muted-foreground text-sm font-light lg:text-xl lg:w-[80%]">
              I am a strong communicator and a collaborative team player and
              enjoy working in a fast-paced environment. I am also comfortable
              working independently and taking ownership of projects. I am
              constantly seeking new challenges and opportunities to learn and
              grow as a software engineer.
            </p>

            <div className="flex space-x-2 justify-center items-center md:justify-start my-4">
              <Button>
                Download CV <DownloadingIcon className="ms-2 text-[1rem]" />
              </Button>
              <Button variant={"ghost"} className="flex items-center space-x-2">
                <Link href={"/#About"}>More me</Link>
                <HorizontalRuleIcon fontSize="medium" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-3 !mb-4">
            <Link href="./">
              <FacebookOutlinedIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=0546965474&text=Hello, more information!">
              <WhatsAppIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=0546965474&text=Hello, more information!">
              <LinkedInIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=0546965474&text=Hello, more information!">
              <GitHubIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>

            <Link href="https://api.whatsapp.com/send?phone=0546965474&text=Hello, more information!">
              <EmailIcon className="text-muted-foreground duration-200 hover:duration-200 hover:text-primary hover:translate-y-[-2px]" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-1 md:mt-2 sm:w-80 sm:mx-auto md:w-[50rem] lg:w-[80rem] z-20"
        >
          <svg
            className="home--blob fill-primary w-[300px] sm:w-[350px]  lg:w-[450px] mx-auto mb-2 md:mb-0"
            viewBox="0 0 550 591"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="maskBlob" mask-type="alpha">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
              170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
              447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
              587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
              438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />
            </mask>
            <g mask="url(#maskBlob)">
              <path
                d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
              170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
              447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
              587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
              438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
              />

              <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern1)" />

            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                />
              </pattern>

              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  href="#imageBlob"
                  transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                />
              </pattern>

              {/* <!-- Insert your profile (recommended size: 640 x 940) --> */}
              <image
                id="imageBlob"
                width="640"
                height="940"
                href="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1723554998/me_vdbxlz.png"
              />
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
