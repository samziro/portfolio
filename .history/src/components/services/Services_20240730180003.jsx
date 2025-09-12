import work1 from '../../assets/work1.png'
import ux from "../../assets/ux.avif";
import web_design from "../../assets/web.jpg";
import work2 from "../../assets/work2.png";
import graphics from "../../assets/graphic.avif";


const Services = () => {

  const works = [
    {
      image: work1
    },
    {
      image: ux
    },
    {
      image: web_design
    },
    {
      image: work2
    },
    {
      image: graphics,
    }  
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="text-stone-600">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid md:grid-cols-5 gap-4 h-full">
        {works.map((work) => (
          <div key={work}>
            <img
              className="h-full rounded-md hover:cursor-pointer hover:shadow-md hover:scale-105 duration-500"
              src={work.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
