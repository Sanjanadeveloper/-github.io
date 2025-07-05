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

  // ✅ Open in new tab + download
  const handleDownloadAndOpen = () => {
    const resumePath = "/resume/Sanjana_Kumari_Resume.pdf";

    // 1. Open in new tab
    window.open(resumePath, "_blank");

    // 2. Trigger download (with slight delay for compatibility)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumePath;
      link.setAttribute("download", "Sanjana_Kumari_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); // 0.5s delay
  };

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
        <p>
          I have a specialization in MERN stack web development. Self-motivated
          and curious to learn new things. Let's build something new.
        </p>

        <div className="homeCont">
          <button onClick={handleDownloadAndOpen}>
            Resume <BiDownload />
          </button>

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
