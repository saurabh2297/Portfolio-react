import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'



const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using ", <strong key={1}>HTML, CSS, Bootsrap and React.js </strong>]
    },
    {
        icon: backend,
        title: "Backend  Development",
        about: ["handle database, server, api using ", <strong key={1}>  Node.js and MongoDB</strong> ],
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop REST API using", <strong key={1}> Node.js </strong>]
    },
    {
        icon: algo,
        title: "Coder",
        about: ["Problem solver in",<strong key={1}> HackerRank and guvi.in </strong>]
    },
]

export default skills;