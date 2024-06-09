import React from 'react';
import file from './projectsData.json';

const getImagePath = (imageName) => {
  try {
    return new URL(`./Images/${imageName}`, import.meta.url).toString();
  } catch (err) {
    console.error(`Image not found: ${imageName}`);
    return null;
  }
};

export default function Projects() {
  return (
    <div id="project" className="my-3 md:my-8 lg:my-8 mx-5">
      <h1 className="text-center text-3xl md:text-5xl lg:text-5xl mb-3 font-bold mt-20">Projects</h1>
      <h2 className="text-center lg:text-3xl md:text-3xl text-xl text-slate-100 mb-10">
        I have worked on a wide range of projects. Here are some of my projects.
      </h2>
      <div className="projects grid grid-cols-1 sm:grid cols-2 lg:grid-cols-3 ">
        {file.map((item, index) => {
          const imagePath = item.logo ? getImagePath(item.logo) : null;
          return (
            <div key={index} className="project m-2 cursor-pointer border-2 border-white p-2 rounded-lg mt-8 bg-zinc-900 flex flex-col">
              <div className="mb-2">
                {imagePath ? (
                  <img className="h-full w-full" src={imagePath} alt="Project Logo" />
                ) : (
                  <div className="h-1/3 w-full flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 mb-5">
                {item.tech.map((skill, skillIndex) => (
                  <div key={skillIndex} className="border-2 rounded-md m-1  border-zinc-950 overflow-visible text-xl">
                    <h2 className="text-purple-400 p-1 m-1">{skill}</h2>
                  </div>
                ))}
              </div>
              <div>
                <h1 className="m-1 p-1 text-3xl font-medium">{item.title}</h1>
                <h2 className="text-slate-200 text-xl ml-1 p-1">{item.description}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
