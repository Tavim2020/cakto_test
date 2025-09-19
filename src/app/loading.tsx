import Image from "next/image";

const Loading = () => {
  return (
    <main className="min-h-dvh max-h-dvh flex flex-col">
      <section className="container flex-1 flex items-center justify-center">
        <Image
          src="/logos/cakto.png"
          alt="cakto"
          width={600}
          height={600}
          className="w-full md:w-160 object-contain"
        />
      </section>
    </main>
  );
};

export default Loading;
