import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'

import { images } from "./images";

export const skills = [
    {
        title: 'HTML',
        icon: images.htmlImg
    },
    {
        title: 'CSS',
        icon: images.cssImg
    },
    {
        title: 'Java Script',
        icon: images.jsImg
    },
    {
        title: 'Sass',
        icon: images.sassImg
    },
    {
        title: 'React JS',
        icon: images.reactImg
    },
    {
        title: 'Redux',
        icon: images.reduxImg
    },
    {
        title: 'NodeJS',
        icon: images.nodeImg
    },
    {
        title: 'API',
        icon: images.apiImg
    },
    {
        title: 'PHP Laravel',
        icon: images.phpImg
    },
    {
        title: 'MySQL',
        icon: images.mysqlImg
    },
    {
        title: 'MSSQL',
        icon: images.mssqlImg
    },
    {
        title: 'Mongo',
        icon: images.mongoImg
    },
    {
        title: 'Git',
        icon: images.gitImg
    },
    {
        title: 'Docker',
        icon: images.dockerImg
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