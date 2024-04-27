import React, { useEffect, useState } from "react";
import { getProjectsByType } from "../services/projects";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filmProjects, setFilmProjects] = useState([]);
  const [photoProjects, setPhotoProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const films = await getProjectsByType("film");
        setFilmProjects(films);
        const photos = await getProjectsByType("photography");
        setPhotoProjects(photos);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="w-full h-full p-3 mx-auto flex flex-col gap-1 max-w-[calc(100svw-5px)]">
      {/* Film Projects */}
      {loading ? (
        <span className="w-full text-center font-light text-gray-400">
          Loading.
        </span>
      ) : (
        <>
          <ul className="flex justify-between italic font-light md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs mb-6">
            <li className="italic col-span-2 hidden md:block">Index</li>
            <li className="italic col-span-2">Film</li>
            <li className="italic col-span-2 grid-cols-3 grid">
              <div></div>
              <span className="md:col-span-1 col-span-2 text-center">Year</span>
            </li>
            <li className="italic col-span-2 text-right hidden md:grid md:text-left">
              Project
            </li>
            <li className="italic col-span-2 hidden md:grid grid-cols-2">
              <span className="col-span-2 text-right">Files</span>
            </li>
          </ul>
          <div className="flex flex-col">
            {filmProjects?.map((film, index) => {
              const newIndex =
                filmProjects.length - 1 - index > 9
                  ? index
                  : `0${filmProjects.length - 1 - index}`;
              const year = new Date(film?.year).getFullYear();
              return (
                <Link
                  key={film?.id}
                  to={`/projects/${film?.slug}`}
                  className="flex hover:text-gray-400 transition-colors ease-in-out duration-200 justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs"
                >
                  <span className="col-span-2 hidden md:block">{newIndex}</span>
                  <span className="col-span-2">{film?.title}</span>
                  <span className="col-span-2 grid-cols-3 grid">
                    <div></div>
                    <span className="md:col-span-1 col-span-2 text-center">
                      {year}
                    </span>
                  </span>
                  <span className="col-span-2 hidden md:grid italic font-light">
                    {film?.project}
                  </span>
                  <span className="col-span-2 grid-cols-2  hidden md:grid">
                    <span className="col-span-2 text-right">01</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Photography Projects */}
          <ul className="flex justify-between italic font-light md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs mt-12 mb-6">
            <li className="italic col-span-2 hidden md:block"></li>
            <li className="italic col-span-2">Photography</li>
            <li className="italic col-span-2 grid-cols-2 hidden md:grid">
              <span className="col-span-1 text-right"></span>
            </li>
            <li className="italic col-span-2 hidden md:block"></li>
            <li className="italic col-span-2 grid-cols-2 hidden md:grid">
              <span className="col-span-2 text-right"></span>
            </li>
          </ul>
          <div className="flex flex-col">
            {photoProjects?.map((photo, index) => {
              const newIndex =
                photoProjects.length - 1 - index > 9
                  ? index
                  : `0${photoProjects.length - 1 - index}`;
              const year = new Date(photo?.year).getFullYear();

              return (
                <Link
                  key={photo?.id}
                  to={`/projects/${photo?.slug}`}
                  className="flex hover:text-gray-400 transition-colors ease-in-out duration-200 justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs"
                >
                  <span className="col-span-2 hidden md:block">{newIndex}</span>
                  <span className="col-span-2">{photo?.title}</span>
                  <span className="col-span-2 grid-cols-3 grid">
                    <div></div>
                    <span className="md:col-span-1 col-span-2 text-center">
                      {year}
                    </span>
                  </span>
                  <span className="col-span-2 hidden md:grid italic font-light">
                    {photo?.project}
                  </span>
                  <span className="col-span-2 grid-cols-2  hidden md:grid">
                    <span className="col-span-2 text-right">
                      {photo?.images.length > 9
                        ? photo?.images.length
                        : `0${photo?.images.length}`}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Portfolio;
