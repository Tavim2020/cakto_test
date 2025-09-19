"use client";

import Image from "next/image";
import { IError } from ".";

export const Error = ({ error }: IError) => {
  return (
    <section className="container flex-1 flex flex-col gap-8 items-center justify-center">
      <h3 className="text-3xl font-semibold text-center">{error.message}</h3>

      <Image
        src="/error/illustration.svg"
        alt="error_image"
        width={600}
        height={600}
        className="w-full md:w-160 object-contain"
      />
    </section>
  );
};
