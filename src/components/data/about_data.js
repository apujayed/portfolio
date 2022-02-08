import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "Built complex frontend apps using React, Nextjs, Redux library."
    },
    {
        icon: repair,
        title: "Backend  Developer",
        about: "Managing backend, database, APIs using ExpressJS and MYSQL",
    },
    {
        icon: api,
        title: "API Integration",
        about: "Integrating third party api into the server by Scarping API, reading docs."
    },
    {
        icon: algo,
        title: "Server Deployment",
        about: "Automate CI/CD pipeline using containerized environment by CI workflows."
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
        about: "minimalistic user interface designer using figma and  framer"
    },
    {
        icon: computer,
        title: "Whatever",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]

export default skills;