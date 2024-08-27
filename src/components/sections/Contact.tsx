"use client";

import React from "react";
import { Button } from "../ui/button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-28" id="Contact">
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[9.55rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Contact Me
        </h2>
        <div className="container mx-auto px-5">
          <div className="mb-12 flex w-full flex-col text-center">
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Feel free to reach out to us! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {/* <!-- form --> */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-primary bg-secondary bg-opacity-40 py-1 px-3 text-base leading-8 text-muted-foreground placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Name
                  </label>
                </div>
              </div>

              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-primary bg-secondary bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Email
                  </label>
                </div>
              </div>

              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-primary bg-secondary  bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:bg-input focus:ring-2 focus:ring-primary"
                    placeholder="Message"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-primary transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                  >
                    Message
                  </label>
                </div>
              </div>

              <div className="mx-auto p-2">
                <Button size={"lg"}>Send Massage</Button>
              </div>

              {/* <!-- footer --> */}
              <div className="mt-8 w-full border-t border-gray-700 p-2 pt-8 text-center">
                <p className="my-3  leading-normal">
                  <span className="text-primary">Ahmed Ragab</span>
                  <br />
                  Front-end Developer
                </p>
                <div className="inline-flex space-x-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
