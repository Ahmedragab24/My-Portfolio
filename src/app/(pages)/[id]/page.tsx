"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code, Eye, Minus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Iproject } from "@/interfaces";
import { Skeleton } from "@/components/ui/skeleton";
import { getData, getProjectById } from "@/utils/appwrite";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Iproject | null>(null);
  const [allProjects, setAllProjects] = useState<Iproject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      setIsLoading(true);
      try {
        const [fetchedProject, fetchedAllProjects] = await Promise.all([
          getProjectById(String(id)),
          getData(),
        ]);
        setProject(fetchedProject as unknown as Iproject);
        setAllProjects(fetchedAllProjects as unknown as Iproject[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  return (
    <main className="py-16 overflow-hidden">
      <section className="container">
        {!isLoading && (
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 relative z-10">
            <div className="w-[50%] space-y-8">
              <h2 className="text-2xl w-fit pb-2 px-4 border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
                {project?.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {project?.description}
              </p>

              <div className="space-x-5">
                <Link href={`${project?.githubLink}`} target="_blank">
                  <Button>
                    Code View <Code className="ms-1" size={15} />
                  </Button>
                </Link>

                <Link href={`${project?.DemoLink}`} target="_blank">
                  <Button>
                    View Demo
                    <Eye className="ms-1" size={15} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="shadow-sm shadow-primary rounded-xl overflow-hidden">
              <Image
                width={600}
                height={350}
                loading="lazy"
                src={`${project?.image}`}
                alt="image"
                className="card__img w-[400px] md:w-[620px] h-[350px] rounded-xl duration-300 hover:duration-300 hover:scale-105"
              />
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 relative z-10">
            <div className="w-[50%] space-y-8">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[350px]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-20 w-full" />
              </div>

              <div className="flex space-x-5">
                <Skeleton className="h-12 w-[60px] md:w-[120px]" />
                <Skeleton className="h-12 w-[60px] md:w-[120px]" />
              </div>
            </div>

            <div>
              <Skeleton className="mx-auto w-[400px] md:w-[620px] h-[350px] rounded-xl" />
            </div>
          </div>
        )}

        <section className="container pt-28 pb-16">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <div className="flex items-center gap-x-1 px-2">
              <h2>Another Projects</h2>
              <Minus size={40} />
            </div>
            <CarouselContent className="py-5 px-2">
              {!isLoading &&
                allProjects?.map((item: Iproject) => (
                  <CarouselItem
                    key={item.$id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={`/${item.$id}`}>
                      <article className="card__article relative overflow-hidden rounded-2xl duration-500 cursor-pointer">
                        <Image
                          width={280}
                          height={280}
                          loading="lazy"
                          src={`${item.image}`}
                          alt="image"
                          className="w-[100%] md:w-[420px] h-[250px] rounded-2xl duration-300 hover:duration-300 hover:scale-105"
                        />
                        <div className="card__data w-[90%] bg-foreground py-1 px-2 md:py-3 md:px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500">
                          <h2 className="text-md font-medium text-background ml-3 mb-1">
                            {item.title}
                          </h2>
                          <Link href={item.DemoLink}>
                            <Button
                              variant={"link"}
                              className="text-muted hover:text-primary"
                            >
                              View Demo
                              <Code className="ms-1" size={15} />
                            </Button>
                          </Link>
                          <Link href={item.githubLink}>
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
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="border-2 border-primary" />
            <CarouselNext className="border-2 border-primary" />
          </Carousel>
        </section>
      </section>
    </main>
  );
};

export default Project;
