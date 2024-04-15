import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";

import { getProjectById } from "../services/projects";
import { stables } from "../constants/stables";
const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProjectById(id);
        project.index ? project.index : project.index = 0;
        setProject(project);
        console.log(project);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return (
    <MainLayout>
      <section className="w-full h-full py-6 px-6 container mx-auto gap-1 ">
        {!loading && project && (
          <>
            {/* Desktop */}
            <div className="hidden md:block">
              <ul className="flex justify-between text-lg md:grid grid-cols-12 md:grid-cols-10 gap-6 mb-6">
                <li className="col-span-3">{project.index || 0}</li>
                <li className="col-span-4 flex w-full justify-between">
                  <span>{project.title}</span>
                  <span>{new Date(project.year).getFullYear}</span>
                </li>
                <li className="col-span-3 text-right">{project.project}</li>
              </ul>
              <ul className="flex justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-sm text-gray-500 mb-6">
                <li className="col-span-3 grid grid-cols-3 italic text-gray-400 text-justify">
                  <span className="col-span-2">{project.description}</span>
                </li>
                <li className="col-span-7 ">
                  <div className="min-h-[50svh] flex flex-col gap-5">
                    <div className="min-h-[50vh] flex flex-col gap-5">
                      {project.type.toLowerCase() === "film" ? (
                        <div key={project.url} className="grid grid-cols-7">
                          <Vimeo
                            video={project.url}
                            className="aspect-video col-span-4"
                          />
                          <span className="col-span-3 text-right">
                            {/* {index + 1 > 9 ? index + 1 : `0${index + 1}`} */}
                          </span>
                        </div>
                      ) : (
                        project.images.map((file, index) => (
                          <div key={file.id} className="grid grid-cols-7">
                            <img
                              src={`${stables.MEDIA_URL}/${file.image.filename}`}
                              alt="Project Image"
                              className="col-span-4"
                            />
                            <span className="col-span-3 text-right">
                              {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-5 md:hidden">
              <h2 className="text-xl">{project.title}</h2>
              {project.images.map((file, index) => {
                return project?.category?.toLowerCase() === "film" ? (
                  <div>
                    <Vimeo
                      key={file}
                      video={file}
                      className="aspect-video w-full"
                    />
                    <p className="whitespace-pre-line mt-10 text-base">
                      {project.body}
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={`${stables.MEDIA_URL}/${file.image.url}`}
                      alt={file}
                      className="col-span-4"
                    />
                    <span className="absolute top-2 right-2 text-gray-400">
                      {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {!project && (
          <p className="text-center h-[60svh] grid place-content-center text-gray-400">
            {loading ? "Loading project..." : "Shooting location not found"}
          </p>
        )}
        {/* Muestra un mensaje si el proyecto no se encuentra */}
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
