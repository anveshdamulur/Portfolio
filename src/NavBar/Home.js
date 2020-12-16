import profile from '../Public/Images/landing_pic.jpeg'
import React from 'react';
function Home() {
  return (

          <div className='banner'>
              <div className='card'>
                  <div className='card-text'>
                      <h1>Hello, I'am <i>Anvesh Damuluri <span id='emoji'>;)</span></i></h1><br/>
                      {/* <h1></h1><br/> */}
                      <div className='card-para'>
                          <span id='sub-text'> Front-End Web Developer</span>
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
