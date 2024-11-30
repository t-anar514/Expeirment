"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Wecodly",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/DetailPage",
  },  
  {
    id: 2,
    title: "Geru",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/DetailProject",
  },
  {
    id: 3,
    title: "SIP",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/DetailProject",
  },
  {
    id: 4,
    title: "Echina",
    description: "Flight Ordering Application",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/DetailProject",
  },
  {
    id: 5,
    title: "CISV",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/DetailProject",
  },
  {
    id: 6,
    title: "Bookid",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/DetailProject",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white dark:text-black mt-4 mb-8 md:mb-12">
      What am I doing outside of class?
      </h2>
      <div className="text-white dark:text-black flex flex-row justify-center   items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

//https://www.figma.com/proto/ZwrxeBHB1EYhBFtUUc1tvV/Bookid?node-id=1-321&node-type=frame&t=riyDnprOlWfCoxlm-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A248&starting-point-node-id=1159%3A134