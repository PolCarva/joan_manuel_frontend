import React, { useState } from "react";
import MainLayout from "../components/MainLayout";
import PasswordModal from "../components/PasswordModal";

const About = () => {
  const [passwordModal, setPasswordModal] = useState(false);

  const handleCvClick = () => {
    setPasswordModal(!passwordModal);
  };
  return (
    <MainLayout>
      <section className="w-full h-full p-6 container mx-auto flex flex-col gap-1 ">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-sm">
          <div className="col-span-2 hidden md:block"></div>
          <div className="col-span-4 font- flex flex-col gap-6 italic">
            <p>
              Joan Manuel Cabrera (b. Montevideo, 2001) is a filmmaker, writer
              and photographer. His work explores beauty and wonder through
              intimate and sensitive portraits of reality.
            </p>
            <p>
              Born by the river on one side of the Atlantic, and shaped in the
              mountains on the other, his connection and curiosity for the
              various landscapes led him to collaborate with regional artists
              from different fields, such as painting, fashion, and music.
            </p>
            <p>
              Combining his multuple interests all in one, the art of
              storytelling.
            </p>
            <p>
              His first works linked to narrative filmmaking were the short
              films Plaster Bodies (2021) and Together Again (2022), both
              written and directed by Cabrera in his early college years. His
              most recent project Simon (2023) will be his directorial debut at
              national and international film festivals.
            </p>
            <button
              className="text-gray-400 mt-4 hover:text-black transition-colors ease-in-out duration-300 w-fit"
              onClick={handleCvClick}
            >
              CV.
            </button>
            <PasswordModal
              isOpen={passwordModal}
              setIsOpen={setPasswordModal}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
