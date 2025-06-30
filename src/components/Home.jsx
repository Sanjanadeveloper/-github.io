import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from "react-icons/bi";
import "../styles/home.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import TagCloud from "TagCloud";

const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Redux",
  "React Router",
  "React",
  "TypeScript",
  "GIT",
  "MongoDB",
  "Express",
  "NodeJs",
  "Mongoose",
  "ChakraUI",
  "Tailwind",
  "Babel",
];

export const Home = () => {
  const { light } = useContext(ThemeContext);

  useEffect(() => {
    TagCloud(".content", myTags, {
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });
  }, []);

  return (
    <div id="home" style={{ "--bglight": light ? "#edf2f8" : "#0a192f" }}>
      <div
        id="homecontent"
        style={{
          "--plight": light ? "black" : "white",
          "--namelight": light ? "#dc143c" : "#64ffda",
          "--rolelight": light ? "" : "#dc143c",
        }}
      >
        <p>Hi, I am</p>
        <p>Sanjana kumari.</p>
        <p>
          I'm a <span>&nbsp;Software Developer.</span>
        </p>
        {/* <p>
          First-year BCA student and passionate Full Stack Developer skilled in
          JavaScript, React.js, and backend integration. I build responsive,
          scalable web apps with clean code and strong problem-solving skills.
          Enthusiastic about DSA and eager to contribute to impactful,
          team-driven projects.
        </p> */}
        <p>
          I have a specialization in MERN stack web development. Self-motivated
          and curious to learn new things. lets build something new.
        </p>

        <div className="homeCont">
          <a
            href="/resume/Sanjana_kumari_Resume.pdf"
            style={{ textDecoration: "none" }}
            download="Sanjana_Kumari_Resume.pdf"
          >
            <button>
              Resume{" "}
              <i>
                <BiDownload />
              </i>
            </button>
          </a>
          <div
            className="homeIcCont"
            style={{ "--icColor": light ? "#0a192f" : "#edf2f8" }}
          >
            <div>
              <a
                href="https://www.linkedin.com/in/sanjana-kumari-050aa6314/"
                target="_blank"
              >
                <BsLinkedin className="homeIc" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Sanjanadeveloper/Sanjana-kumari"
                target="_blank"
              >
                <BsGithub className="homeIc" />
              </a>
            </div>
            <div>
              <a href="mailto:sanjanaagnihotrii@gmail.com">
                <SiGmail className="homeIc" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="content"
          style={{ order: 1, "--color": light ? "#dc143c" : "#64ffda" }}
        ></div>
      </div>
    </div>
  );
};
