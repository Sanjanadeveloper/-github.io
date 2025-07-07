import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { FaSun, FaMoon } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import '../styles/navbar.css';

export const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const { light, setLight } = useContext(ThemeContext);

  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setTimeout(() => {
      setDrawer(false);
    }, 800);
    if (drawer) {
      let drawerCont = document.getElementsByClassName('drawerCont')[0];
      drawerCont.style.transition = '1s linear';
      drawerCont.style.transform = 'translateX(50vw)';
    }
  };

  const goToSection = (e) => {
    const id = e.target.getAttribute('data-goto');
    const element = document.getElementById(id);

    if (drawer) {
      closeDrawer();
      setTimeout(() => {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: 'smooth',
        });
      }, 1000);
    } else {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (drawer) {
      const drawerEl = document.getElementsByClassName('drawerCont')[0];
      drawerEl.style.transition = '1s linear';
      drawerEl.style.transform = 'translateX(-50vw)';
    }
  }, [drawer]);

  const handleResume = () => {
    const resumePath = '/resume/Sanjana_kumari_Resume.pdf'; // ✅ updated

    window.open(resumePath, '_blank');
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resumePath;
      link.setAttribute('download', 'Sanjana_kumari_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  return (
    <div className='nav' style={{ '--backgroundnav': light ? '#edf2f8' : '#0a192f', '--navTextHover': light ? "#dc143c" : "#64ffda" }}>
      <div>
        <svg viewBox="0 0 100 120" style={{ height: "55px", width: "62px" }} >
          <polygon fill={light ? "#edf2f8" : '#0a192f'} className="Shape" stroke={light ? "#dc143c" : "#64ffda"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 2 0 22 0 67 39 90 78 68 78 23"></polygon>
          <text x='40' y='60' textAnchor="middle" fill={light ? "#dc143c" : "#64ffda"} fontSize="50px" fontWeight="640" >S</text>
        </svg>
      </div>

      <div className='navButtons' style={light ? { '--navText': "black", '--navTextHover': "#edf2f8", '--hover': "#dc143c" } : { '--navText': "rgba(255,255,255,0.9)", '--navTextHover': "#4a5d80dd", '--hover': "#64ffda" }}>
        <p><a data-goto='home' onClick={goToSection}>HOME</a></p>
        <p><a data-goto='about' onClick={goToSection}>ABOUT</a></p>
        <p><a data-goto='skill' onClick={goToSection}>SKILLS</a></p>
        <p><a data-goto='projects' onClick={goToSection}>PROJECTS</a></p>
        <p><a data-goto='contact' onClick={goToSection}>CONTACT</a></p>
        <p><a onClick={handleResume} style={{ cursor: "pointer" }}>RESUME <MdOpenInNew fontSize={17} /></a></p>
        {
          light
            ? <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "#0a192f" }} onClick={() => setLight(false)}><FaMoon /></i>
            : <i className='fas' style={{ cursor: "pointer", fontSize: "20px", color: "yellow" }} onClick={() => setLight(true)}><FaSun /></i>
        }
      </div>

      {/* Drawer and icons (unchanged) */}
    </div>
  );
};
