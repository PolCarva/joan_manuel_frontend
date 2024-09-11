import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { getProjectBySlug } from "../services/projects";
import { stables } from "../constants/stables";
import ImageSlider from "../components/ImageSlider";

const ProjectDetail = () => {
  const { slug } = useParams();
  const [error, setError] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readMore, setReadMore] = useState(false);
  const [showSwiper, setShowSwiper] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProjectBySlug(slug);
        setProject(project);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  // Helper function to render video based on URL type
  const renderVideo = (url) => {
    try {
      const vimeoRegex = /vimeo\.com\/(\d+)/;
      const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

      if (vimeoRegex.test(url)) {
        const videoId = url.match(vimeoRegex)[1];
        return (
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        );
      } else if (youtubeRegex.test(url)) {
        const videoId = url.match(youtubeRegex)[1];
        return (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        );
      } else {
        throw new Error("Unsupported video URL");
      }
    } catch {
      setError(true);
      return <div className="col-span-4 aspect-video bg-gray-200/10 text-gray-400 italic grid place-content-center rounded-md">Video not found</div>;
    }
  };

  return (
    <MainLayout>
      <section className="w-full h-full p-3  mx-auto gap-1  max-w-[calc(100svw-5px)]">
        {!loading && project && (
          <>
            {showSwiper && (
              <ImageSlider
                images={project.images}
                index={activeImage}
                close={() => setShowSwiper(false)}
              />
            )}
            {/* Desktop */}
            <div className="hidden md:block">
              <ul className="flex justify-between text-xs md:grid grid-cols-12 md:grid-cols-10 gap-6 mb-6">
                <li className="col-span-3 capitalize italic">{project.type}</li>
                <li className="col-span-4 flex w-full justify-between">
                  <span>{project.title}</span>
                  <span>{getYear(project.year)}</span>
                </li>
                <li className="col-span-3 text-right italic">
                  {project.project}
                </li>
              </ul>
              <ul className="flex justify-between md:grid grid-cols-12 md:grid-cols-10 gap-6 text-xs text-gray-500 mb-6">
                <li className="col-span-3 grid md:w-10/12 grid-cols-3 italic text-gray-400 text-justify">
                  <span className="col-span-2 flex whitespace-pre-wrap flex-col gap-5">
                    {project.description}
                    {readMore && (
                      <span className="mt-5">{project.read_more}</span>
                    )}
                    {project.read_more && (
                      <>
                        <span
                          className="col-span-1 underline cursor-pointer"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {readMore ? "Read Less" : "Read More"}
                        </span>
                      </>
                    )}
                  </span>
                </li>
                <li className="col-span-7">
                  <div className="min-h-[50svh] flex flex-col gap-5">
                    <div className="min-h-[50vh] flex flex-col gap-5">
                      {project.type.toLowerCase() === "film" ? (
                        <div key={project.url} className="grid grid-cols-7">
                          {error ? (
                            <div className="col-span-4 aspect-video bg-gray-200/10 text-gray-400 italic grid place-content-center rounded-md">
                              Video not found
                            </div>
                          ) : (
                            <div className="aspect-video col-span-4">
                              {renderVideo(project.url)}
                            </div>
                          )}
                          <span className="col-span-3 text-right text-gray-400">
                            01
                          </span>
                        </div>
                      ) : (
                        project.images.map((file, index) => (
                          <div key={file.id} className="grid grid-cols-7">
                            <img
                              src={`${stables.MEDIA_URL}/${file.image.filename}`}
                              alt="Project Image"
                              className="col-span-4"
                              onContextMenu={(e) => e.preventDefault()}
                              onClick={() => {
                                setActiveImage(index);
                                setShowSwiper(true);
                              }}
                            />
                            <span className="col-span-3 text-right">
                              {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                            </span>
                          </div>
                        ))
                      )}
                      <p className="mt-5 text-xs text-black whitespace-pre-line">
                        {project.credits}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="flex flex-col gap-5 md:hidden">
              <div className="flex justify-between w-full">
                <h2 className="text-xs">{project.title}</h2>
                <span className="text-xs text-gray-400">
                  {getYear(project.year)}
                </span>
              </div>
              {project.type.toLowerCase() === "film" ? (
                <div key={project.url} className="flex flex-col w-full">
                  {error ? (
                    <div className="col-span-4 aspect-video bg-gray-200 grid place-content-center rounded-md">
                      Video not found
                    </div>
                  ) : (
                    renderVideo(project.url)
                  )}
                </div>
              ) : (
                project.images.map((file, index) => (
                  <div key={file.id} className="grid grid-cols-7">
                    <img
                      src={`${stables.MEDIA_URL}/${file.image.filename}`}
                      alt="Project Image"
                      className="col-span-7"
                      onClick={() => {
                        setActiveImage(index);
                        setShowSwiper(true);
                      }}
                    />
                  </div>
                ))
              )}
              <p className="mt-5 text-xs text-black whitespace-pre-line">
                {project.credits}
              </p>
            </div>
          </>
        )}
        {!project && (
          <p className="w-full italic text-xs text-center text-gray-400">
            {loading ? "Loading." : "Shooting location not found"}
          </p>
        )}
      </section>
    </MainLayout>
  );
};

export default ProjectDetail;
