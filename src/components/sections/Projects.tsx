"use client";

import * as React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { Eye, Code } from "lucide-react";
import { ICategories, Iproject } from "@/interfaces";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { getCategories, getData } from "@/utils/appwrite";

const Projects = () => {
  const [active, setActive] = React.useState("All");
  const [data, setData] = React.useState<Iproject[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState<Iproject[]>([]);
  const [categories, setCategories] = React.useState<ICategories[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const lang = useAppSelector((state: RootState) => state.language.lang);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [projects, projectCategories] = await Promise.all([
          getData(),
          getCategories(),
        ]);

        if (projects) {
          setData(projects as unknown as Iproject[]);
          setFilteredProjects(projects as unknown as Iproject[]);
        } else {
          setError("Failed to fetch projects");
        }
        setCategories([...projectCategories]);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (category: string) => {
    setActive(category);

    if (category === "All") {
      setFilteredProjects(data);
    } else {
      setFilteredProjects(
        data.filter((project) =>
          project.categories?.some((cat) => cat.name === category)
        )
      );
    }
  };

  const renderCategories = () => {
    if (isLoading) {
      return (
        <ul className="flex justify-center gap-x-4">
          {[...Array(4)].map((_, index) => (
            <li key={index}>
              <Skeleton className="h-10 w-20 md:w-28" />
            </li>
          ))}
        </ul>
      );
    }

    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }

    return (
      <ul className="flex justify-center gap-x-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Button
              variant={category.name === active ? "default" : "secondary"}
              size="sm"
              className="text-xs md:text-sm"
              onClick={() => handleFilter(category.name)}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    );
  };

  const renderProjects = () => {
    if (isLoading) {
      return (
        <Skeleton className="w-[300px] md:w-[420px] h-[250px] mx-auto rounded-2xl" />
      );
    }

    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }

    return filteredProjects.map((project) => (
      <CarouselItem key={project.$id} className="md:basis-1/2 lg:basis-1/3">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`/${project.$id}`}>
            <article className="card__article relative m-4 overflow-hidden rounded-2xl duration-500 cursor-pointer">
              <Image
                width={420}
                height={250}
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] rounded-2xl duration-500 hover:scale-110"
              />
              <div className="card__data absolute bottom-0 left-0 right-0 mx-auto w-[90%] bg-background text-center py-3 px-4 shadow-2xl rounded-2xl opacity-0 duration-500">
                <h2 className="text-lg font-medium">{project.title}</h2>
                {project.DemoLink && (
                  <Link href={project.DemoLink} target="_blank">
                    <Button
                      variant="link"
                      className="text-primary/80 hover:text-primary"
                    >
                      View Demo
                      <Code className="ms-1" size={15} />
                    </Button>
                  </Link>
                )}
                {project.githubLink && (
                  <Link href={project.githubLink} target="_blank">
                    <Button
                      variant="link"
                      className="text-primary/80 hover:text-primary"
                    >
                      View Code
                      <Eye className="ms-1" size={15} />
                    </Button>
                  </Link>
                )}
              </div>
            </article>
          </Link>
        </motion.div>
      </CarouselItem>
    ));
  };

  return (
    <section className="py-28 border-b-4 border-primary rounded-br-[6rem] rounded-bl-[6rem]" id="Projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xl md:text-2xl mb-20 w-fit px-4 mx-auto pb-1 border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]"
        >
          {lang === "English" ? "Projects" : "المشاريع"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-y-16"
        >
          {renderCategories()}

          <Carousel className="w-full max-w-[350px] sm:max-w-[480px] md:max-w-full">
            <CarouselContent>{renderProjects()}</CarouselContent>
            <div className="flex">
              <CarouselPrevious className="border-2 border-primary" />
              <CarouselNext className="border-2 border-primary" />
            </div>
            <h3 className="pl-5 text-muted-foreground text-sm">
              {lang === "English" ? "Total Projects:" : "مجموع المشاريع:"}{" "}
              {filteredProjects.length}
            </h3>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
