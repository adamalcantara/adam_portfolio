import React from 'react'

// import icons
import { FaHtml5, FaCss3, FaReact, FaPython, FaWordpress, FaNode, FaFigma } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiAdobe, SiFlutter, SiDart } from "react-icons/si";
import { DiMongodb, DiResponsive } from "react-icons/di";

const Skills = () => {
    const skillsInfo = [
        {
            skillIcon: <FaHtml5 />,
            skillName: "HTML"
        },
        {
            skillIcon: <FaCss3 />,
            skillName: "CSS"
        },
        {
            skillIcon: <IoLogoJavascript />,
            skillName: "JavaScript"
        },
        {
            skillIcon: <FaReact />,
            skillName: "React"
        },
        {
            skillIcon: <DiMongodb />,
            skillName: "MongoDB"
        },
        {
            skillIcon: <SiExpress />,
            skillName: "Express.js"
        },
        {
            skillIcon: <FaNode />,
            skillName: "Node.js"
        },
        {
            skillIcon: <RiNextjsFill />,
            skillName: "Next.js"
        },
        {
            skillIcon: <RiTailwindCssFill />,
            skillName: "Tailwind CSS"
        },
        {
            skillIcon: <FaWordpress />,
            skillName: "WordPress"
        },
        {
            skillIcon: <DiResponsive />,
            skillName: "Responsive Design"
        },
        {
            skillIcon: <SiAdobe />,
            skillName: "Adobe Creative Suite"
        },
        {
            skillIcon: <FaFigma />,
            skillName: "Figma"
        },
        {
            skillIcon: <SiFlutter />,
            skillName: "Flutter"
        },
        {
            skillIcon: <SiDart />,
            skillName: "Dart"
        }
    ]

    const renderSkill = (skill, index) => {

        return (
            <div className='flex flex-col items-center'>
                <p className='text-6xl'>{skill.skillIcon}</p>
                <p className='text-2xl text-center'>{skill.skillName}</p>
            </div>
        )
    };

    return <div className='mt-10 text-black dark:text-white w-full 2xl:w-4/5 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8'>
            {skillsInfo.map(renderSkill)}
        </div>
    </div>;
}

export default Skills