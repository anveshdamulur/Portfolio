import profile from '../Public/Images/landing_pic.jpeg'
import React from 'react';
function Home() {
  return (

          <div className='banner'>
              <div className='card'>
                  <div className='card-text'>
                      <h3>Hello, I'am</h3><br/>
                      <h1><i>Anvesh Damuluri <span id='emoji'>;)</span></i></h1><br/>
                      <div className='card-para'>
                          <span id='sub-text'> Front-End Developer / Full-Stack Developer</span>
                      </div>
                  </div>
                  <div className='card-image'>
                      <img src={profile} alt='img'></img>
                      <div className='circle'> </div>
                  </div>
              </div>
          </div>
      );
}
export default Home;
