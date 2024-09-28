import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

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
