import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import React from "react";

const ErrorMessage = ({
  error,
}: {
  error: FetchBaseQueryError | SerializedError;
}) => {
  const renderErrorMessage = () => {
    if ("status" in error) {
      if (typeof error.data === "string") {
        return error.data; // البيانات قد تكون رسالة نصية
      } else if (
        error.data &&
        typeof error.data === "object" &&
        "message" in error.data
      ) {
        return (error.data as { message: string }).message; // عرض الرسالة الموجودة في data
      } else {
        return `Error status: ${error.status}`; // عرض حالة الخطأ
      }
    } else if ("message" in error) {
      return error.message; // عرض رسالة الخطأ
    } else {
      return "An unknown error occurred";
    }
  };

  return <div>{renderErrorMessage()}</div>; // عرض الرسالة كـ JSX
};

export default ErrorMessage;
