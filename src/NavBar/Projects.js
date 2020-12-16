
import React from 'react';
function Projects() {
  return (
    <div>
     <h1 className='header'>Projects</h1>
     <div className='container-project'>
          <div className='project-data'>
                <div className='project-data-header'>
                    <h1>HOME EXCHANGE MANAGER (03/2019 - 06/2019)
                        </h1>
                </div>
                <div className='project-data-desc'>
                      <ul>
                        <li>
                              A web application that follows individuals to exchange their home
                              for a short period of time. It was developed by using JavaEE
                              Technologies (servelet, JSP, JSTL, EL, etc) will have to be
                              connected to the database on the Clint side using standard
                              technologies(HTML, CSS, JS and REACT).
                        </li>
                        <li> Coded 90% of client-side pages using standered technologies
                              (HTML, CSS, REACT, JS and BootStrap). 
                        </li>
                        <li>led the team of 5 members.</li>
                        <li>Drafted the project document.</li>
                      </ul>
                      <a></a>
                </div>
            </div>
         
          <div className='project-data'>
                <div className='project-data-header'>
                    <h1>Employee Management System (07/2020 - 09/2020)</h1>
                </div>
                <div className='project-data-desc'>
                      <ul>
                        <li>Created a web site to perform CRUD operations.</li>
                        <li> This is a project majourly working on REST full routings.</li>
                        <li> Which is my personal project based on technologies I have learnt recently</li>
                        <li>This project is completely developed by using HTML, CSS, JavaScript, NodeJs, Express EJS and MongoDb Atlas.</li>
                        <li>Tools I have used for this project are visual studio, postman, github.</li>
                      </ul>
                </div>
            </div>
          
          <div className='project-data'>
                <div className='project-data-header'>
                    <h1>HOME AUTOMATION NETWORK (10/2018 - 01/2019)</h1>
                </div>
                <div className='project-data-desc'>
                      <ul>
                        <li>Web app for a home automation system that controls light, temperature and more. It typically connects controlled devices to
                        a central hub or gateway. As a web developer. </li>
                        <li>my roles were as follows:</li>
                        <li>The main objective of this project is to create a website and add
                            different items to that website by using CRUD operations.</li>
                        <li>Technologies used : Html, CSS, Bootstrap, JavaScript, NodeJS, Express and MongoDB.</li>
                      </ul>
                </div>
            </div>
     </div>
    </div>
  );
}

export default Projects;