import profile from '../Public/Images/profile.jpg'
import React from 'react';
function Home() {
  return (

         <div className='banner'>
              <div className='card'>
                <div className='card-image'>
                <img src={profile} alt='img'></img>
                <div className='circle'>
                </div>
                </div>
                <div className='card-text'>
                <h4>Hello, My name is</h4><br/>
                <h1><i>Anvesh Damuluri</i></h1><br/>
                <div className='card-para'>
                <h2>And I'm a <span id='sub-text'> Front-End Developer</span></h2>
                </div>
                </div>
              </div>
        </div>
      );
}
export default Home;
