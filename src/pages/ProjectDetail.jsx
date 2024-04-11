import React from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";

import { getProjectBySlug } from "../services/projects"; // Importa la función getProjectBySlug
const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  return (
    <MainLayout>
      <section className="w-full h-full py-6 px-6 container mx-auto gap-1 ">
        {project && (
          <div>
            <ul className="flex justify-between text-lg md:grid grid-cols-12 md:grid-cols-10 gap-6 mb-6">
              <li className="col-span-3">
                {project.index > 9 ? project.index : `0${project.index}`}
              </li>
              <li className="col-span-4 flex w-full justify-between">
                <span>{project.name}</span>
                <span>{project.year}</span>
              </li>
              <li className="col-span-3 text-right">{project.project}</li>
            </ul>
            <ul className="flex justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-sm text-gray-500 mb-6">
              <li className="col-span-3 grid grid-cols-3 italic text-gray-400 text-justify">
                <span className="col-span-2">{project.description}</span>
              </li>
              <li className="col-span-7 ">
                <div className="min-h-[50svh] flex flex-col gap-5">
                  {project.files.map((file, index) => {
                    return project.category.toLowerCase() === "film" ? (
                      <div>
                        <div className="grid grid-cols-7">
                          <Vimeo
                          autoplay
                            key={file}
                            video={file}
                            className="aspect-video col-span-4"
                          />
                          <span className="col-span-3 text-right">
                            {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                          </span>
                        </div>
                        <p className="whitespace-pre-line mt-10 text-base">
                          {project.body}
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-7">
                        <img src={`../src/assets/img/${file}.jpg`} alt={file} className="col-span-4" />
                        <span className="col-span-3 text-right">
                          {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        )}
        {!project && (
          <p className="text-center h-[60svh] grid place-content-center text-gray-400">
            Shooting location not found
          </p>
        )}
        {/* Muestra un mensaje si el proyecto no se encuentra */}
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
