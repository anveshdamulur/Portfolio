
import React from 'react';
import profile from '../Public/Images/profile.jpg';
import CoverLetter from '../Public/CoverLetter/CoverLetterAnvesh.pdf'
import Resume from '../Public/Resume/Resume.pdf';
function About() {
  return (
    <div className="container-about">
      <div className='container-about-avathar'>
        <img src={profile} alt='profile'></img>
      </div>
      <div className='container-about-info'>
          <div id='header'> 
            <h1>About me</h1>
          </div>
          <div id='para'> 
            <p> I am Anvesh Damuluri. I have completed my masters in software engineering at ISEP. I worked as an intern at Beyond. My role is Fullstack developer. Today clear in my mind to learn technical knowledge to compete in this world as well as learn interpersonal skills to develop my career in a professional path.  </p><br/>
            <p> Tech-savvy professional with strong background in software engineering and superior skills in working
                in both team-based and independent capacities. Skilled at developing, optimizing and reworking
                systems to meet specific customer requirements. Highly proficient in multiple types of programming
                languages. Bringing strong work ethic and excellent organizational skills to any setting.
          </p>
          </div>
          <div className='download'>
            <div>
            <a href={Resume} download>
                  <button value='Download'>Download Resume</button>
              </a>
            </div>
           <div><a href={CoverLetter} download>
                  <button value='Download'>Download Cover Letter</button>
              </a></div>
              
          </div>
          
      </div>
     
     </div>
  );
}

export default About;
