import React from "react";
import MainLayout from "../components/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <section className="w-full h-full p-6 container mx-auto flex flex-col gap-1 ">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-sm">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-4 font- flex flex-col gap-6">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold">JOAN MANUEL CABRERA</h2>
              <span className="text-gray-400 italic">
                Photographer / Director / Producer
              </span>
              <a
                href="mailto:manuelcabreraduarte@gmail.com"
                className="italic w-max relative before:absolute before:content-[''] before:h-px before:bottom-0 before:w-0 before:bg-gray-400  md:hover:before:w-full before:transition-all before:duration-300 before:ease-in-out transition"
              >
                manuelcabreraduarte@gmail.com
              </a>
            </div>
            <div className="flex flex-col text-gray-400">
              <p className="">Montevideo, Uruguay </p>
              <a
                className="hover:text-black transition-colors ease-in-out duration-300 w-max"
                href="https://wa.me/59892518685?text=Hi,%20Joan%20Manuel,%20I'm%20interested%20on%20your%20services."
                target="_blank"
              >
                (+598) 92 518 685
              </a>
            </div>
            <div className="flex flex-col text-gray-400 mt-16">
              <a
                className="hover:text-black transition-colors ease-in-out duration-300 w-max"
                href="https://www.youtube.com/@joanmanuelcabrera"
                target="_blank"
              >
                instagram.
              </a>
              <a
                className="hover:text-black transition-colors ease-in-out duration-300 w-max"
                href="https://www.instagram.com/journalmcd/"
                target="_blank"
              >
                youtube.
              </a>
              <a
                className="hover:text-black transition-colors ease-in-out duration-300 w-max"
                href="https://vimeo.com/user209113944"
                target="_blank"
              >
                vimeo.
              </a>
            </div>
          </div>
          <div className="col-span-4 hidden md:block"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
