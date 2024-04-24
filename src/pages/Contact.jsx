import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { getConfigByType } from "../services/config";

const Contact = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const configData = await getConfigByType("contact");
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
      <section className="w-full h-full p-2 mx-auto flex flex-col gap-1 ">
        {loading ? (
          <span className="w-full text-center text-gray-400 italic">
            Loading...
          </span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 text-xs">
            <div className="col-span-2 hidden md:block"></div>
            <div className="col-span-4 font- flex flex-col gap-6">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{config.displayName}</h2>
                <span className="text-gray-400 italic">{config.status}</span>
                <a
                  href={`mailto:${config.mail}`}
                  className="italic w-max relative before:absolute before:content-[''] before:h-px before:bottom-0 before:w-0 before:bg-gray-400  md:hover:before:w-full before:transition-all before:duration-300 before:ease-in-out transition"
                  rel="noreferrer"
                >
                  {config.mail}
                </a>
              </div>
              <div className="flex flex-col text-gray-400">
                <p>{config.city}</p>
                <a
                  className="hover:text-black transition-colors ease-in-out duration-300 w-max"
                  href={`https://wa.me/${config.phone.replace(
                    /\D/g,
                    ""
                  )}?text=Hi,%20Joan%20Manuel,%20I'm%20interested%20on%20your%20services.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {config.phone}
                </a>
              </div>
              <div className="flex flex-col text-gray-400 mt-16">
                {config.socialMedia.map((el) => (
                  <a
                    className="hover:text-black transition-colors lowercase ease-in-out duration-300 w-max"
                    href={el.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {el.name}.
                  </a>
                ))}
              </div>
            </div>
            <div className="col-span-4 hidden md:block"></div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Contact;
