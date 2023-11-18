import React from "react";
import { useState, useEffect, useRef } from "react";
import DropdownFilter from "../components/DropdownFilter";
import CardProject from "../components/CardProject";

const Projects = ({
  setSharedElement,
  setLeftSideElement,
  setRigthSideElement,
}) => {
  const backgroundCenter = useRef();
  const leftSide = useRef();
  const rigthSide = useRef();
  setSharedElement(backgroundCenter.current);
  setLeftSideElement(leftSide.current);
  setRigthSideElement(rigthSide.current);

  const categories = ["BPMS", "Restaurant", "OnlineShop"];
  const technologies = ["Nodejs", "Laravel", "Frontend"];

  const projectsDB = [
    {
      name: "MP-Solution BPMS",
      category: "BPMS",
      technology: "Laravel",
      main_Image: "Project-BPMS.svg",
      image_1: "ImageProject_1.svg",
      image_2: "ImageProject_2.svg",
      image_3: "ImageProject_3.svg",
      github: "https://github.com/MayckellP/bpms_demo",
      demo: "https://www.mpsolutions-bpms.es/login",
      description:
        "Texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber.",
      skills: [
        "html",
        "css",
        "bootstrap",
        "js",
        "react",
        "laravel",
        "php",
        "mysql",
      ],
    },
    {
      name: "Restaurante",
      category: "Restaurant",
      technology: "Laravel",
      main_Image: "Project-BPMS.svg",
      image_1: "ImageProject_1.svg",
      image_2: "ImageProject_2.svg",
      image_3: "ImageProject_3.svg",
      github: "https://github.com/MayckellP/bpms_demo",
      demo: "https://www.mpsolutions-bpms.es/login",
      description:
        "Texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber.",
      skills: [
        "html",
        "css",
        "bootstrap",
        "js",
        "react",
        "laravel",
        "php",
        "mysql",
      ],
    },
    {
      name: "Node",
      category: "Restaurant",
      technology: "Nodejs",
      main_Image: "Project-BPMS.svg",
      image_1: "ImageProject_1.svg",
      image_2: "ImageProject_2.svg",
      image_3: "ImageProject_3.svg",
      github: "https://github.com/MayckellP/bpms_demo",
      demo: "https://www.mpsolutions-bpms.es/login",
      description:
        "Texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber especificaciones y funcionalidades de la Web-App texto de prueba para saber.",
      skills: [
        "html",
        "css",
        "bootstrap",
        "js",
        "react",
        "laravel",
        "php",
        "mysql",
      ],
    },
  ];

  const [filteredShowMyProjects, setFilteredShowMyProjects] = useState([]);
  const [valueCategory, setValueCategory] = useState("");
  const [valueTechnology, setValueTechnology] = useState("");
  const [filteredMyProjects, setFilteredMyProjects] = useState(projectsDB);

  const categoryCaptured = (e) => {
    const myValue = e.target.value;
    setValueCategory(myValue);

    var finalRegister;

    if (myValue && valueTechnology) {
      finalRegister = projectsDB.filter(
        (itemRegister) =>
          itemRegister.category === myValue &&
          itemRegister.technology === valueTechnology
      );
    } else if (myValue) {
      finalRegister = projectsDB.filter(
        (itemRegister) => itemRegister.category === myValue
      );
    } else if (valueTechnology) {
      finalRegister = projectsDB.filter(
        (itemRegister) => itemRegister.technology === valueTechnology
      );
    } else {
      finalRegister = projectsDB;
    }

    setFilteredMyProjects(finalRegister);
  };

  const technologyCaptured = (e) => {
    const myValue = e.target.value;
    setValueTechnology(myValue);

    var finalRegister;

    if (myValue && valueCategory) {
      finalRegister = projectsDB.filter(
        (itemRegister) =>
          itemRegister.category === valueCategory &&
          itemRegister.technology === myValue
      );
    } else if (myValue) {
      finalRegister = projectsDB.filter(
        (itemRegister) => itemRegister.technology === myValue
      );
    } else if (valueCategory) {
      finalRegister = projectsDB.filter(
        (itemRegister) => itemRegister.category === valueCategory
      );
    } else {
      finalRegister = projectsDB;
    }

    setFilteredMyProjects(finalRegister);
  };

  useEffect(() => {
    const showMyProjects = filteredMyProjects.map((project, index) => (
      <CardProject key={index} global={project} />
    ));
    setFilteredShowMyProjects(showMyProjects);
  }, [filteredMyProjects]);

  return (
    <div className="cont-projects">
      <div className="dark-ball-projects-done" ref={backgroundCenter}></div>
      <div
        className="leftSide-projects row row-cols-1 row-cols-md-2 g-4"
        ref={leftSide}
      >
        {filteredShowMyProjects}
      </div>
      <div className="rigthSide-projects" ref={rigthSide}>
        <h2 className="title-projects">Projects</h2>
        <div className="filter-projects">
          <h4 className="title-filter">Category</h4>
          <DropdownFilter
            data={categories}
            capturedFuction={categoryCaptured}
          />
          <h4 className="title-filter">Technology</h4>
          <DropdownFilter
            data={technologies}
            capturedFuction={technologyCaptured}
          />

          <img
            className="Robit-projects"
            src="../image/Robit_Projects.svg"
            alt="Robit"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
