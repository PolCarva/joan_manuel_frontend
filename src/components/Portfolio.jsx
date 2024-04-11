import React from "react";
import { getProjectsByCategory } from "../services/projects";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const filmProjects = getProjectsByCategory("film");
  const photoProjects = getProjectsByCategory("photography");
  
  return (
    <section className="w-full h-full p-6 container mx-auto flex flex-col gap-1 ">
      {/* Film Projects */}
      <ul className="flex justify-between md:grid grid-cols-2 md:grid-cols-10 gap-6 text-sm text-gray-500 mb-6">
        <li className="italic col-span-2 hidden md:block">Index</li>
        <li className="italic col-span-2">Film</li>
        <li className="italic col-span-2 grid-cols-2  hidden md:grid">
          <span className="col-span-1 text-right">Year</span>
        </li>
        <li className="italic col-span-2 text-right md:text-left">Project</li>
        <li className="italic col-span-2 hidden md:grid grid-cols-2">
          <span className="col-span-2 text-right">Files</span>
        </li>
      </ul>
      <div className="flex flex-col">
        {filmProjects.map((film) => {
          const newIndex = film.index > 9 ? film.index : `0${film.index}`;
          return (
            <Link
              to={`/projects/${film.name}`}
              className="flex hover:text-gray-400 transition-colors ease-in-out duration-200 justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-sm"
            >
              <span className="italic col-span-2 hidden md:block">{newIndex}</span>
              <span className="italic col-span-2">{film.name}</span>
              <span className="italic col-span-2 grid-cols-2  hidden md:grid">
                <span className="col-span-1 text-right">{film.year}</span>
              </span>
              <span className="italic col-span-2">{film.project}</span>
              <span className="italic col-span-2 grid-cols-2  hidden md:grid">
                <span className="col-span-2 text-right">
                  {film.files.length}
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      {/* Photography Projects */}
      <ul className="flex justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-sm text-gray-500 my-6">
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
        {photoProjects.map((film, index) => {
          const newIndex = film.index > 9 ? film.index : `0${film.index}`;
          return (
            <Link
              key={film.name}
              to={`/projects/${film.name}`}
              className="flex hover:text-gray-400 transition-colors ease-in-out duration-200 justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-sm"
            >
              <span className="italic col-span-2 hidden md:block">
                {newIndex}
              </span>
              <span className="italic col-span-2">{film.name}</span>
              <span className="italic col-span-2 grid-cols-2  hidden md:grid">
                <span className="col-span-1 text-right">{film.year}</span>
              </span>
              <span className="italic col-span-2">{film.project}</span>
              <span className="italic col-span-2 grid-cols-2  hidden md:grid">
                <span className="col-span-2 text-right">
                  {film.files.length}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
