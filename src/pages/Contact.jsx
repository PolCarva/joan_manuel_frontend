import React from "react";
import MainLayout from "../components/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <section className="w-full h-full p-6 container mx-auto flex flex-col gap-1 ">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-sm">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-4 font- flex flex-col gap-10">
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
            <p className="text-gray-400">We strive to make good stories. </p>
          </div>
          <div className="col-span-4 hidden md:block"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
