import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaCode, FaBriefcase } from "react-icons/fa";

const AboutTimeline = () => {
  return (
    <VerticalTimeline lineColor="#4B5563">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#F8FAFC", color: "#1F2937" }}
        iconStyle={{ background: "#4B5563", color: "#fff" }}
        icon={<FaGraduationCap />}
        date="2019 - 2022"
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor’s in Computer Science
        </h3>
        <h4 className="vertical-timeline-element-subtitle">XYZ University</h4>
        <p>Specialized in Software Development & DevOps tools</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F8FAFC", color: "#1F2937" }}
        iconStyle={{ background: "#4B5563", color: "#fff" }}
        icon={<FaBriefcase />}
        date="2022 - Present"
      >
        <h3 className="vertical-timeline-element-title">
          Freelance Full-Stack Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Remote / Contract
        </h4>
        <p>
          Built and deployed scalable MERN apps, set up GitLab CI/CD pipelines,
          Dockerized deployments on Contabo and Kubernetes.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "#4B5563", color: "#fff" }}
        icon={<FaCode />}
        date="2024"
      >
        <h3 className="vertical-timeline-element-title">
          DevOps Bootcamp Graduate
        </h3>
        <p>Completed an advanced 12-week hands-on internship covering containerization, cloud deployments, and monitoring stacks.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default AboutTimeline;
