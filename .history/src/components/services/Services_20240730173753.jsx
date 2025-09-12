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
    <div>
      <p>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-5 gap-4 h-full">
        {works.map((work) => (
          <div key={work}>
            <img cl src={work.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services
