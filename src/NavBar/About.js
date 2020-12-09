
import React from 'react';
import profile from '../Public/Images/profile.jpg'
import Resume from '../Public/Resume/Resume.pdf'
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
            <p> I am Anvesh Damuluri. I have completed my masters in software engineering at ISEP. I worked as an intern at Beyond. My role is Fullstack developer. Today clear in my mind to learn technical knowledge to compete in this world as well as learn interpersonal skills to develop my career in a professional path.  </p>
          </div>
          <div className='footer-text'>
            <p> I am coachable , truly hungry to learn, I am passionate to work,  I have that passion to learn, I can grasp technologies quickly,  and. If you give an opportunity to prove I have that hunger and I have that zeal in me. </p>
          </div>
          <div>
              <a href={Resume} download>
                  <button value='Download'>Download Resume</button>
              </a>
          </div>
      </div>
     
     </div>
  );
}

export default About;