import { useState } from "react";
import { projects } from "../../assets/projects";
import { motion } from "framer-motion";

const categories = ["All", "Design", "Development", "Social Media Manager", "Certificates"];

const MyWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="services" className="pb-12 px-4 text-stone-700">
      

      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-1 border rounded-full transition-all ${
              selectedCategory === category
                ? "bg-stone-700 text-white"
                : "bg-white hover:bg-stone-100"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group border rounded-md overflow-hidden shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-center items-center text-white p-4 text-center">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm my-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-white text-stone-700 px-3 py-1 rounded-full text-sm hover:bg-stone-200 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyWorks;
