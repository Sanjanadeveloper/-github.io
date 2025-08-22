import { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../context/ThemeContext";
import { GoProject } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import {
  SiChakraui,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiHeroku,
  SiRedux,
  SiVercel,
  SiExpress,
  SiMongodb,
  SiGit,
  SiNetlify,
  SiTailwindcss,
} from "react-icons/si";
import blueMercury from "../assets/Screenshot (667).png";
import edusityImg from "../assets/Screenshot (702).png";
import quickBlogsImg from "../assets/Screenshot (102).png";


export const Projects = () => {
  const { light } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      style={{
        "--bglightproject": light ? "#edf2f8" : "#0a192f",
        "--plight": light ? "black" : "white",
        "--namelight": light ? "#dc143c" : "#64ffda",
        "--rolelight": light ? "white" : "#152235",
      }}
    >
      <p>
        Featured <span>Projects </span>{" "}
        <span>
          <GoProject />
        </span>
      </p>
      
      {/* Quick Blogs */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src={quickBlogsImg} alt="Quick Blogs Project Screenshot" />
        </div>
        <div className="prCardContent">
          <p>Quick Blogs - AI-Powered Blogging Platform</p>
          <p>
            A modern, full-stack blogging platform built with React, Node.js, and MongoDB, 
            featuring AI-powered content generation using Google Gemini AI. The platform 
            offers a clean, responsive design with rich content display, interactive 
            commenting system, and category filtering. For administrators, it provides 
            AI-powered content generation, rich text editor, image management with ImageKit, 
            and comprehensive blog management features including draft system and analytics.
          </p>
          <p>
            <span>Tech Stack: </span>React.js, Node.js, MongoDB, Express.js, Tailwind CSS, 
            Google Gemini AI, ImageKit, JWT, Quill.js
          </p>

          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiTailwindcss style={{ color: "#38bdf8" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://quick-blog-frontend-ten.vercel.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Sanjanadeveloper/Quick-Blog"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Blue Mercury */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src={blueMercury} />
        </div>
        <div className="prCardContent">
          <p>SocialSync - Social Media Dashboard</p>
          <p>
            SocialSync is a solo project focused on building a full-stack social
            media dashboard. Users can sign up, log in using secure JWT-based
            authentication, create and delete posts, like/unlike posts, and
            browse all user-generated content. The app features real-time
            updates, search and sort functionality for posts, and a clean,
            responsive UI for seamless usage across devices. The backend is
            built using Node.js, Express.js, and MongoDB to handle data and user
            management securely and efficiently.
          </p>
          <p>
            <span>Tech Stack: </span>React.js, Tailwind CSS, Node.js,
            Express.js, MongoDB, JWT
          </p>

          <div className="prCardTs">
            <SiReact style={{ color: "#53c1de" }} className="tsIc" />
            <SiChakraui
              style={{
                color: "#60c9ca",
                background: "white",
                borderRadius: "50%",
              }}
              className="tsIc"
            />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiReactrouter style={{ color: "tomato" }} className="tsIc" />
            <SiRedux style={{ color: "purple" }} className="tsIc" />
            <SiNodedotjs style={{ color: "green" }} className="tsIc" />
            <SiExpress style={{ color: "black" }} className="tsIc" />
            <SiMongodb style={{ color: "green" }} className="tsIc" />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://socialsync-app.netlify.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Sanjanadeveloper/SyncProject"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Edusity */}
      <div className="projectCard">
        <div className="prCardImg">
          <img src={edusityImg} alt="Edusity Project Screenshot" />
        </div>
        <div className="prCardContent">
          <p>Edusity University - Single Page UI Website</p>
          <p>
            Edusity is a frontend project built to demonstrate a responsive and
            modern single-page university website. The site includes sections
            like About Us, Programs, and Contact, and supports smooth
            client-side routing. It is focused purely on UI design and
            navigation without any backend functionality.
          </p>
          <p>
            <span>Tech Stack: </span>React.js, Tailwind CSS, React Router
          </p>

          <div className="prCardTs">
            <SiHtml5 style={{ color: "#ef662a" }} className="tsIc" />
            <SiCss3 style={{ color: "#1c88c7" }} className="tsIc" />
            <SiJavascript
              style={{ color: "#f7df1e", background: "black" }}
              className="tsIc"
            />
          </div>
          <div style={{ "--icBg": light ? "transparent" : "#0a192f" }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://edusity-2zcm.vercel.app/"
              target="_blank"
            >
              <button>
                <FaEye className="tsBIc" /> Go live
              </button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Sanjanadeveloper/Edusity"
              target="_blank"
            >
              <button>
                {" "}
                <SiGithub className="tsBIc" /> View code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
