"use client";

import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Eye, Code, Minus } from "lucide-react";
import { ICategories, Iproject } from "@/interfaces";
import {
  useGetCategoriesQuery,
  useGetProjectsQuery,
} from "@/store/features/api/apiSlice";
import { Skeleton } from "@/components/ui/skeleton";
import ErrorMessage from "../ui/ErrorMessage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Projects = () => {
  const { isLoading, isSuccess, isError, error, data } =
    useGetProjectsQuery("");
  const {
    isSuccess: isSuccessCat,
    isError: isErrorCat,
    error: errorCat,
    isLoading: isloadingCat,
    data: dataCat,
  } = useGetCategoriesQuery("");

  const [filteredProjects, setFilteredProjects] = React.useState<
    Iproject[] | null
  >();
  const [active, setActive] = React.useState("All");
  const [countProjects, setCountProjects] = React.useState<number>(
    data?.meta?.pagination.total
  );

  /////////// Handler ///////////
  const filteringCategory = (nameCategory: string) => {
    const filtered = data?.data.filter(
      (item: Iproject & { categories: { title: string }[] }) =>
        item.categories[0]?.title === nameCategory ||
        item.categories[1]?.title === nameCategory
    );

    setFilteredProjects(filtered);
    setActive(nameCategory);
    setCountProjects(filtered.length);
  };

  /////////// Rendering ///////////
  const rendererProjects = () => {
    const projectsToRender = filteredProjects || data?.data;
    return projectsToRender.map((project: Iproject) => (
      <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`/${project.documentId}`}>
            <article className="card__article relative overflow-hidden rounded-2xl duration-500 cursor-pointer m-4">
              <Image
                width={420}
                height={250}
                loading="lazy"
                src={`http://localhost:1337/${project.image.url}`}
                alt="image"
                className="w-[100%] h-[250px] rounded-2xl duration-300 hover:duration-300 hover:scale-110"
              />
              <div className="card__data w-[90%] bg-foreground py-1 px-2 md:py-3 md:px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500">
                <h2 className="text-md font-medium text-background ml-3 mb-1">
                  {project.title}
                </h2>
                <Link href={project.demo}>
                  <Button
                    variant={"link"}
                    className="text-muted hover:text-primary"
                  >
                    View Demo
                    <Code className="ms-1" size={15} />
                  </Button>
                </Link>
                <Link href={project.codeView}>
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
          </Link>
        </motion.div>
      </CarouselItem>
    ));
  };

  const rendererCategories = () => {
    if (isloadingCat) {
      return (
        <ul className="flex justify-center gap-x-2 md:gap-x-4">
          <li>
            <Skeleton className="h-10 w-[60px] md:w-[100px]" />
          </li>
          <li>
            <Skeleton className="h-10 w-[60px] md:w-[100px]" />
          </li>
          <li>
            <Skeleton className="h-10 w-[60px] md:w-[100px]" />
          </li>
          <li>
            <Skeleton className="h-10 w-[60px] md:w-[100px]" />
          </li>
        </ul>
      );
    }

    if (isSuccessCat && isLoading == false) {
      return (
        <ul className="flex  justify-center gap-x-2 md:gap-x-4">
          {dataCat.data.map((category: ICategories) => (
            <li key={category.id}>
              {isSuccessCat && (
                <Button
                  variant={category.title == active ? "default" : "secondary"}
                  size={"sm"}
                  className="text-[.60rem] md:text-sm"
                  onClick={() => filteringCategory(category.title)}
                >
                  {category.title}
                </Button>
              )}

              {isErrorCat && (
                <div className="text-center text-2xl">
                  <ErrorMessage error={errorCat} />
                </div>
              )}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <section
      className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem] overflow-hidden"
      id="Projects"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text:xl md:text-2xl mb-20 w-[7.25rem] mx-auto pb-1  border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          Projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-16"
        >
          {rendererCategories()}

          <div className="flex flex-col md:flex-row justify-center xl:justify-evenly items-center flex-wrap gap-x-10 xl:gap-x-0 gap-y-10">
            {isLoading ? (
              <>
                <Skeleton className="mx-auto w-[300px] md:w-[420px] h-[250px] rounded-2xl" />
                <Skeleton className="mx-auto w-[300px] md:w-[420px] h-[250px] rounded-2xl" />
                <Skeleton className="mx-auto w-[300px] md:w-[420px] h-[250px] rounded-2xl" />
              </>
            ) : (
              isSuccess && (
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-[350px] sm:max-w-[480px] md:max-w-full"
                >
                  <CarouselContent>{rendererProjects()}</CarouselContent>
                  <div className="flex">
                    <CarouselPrevious className="border-2 border-primary" />
                    <CarouselNext className="border-2 border-primary" />
                  </div>
                  <h3 className="pl-5 text-muted-foreground text-sm">
                    Total Projects Is : {countProjects}
                  </h3>
                </Carousel>
              )
            )}

            {isError && (
              <div className="text-center text-2xl">
                <ErrorMessage error={error} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
