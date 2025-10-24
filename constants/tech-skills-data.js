import { Icon } from '@chakra-ui/react'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


const LogoIcon = ({ icon }) => {
    return <Icon color={'blue.200'} boxSize={'3rem'} as={icon} />
}

const getLogoJavaScript = () => <LogoIcon icon={IoLogoJavascript} />
const getLogoTypeScript = () => <LogoIcon icon={SiTypescript} />
const getLogoReact = () => <LogoIcon icon={FaReact} />
const getLogoNext = () => <LogoIcon icon={TbBrandNextjs} />
const getLogoGit = () => <LogoIcon icon={FaGitAlt} />
const getLogoHtml = () => <LogoIcon icon={FaHtml5} />
const getLogoCss = () => <LogoIcon icon={FaCss3Alt} />
const getLogoNode = () => <LogoIcon icon={FaNodeJs} />
const getLogoGithub = () => <LogoIcon icon={FaGithub} />
const getLogoGitlab = () => <LogoIcon icon={FaGitlab} />
const getLogoPostgres = () => <LogoIcon icon={BiLogoPostgresql} />
const getLogoPostman = () => <LogoIcon icon={SiPostman} />
const getLogoExpress = () => <LogoIcon icon={SiExpress} />
const getLogoPython = () => <LogoIcon icon={FaPython} />
const getLogoMongo = () => <LogoIcon icon={SiMongodb} />

const TECH_SKILLS_DATA = [
    {
        name: 'JavaScript',
        icon: getLogoJavaScript()
    },
    {
        name: 'TypeScript',
        icon: getLogoTypeScript()
    },
    {
        name: 'ReactJS',
        icon: getLogoReact()
    },
    {
        name: 'Next.js',
        icon: getLogoNext()
    },
    {
        name: 'Git',
        icon: getLogoGit()
    },
    {
        name: 'HTML5',
        icon: getLogoHtml()
    },
    {
        name: 'CSS',
        icon: getLogoCss()
    },
    {
        name: 'Node.js',
        icon: getLogoNode()
    },
    {
        name: 'GitHub',
        icon: getLogoGithub()
    },
    {
        name: 'GitLab',
        icon: getLogoGitlab()
    },
    {
        name: 'PostgreSQL',
        icon: getLogoPostgres()
    },
    {
        name: 'Postman',
        icon: getLogoPostman()
    },
    {
        name: 'Express.js',
        icon: getLogoExpress()
    },
    {
        name: 'Python',
        icon: getLogoPython()
    },
    {
        name: 'MongoDB',
        icon: getLogoMongo()
    },
]

export default TECH_SKILLS_DATA