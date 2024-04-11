import React from "react";
import MainLayout from "../components/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <section className="w-full h-full p-6 container mx-auto flex flex-col gap-1 ">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-sm">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-4 font- flex flex-col gap-10 italic">
            <p>
              Production and Creative Studio focused in upcoming and independent
              storytellers. Based in Montevideo, Uruguay.
            </p>
            <p>
              Senobia represents a new way of telling storys, built on passion,
              collaboration and beauty. Through creative productions, we aproach
              every project with sensitivity, simplicity and wonder.
            </p>
            <p className="text-gray-400">We strive to make good stories. </p>
          </div>
          <div className="col-span-4 hidden md:block"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
