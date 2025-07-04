import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GoTriangleRight } from "react-icons/go";
import myImg from "../assets/myImg.png";
import "../styles/about.css";

export const About = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="about"
      style={{
        "--bglightabout": light ? "white" : "#152235",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "" : "#dc143c",
      }}
    >
      <p>About </p>
      <div id="aboutcontent">
        <div id="myselfdesc" data-aos="zoom-in">
          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Hi, I'm <span>Sanjana Kumari</span> from{" "}
              <span>Jharkhand, India</span> — a dedicated Full Stack Developer
              and BCA student building efficient, scalable web apps.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Skilled in <span>MERN stack (MongoDB, Express, React, Node)</span>{" "}
              with strong command of REST APIs, clean code architecture, and
              responsive UI design.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              Passionate about <span>Data Structures & Algorithms</span> and
              constantly improving problem-solving and coding skills through
              practice.
            </p>
          </div>

          <div id="mysitem">
            <div>
              <GoTriangleRight
                style={{
                  color: light ? "#dc143c" : "#64ffda",
                  fontSize: "20px",
                }}
              />
            </div>
            <p>
              A quick learner, strong team player, and effective communicator —
              ready to contribute to collaborative, innovative projects.
            </p>
          </div>
        </div>
        <div id="myimg">
          <img src={myImg} alt="Myself" />
        </div>
      </div>
    </div>
  );
};
