"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  useGetOneProjectQuery,
  useGetProjectsQuery,
} from "@/store/features/api/apiSlice";
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

const Project = () => {
  const { id } = useParams();
  const { isLoading, isError, isSuccess, data, error } =
    useGetOneProjectQuery(id);

  const { data: dataAll } = useGetProjectsQuery("");

  console.log(data);

  const errorMessage =
    (error as { message?: string })?.message ||
    (error as { error?: string })?.error ||
    "Unknown error";

  return (
    <main className="py-16 overflow-hidden">
      <section className="container">
        {isError && <div> {errorMessage}</div>}
        {isSuccess && isLoading == false && (
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 relative z-10">
            <div className="w-[50%] space-y-8">
              <h2 className="text-2xl w-fit pb-2 px-4 border-b-2 border-primary rounded-br-[1rem] rounded-bl-[1rem]">
                {data?.data?.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {data?.data?.description}
              </p>

              <div className="space-x-5">
                <Link href={`${data?.data?.codeView}`}>
                  <Button>
                    Code View <Code className="ms-1" size={15} />
                  </Button>
                </Link>

                <Link href={`${data?.data?.demo}`}>
                  <Button>
                    View Code
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
                src={`http://localhost:1337/${data?.data?.image?.url}`}
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
              {isSuccess &&
                isLoading == false &&
                dataAll?.data.map((item: Iproject) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Link href={`/${item.documentId}`}>
                      <article className="card__article relative overflow-hidden rounded-2xl duration-500 cursor-pointer">
                        <Image
                          width={280}
                          height={280}
                          loading="lazy"
                          src={`http://localhost:1337/${item.image.url}`}
                          alt="image"
                          className="w-[100%] md:w-[420px] h-[250px] rounded-2xl duration-300 hover:duration-300 hover:scale-105"
                        />
                        <div className="card__data w-[90%] bg-foreground py-1 px-2 md:py-3 md:px-4 shadow-2xl rounded-2xl absolute bottom-0 left-0 right-0 mx-auto opacity-0 duration-500">
                          <h2 className="text-md font-medium text-background ml-3 mb-1">
                            {item.title}
                          </h2>
                          <Link href={item.demo}>
                            <Button
                              variant={"link"}
                              className="text-muted hover:text-primary"
                            >
                              View Demo
                              <Code className="ms-1" size={15} />
                            </Button>
                          </Link>
                          <Link href={item.codeView}>
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
