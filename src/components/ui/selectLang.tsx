"use client";

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { setLanguage } from "../../store/features/Language/languageSlice";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const SelectLang = () => {
  const dispatch: AppDispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.language.lang);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("Language") as "English" | "Arabic";
      if (storedLang) {
        dispatch(setLanguage(storedLang));
      }
    }
  }, [dispatch]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {lang === "English" ? (
            <Image
              src="/English Flag.png"
              alt="Flag"
              width={32}
              height={32}
              className="w-6 h-6 rounded-xl"
            />
          ) : (
            <Image
              src="/Arabic Flag.png"
              alt="Flag"
              width={32}
              height={32}
              className="w-6 h-6 rounded-xl"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => dispatch(setLanguage("Arabic"))}
          className="flex justify-center items-center gap-x-4 cursor-pointer"
        >
          Arabic
          <Image
            src="/Arabic Flag.png"
            alt="Flag"
            width={32}
            height={32}
            className="w-5 h-5 rounded-xl"
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => dispatch(setLanguage("English"))}
          className="flex justify-center items-center gap-x-4 cursor-pointer"
        >
          English
          <Image
            src="/English Flag.png"
            alt="Flag"
            width={32}
            height={32}
            className="w-5 h-5 rounded-xl"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectLang;
