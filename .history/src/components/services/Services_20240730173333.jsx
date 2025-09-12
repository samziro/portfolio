import work1 from '../../assets/work1.png'
import ux from "../../assets/ux.avif";
import web_design from "../../assets/web.jpg";
import work2 from "../../assets/work2.png";
import graphics from "../../assets/graphic.avif";


const Services = () => {

  const works = [
    {
      image: work1,
      image: work1,
    },
  ];
  return (
    <div>
      <p>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-5 gap-4 h-full">
        <img className="h-full" src={work1} alt="" />
        <img className="h-full" src={web_design} alt="" />
        <img className="h-full" src={ux} alt="" />
        <img className="h-full" src={graphics} alt="" />
        <img className="h-full" src={work2} alt="" />
      </div>
    </div>
  );
}

export default Services
