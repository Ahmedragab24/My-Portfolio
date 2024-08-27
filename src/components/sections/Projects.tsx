import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Eye, Code } from "lucide-react";

const Projects = () => {
  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]"
      id="Projects"
    >
      <div className="container">
        <h2 className="text-center text:xl md:text-2xl mb-20 w-[7.25rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
          Projects
        </h2>

        <div className="flex flex-col gap-y-8">
          <ul className="flex  justify-center gap-x-2 md:gap-x-4">
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                ALL
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                Real Website
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                Landing Page
              </Button>
            </li>
            <li>
              <Button size={"sm"} className="text-[.60rem] md:text-sm">
                E-commerce
              </Button>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row justify-center xl:justify-between items-center flex-wrap gap-x-10 xl:gap-x-0 gap-y-10">
            <article className="card__article relative overflow-hidden rounded-2xl shadow-2xl duration-500 cursor-pointer">
              <Image
                width={280}
                height={280}
                loading="lazy"
                src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1724425856/dfg_xwldda.jpg"
                alt="image"
                className="card__img w-[370px] md:w-[420px] rounded-2xl"
              />
              <div className="card__data w-[90%] bg-foreground py-1 px-2 md:py-3 md:px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500 ">
                <h2 className="text-md font-medium text-background ml-3 mb-1">
                  The Great Path
                </h2>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Demo
                    <Code className="ms-1" size={15} />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Code
                    <Eye className="ms-1" size={15} />
                  </Button>
                </Link>
              </div>
            </article>

            <article className="card__article relative overflow-hidden rounded-2xl shadow-2xl duration-500 cursor-pointer">
              <Image
                width={280}
                height={280}
                loading="lazy"
                src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1724425856/dfg_xwldda.jpg"
                alt="image"
                className="card__img w-[370px] md:w-[420px] rounded-2xl"
              />
              <div className="card__data  text-left w-[90%] bg-foreground py-2 px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500 ">
                <h2 className="text-md font-medium text-background ml-3 mb-1">
                  The Great Path
                </h2>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Demo
                    <Code className="mx-1" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Code
                    <Eye className="mx-1" />
                  </Button>
                </Link>
              </div>
            </article>

            <article className="card__article relative overflow-hidden rounded-2xl shadow-2xl duration-500 cursor-pointer">
              <Image
                width={280}
                height={280}
                loading="lazy"
                src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1724425856/dfg_xwldda.jpg"
                alt="image"
                className="card__img w-[370px] md:w-[420px] rounded-2xl"
              />
              <div className="card__data  text-left w-[90%] bg-foreground py-2 px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500 ">
                <h2 className="text-md font-medium text-background ml-3 mb-1">
                  The Great Path
                </h2>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Demo
                    <Code className="mx-1" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Code
                    <Eye className="mx-1" />
                  </Button>
                </Link>
              </div>
            </article>

            <article className="card__article relative overflow-hidden rounded-2xl shadow-2xl duration-500 cursor-pointer">
              <Image
                width={280}
                height={280}
                loading="lazy"
                src="https://res.cloudinary.com/dk4yvlwr0/image/upload/v1724425856/dfg_xwldda.jpg"
                alt="image"
                className="card__img w-[370px] md:w-[420px] rounded-2xl"
              />
              <div className="card__data  text-left w-[90%] bg-foreground py-2 px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500 ">
                <h2 className="text-md font-medium text-background ml-3 mb-1">
                  The Great Path
                </h2>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Demo
                    <Code className="mx-1" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Code
                    <Eye className="mx-1" />
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
