import photo from '../Public/Images/raw_Photo.jpg'
import React from 'react';
function Home() {
  return (

          <div className='banner'>
              <div className='container-card'>
                  <div className='container-card-text'>
                      <h1>Hello, I am <i>Anvesh Damuluri <span id='emoji'>;)</span></i></h1><br/>
                      <div className='container-card-para'>
                          <span id='sub-text'> Front-End Web Developer</span>
                      </div>
                  </div>
                  <div className='container-card-image'>
                      <img src={photo} alt='img'></img>
                      <div className='circle'> </div>
                  </div>
              </div>
          </div>
 
 );
}
export default Home;
