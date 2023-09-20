import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

import nodeImg from '../assets/img/skills/node.png'
import reactImg from '../assets/img/skills/react.png'
import jsImg from '../assets/img/skills/javascript.png'
import apiImg from '../assets/img/skills/api.png'
import gitImg from '../assets/img/skills/git.png'
import reduxImg from '../assets/img/skills/redux.png'
import htmlImg from '../assets/img/skills/html.png'
import cssImg from '../assets/img/skills/css.png'
import sassImg from '../assets/img/skills/sass.png'
import phpImg from '../assets/img/skills/php.png'
import dockerImg from '../assets/img/skills/docker.png'
import mysqlImg from '../assets/img/skills/mysql.png'
import mssqlImg from '../assets/img/skills/mssql.png'
import mongoImg from '../assets/img/skills/mongo.png'



export const skills = [
    {
        title: 'HTML',
        icon: htmlImg
    },
    {
        title: 'CSS',
        icon: cssImg
    },
    {
        title: 'Java Script',
        icon: jsImg
    },
    {
        title: 'Sass',
        icon: sassImg
    },
    {
        title: 'React JS',
        icon: reactImg
    },
    {
        title: 'Redux',
        icon: reduxImg
    },
    {
        title: 'NodeJS',
        icon: nodeImg
    },
    {
        title: 'API',
        icon: apiImg
    },
    {
        title: 'PHP Laravel',
        icon: phpImg
    },
    {
        title: 'MySQL',
        icon: mysqlImg
    },
    {
        title: 'MSSQL',
        icon: mssqlImg
    },
    {
        title: 'Mongo',
        icon: mongoImg
    },
    {
        title: 'Git',
        icon: gitImg
    },
    {
        title: 'Docker',
        icon: dockerImg
    },
]

export const experiences = [
    {
        year: "2012-2016",
        company: "Kovel Industrial and Economic College",
        title: "Computer Science - Professional Junior Bachelor",
        type: 'education',
        icon: <FaGraduationCap/>
    },
    {
        year: "2016-2018",
        company: "West Ukranian National University",
        title: "Computer Science - Bachelor's degree",
        type: 'education',
        icon: <FaGraduationCap/>
    },
    {
        year: "2018-2019",
        company: "West Ukranian National University",
        title: "Project Management - Master's degree ",
        type: 'education',
        icon: <FaGraduationCap/>
    },
    {
        year: "2017 - 2018",
        company: "",
        title: "Freelancer",
        type: 'work',
        icon: <FaBriefcase/>
    },
    {
        year: "2018 - Present",
        company: "TruJay",
        title: "Technical Engineer",
        type: 'work',
        icon: <FaBriefcase/>
    }
]