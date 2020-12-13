
import React from 'react';
function Projects() {
  return (
    <div>
     <h1 className='header'>Projects</h1>
     <div className='container-project'>
          <div className='project-data'>
                <div className='project-data-header'>
                    <h1>Home Exchange Manager</h1>
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
                    <h1>Employee Management System</h1>
                </div>
                <div className='project-data-desc'>
                      <ul>
                        <li>Web app for a home automation system that controls light, temperature and more. It typically connects controlled devices to
a central hub or "gateway". As a web developer. </li>
                        <li>my roles were as follows:</li>
                        <li>Created majority of the web pages(login, Registration, Home, Sensor, Apartment, a Dashboard for Admin, Admin, Contact Us, About, FAQ, Footer and Drop-down menu) for the website using
JAVA and MYSQL(backend), HTML and CSS, JavaScript and NodeJS.</li>
                        <li>Defined project scope and drafted the project document.</li>
                      </ul>
                      <a href='https://github.com/anveshdamulur/EmployeeManagement'>Git Link</a>
                </div>
            </div>
          
          <div className='project-data'>
                <div className='project-data-header'>
                    <h1>Campgrounds</h1>
                </div>
                <div className='project-data-desc'>
                      <ul>
                        <li>Created a web site with login and registration pages validations.</li>
                        <li>Created one REST Full api using NodeJS and mongoDB.</li>
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