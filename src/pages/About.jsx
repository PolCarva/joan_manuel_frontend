import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import PasswordModal from "../components/PasswordModal";
import { getConfigByType } from "../services/config";

const About = () => {
  const [passwordModal, setPasswordModal] = useState(false);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCvClick = () => {
    setPasswordModal(!passwordModal);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configData = await getConfigByType("about");
        setConfig(configData);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <MainLayout>
      <section className="w-full h-full p-3 mx-auto flex flex-col gap-1  max-w-[calc(100svw-5px)]">
        {loading ? (
          <span className="w-full text-center font-light text-gray-400">
            Loading.
          </span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-xs">
            <div className="col-span-2 hidden md:block"></div>
            <div className="col-span-4 md:w-10/12 flex flex-col gap-6 italic">
              <p className="whitespace-pre-line">{config && config.bio}</p>
              {config?.cv && (
                <>
                  <button
                    className="text-gray-400 italic mt-4 hover:text-black transition-colors ease-in-out duration-300 w-fit"
                    onClick={handleCvClick}
                  >
                    CV.
                  </button>
                  <PasswordModal
                    pass={config.pass}
                    file={config.cv.filename}
                    isOpen={passwordModal}
                    setIsOpen={setPasswordModal}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default About;
