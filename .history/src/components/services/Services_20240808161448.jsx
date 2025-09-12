import React from "react";
import work1 from "../../assets/work1.png";
import ux from "../../assets/ux.avif";
import web_design from "../../assets/web.jpg";
import work2 from "../../assets/work2.png";
import graphics from "../../assets/graphic.avif";

const works = [
  { id: 1, image: work1, alt: "Project 1" },
  { id: 2, image: ux, alt: "UX Design" },
  { id: 3, image: web_design, alt: "Web Design" },
  { id: 4, image: work2, alt: "Project 2" },
  { id: 5, image: graphics, alt: "Graphic Design" },
];

const Services = React.memo(() => {
  return (
    <div className="project h-full py-4 flex flex-col items-center justify-center gap-8">
      <p className="text-stone-600">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
        {works.map((work) => (
          <div key={work.id} data-aos="zoom-in">
            <img
              className="h-full rounded-md hover:cursor-pointer hover:shadow-md hover:scale-105 duration-500"
              src={work.image}
              alt={work.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default Services;
