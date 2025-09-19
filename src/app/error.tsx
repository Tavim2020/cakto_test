"use client";

import { Error, IError } from "@/components/pages/Error";

const ErrorPage = (props: IError) => {
  return (
    <main className="min-h-dvh max-h-dvh flex flex-col">
      <Error {...props} />
    </main>
  );
};

export default ErrorPage;
