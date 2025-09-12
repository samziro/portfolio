import work1 from '../../assets/work1.png'
import ux from "../../assets/ux.avif";
import web_design from "../../assets/web.png";
import work2 from "../../assets/work2.png";
import work1 from "../../assets/work1.png";
import work1 from "../../assets/work1.png";

const Services = () => {
  return (
    <div>
      <p>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div>
        <img src={work1} alt="" />
        <img src={web_design} alt="" />
        <img src={ux} alt="" />
        <img src={graphics} alt="" />
        <img src={work2} alt="" />
      </div>
    </div>
  );
}

export default Services
