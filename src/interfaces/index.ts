import { ReactNode } from "react";

export interface Menu {
  Title: string;
  Url: string;
}

export interface Iproject {
  documentId?: string;
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
  };
  demo: string;
  codeView: string;
  categories?: [
    {
      title: string;
    }
  ];
  imagesGroup: [
    {
      url: string;
    }
  ];
}

export interface ICategories {
  id: string;
  title: string;
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
