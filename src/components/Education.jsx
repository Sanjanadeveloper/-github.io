import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/education.css';
import { MdCastForEducation } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

export const Education = () => {
    const { light } = useContext(ThemeContext);

    return (
        <div id='education' style={{ '--bglighted': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Educ<span>a</span>ti<span>o</span>n Details</p>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd1'>
                    <p>Full Stack Web Development</p>
                    <p>Masai School, Remote</p>
                    <p>Focused on MERN Stack, DSA, and real-world projects</p>
                    <p>August 2024 – May 2025 (Ongoing)</p>
                </div>
                <div className='date d1'></div>
            </div>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd2'>
                    <p>Bachelor of Computer Applications (B.C.A)</p>
                    <p>Radha Govind University,Lalki Ghati, Ramgarh, Jharkhand</p>
                    <p>2025 – 2028 | Pursuing (1st Year)</p>
                </div>
                <div className='date d2'></div>
            </div>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd1'>
                    <p>Diploma in Computer Applications (D.C.A)</p>
                    <p>Part-Time Certification</p>
                    <p>Completed along with intermediate studies</p>
                    <p>2023</p>
                </div>
                <div className='date d1'></div>
            </div>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd2'>
                    <p>Class 12 (Intermediate)</p>
                    <p>C.P. Chaudhary Inter College, Jharkhand</p>
                    <p>Science Stream</p>
                    <p>2024 | Scored 81%</p>
                </div>
                <div className='date d2'></div>
            </div>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd1'>
                    <p>Class 10 (High School)</p>
                    <p>Gyan Mandir, Ramgarh, Jharkhand</p>
                    <p>General Subjects</p>
                    <p>2022 | Scored 95%</p>
                </div>
                <div className='date d1'></div>
            </div>
        </div>
    );
};
