import { ReactNode } from "react";

export interface Menu {
  Title: string;
  Url: string;
}

export interface Iproject {  
  $id?: string;
  title: string;
  description: string;
  image: string;
  DemoLink: string;
  githubLink: string;
  categories?: [
    {
      name: string;
    }
  ];
}

export interface ICategories {
  id: string;
  name: string;
}

export interface Step {
  title: string;
  history: string;
  description: string;
  arabicTitle: string;
  arabicHistory: string;
  arabicDescription: string;
  icon: ReactNode;
  link: string;
}
