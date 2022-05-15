import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Password Generator",
      description: "A basic password generator built with HTML, CSS, & Javascript",
      link: "https://miinosil.github.io/NGO-UCI-BOOT-WK-THREE-HW-GIT/",
      repo: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-THREE-HW-GIT"
    },
    {
      name: "Code Quiz",
      description: "A basic quiz on coding built with HTML, CSS, & Javascript",
      link: "https://miinosil.github.io/NGO-UCI-BOOT-WK-THREE-HW-GIT/",
      repo: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-4-HW-GIT"
    },
    {
      name: "Ingredient Meal Planner",
      description: "An APP built with HTML, CSS, API, & Javascript",
      link: "https://famesmyname.github.io/Ingredient-to-Meal-Planner/",
      repo: "https://github.com/Famesmyname/Ingredient-to-Meal-Planner"
    },
    {
      name: "Weather Dashboard",
      description: "An APP built with HTML, CSS, API, & Javascript",
      link: "https://miinosil.github.io/NGO-UCI-BOOT-WK-SIX-HW-GIT/",
      repo: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-SIX-HW-GIT"
    },
    {
      name: "Work Day Scheduler",
      description: "An APP built with HTML, CSS, API, & Javascript",
      link: "https://miinosil.github.io/NGO-UCI-BOOT-WK-FIVE-HW-GIT/",
      repo: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-FIVE-HW-GIT"
    },
    {
      name: "Readme Generator",
      description: "An APP built with Node.js",
      link: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-NINE-HW-GIT",
      repo: "https://github.com/MiinoSil/NGO-UCI-BOOT-WK-NINE-HW-GIT"
    },
    {
      name: "Team Profile Generator",
      description: "An APP built with Node.js",
      link: "https://github.com/MiinoSil/10-NGO-TEAM-PROFILE-GENERATOR-HOMEWORK-GIT",
      repo: "https://github.com/MiinoSil/10-NGO-TEAM-PROFILE-GENERATOR-HOMEWORK-GIT"
    },
    {
      name: "SQL Employee Tracker",
      description: "An APP built with MySQL and Node.js",
      link: "https://github.com/MiinoSil/12-SQL-EMPLOYEE-TRKR-HWK-GIT",
      repo: "https://github.com/MiinoSil/12-SQL-EMPLOYEE-TRKR-HWK-GIT"
    },
    {
      name: "ECOMM Backend",
      description: "An APP built with MySQL and Node.js",
      link: "https://github.com/MiinoSil/13-NGO-ORM-ECOM-BAKEND-GIT-HWK",
      repo: "https://github.com/MiinoSil/13-NGO-ORM-ECOM-BAKEND-GIT-HWK"
    },
    {
      name: "Pixel Warrior",
      description: "An APP built with MySQL and Node.js",
      link: "https://pixel-warrior-app-grp-prj-2.herokuapp.com/",
      repo: "https://github.com/aagarc9/Group-Project-2/tree/main"
    },
    {
      name: "Tech Blog",
      description: "An APP built with HTML, Handlebars, Javascript, CSS, MySql",
      link: "https://andrew-mvc-tech-blog.herokuapp.com/",
      repo: "https://github.com/MiinoSil/14-NGO-MVC-TECH-BLOG-GIT-HWK"
    },
    {
      name: "Note Taker",
      description: "An APP built with HTML, Javascript, CSS, Express",
      link: "https://ngo-express-note-taker-app.herokuapp.com/",
      repo: "https://github.com/MiinoSil/11-NGO-EXPR-NOTE-TAKER-HWK-GIT"
    },
    {
      name: "Social Network Backend",
      description: "An APP built with MongoDB and Express.js",
      link: "https://nosql-social-media-backend-api.herokuapp.com/",
      repo: "https://github.com/MiinoSil/18-NoSQL-SOCIAL-NTWK-API-HW-GIT"
    },
    {
      name: "Text Editor",
      description: "An APP built with MongoDB and Express.js",
      link: "https://ngo-jate-web-text-editor-app.herokuapp.com/",
      repo: "https://github.com/MiinoSil/19-PWA-TXT-EDITOR-HW-GIT"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
