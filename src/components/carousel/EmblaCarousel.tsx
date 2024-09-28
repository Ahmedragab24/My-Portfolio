import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { Iproject } from "@/interfaces";
import { Button } from "../ui/button";
import { Code, Eye } from "lucide-react";

type PropType = {
  slides: Iproject[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla flex flex-col md:flex-row justify-center xl:justify-evenly items-center flex-wrap gap-x-10 xl:gap-x-0 gap-y-10">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((project) => (
            <div className="embla__slide" key={project.id}>
              <div className="embla__slide__number">
                <Link href={`/${project.documentId}`} key={project.id}>
                  <article className="card__article relative overflow-hidden rounded-2xl duration-500 cursor-pointer m-4">
                    <Image
                      width={420}
                      height={250}
                      loading="lazy"
                      src={`http://localhost:1337/${project.image.url}`}
                      alt="image"
                      className="w-[100%] h-[250px] rounded-2xl"
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
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
