
import React from 'react';
import html from '../Public/skills-images/html5.png';
import css from '../Public/skills-images/css3logo.png';
import js from '../Public/skills-images/js.png';
import nodeExp from '../Public/skills-images/nodeexpress.png';
import bootstrap from '../Public/skills-images/bootstrap-stack.png';
import react from '../Public/skills-images/react.svg';
import mongo from '../Public/skills-images/mongodb.jpg';
import git from '../Public/skills-images/git_logo.png';
import java from '../Public/skills-images/Core-Java.jpg';
function Skills() {
  return (
   
    <div>
    <h1 className='header'>Skills</h1>
    <div className='container-skills'>
     
          <div className='skill-image'>
          
          <img src={html} alt="htmlImg"></img>
          <li>
          <h3>HTML5</h3><span className='bar'><span className='html'></span></span>
          </li>
        
          </div>
          <div className='skill-image'>
            <img src={css} alt='css-img'></img>
            <li>
          <h3>CSS3</h3><span className='bar'><span className='css'></span></span>
          </li>
          </div>
          <div className='skill-image'>
            <img src={js} alt='js-img'></img>
            <li>
          <h3>JavaScript</h3><span className='bar'><span className='JavaScript'></span></span>
          </li>
          </div>
          <div className='skill-image'>
            <img src={bootstrap} alt='bootstrap-img'></img>
            <li>
          <h3>bootstarp</h3><span className='bar'><span className='bootstarp'></span></span>
          </li>
          </div>
          <div className='skill-image'>
            <img src={nodeExp} alt='node-img'></img>
            <li>
          <h3>NodeJS</h3><span className='bar'><span className='node'></span></span>
          </li>
          </div> 
          <div className='skill-image'>
            <img src={react} alt='react-img'></img>
            <li>
          <h3>React</h3><span className='bar'><span className='React'></span></span>
          </li>
          </div> 
          <div className='skill-image'>
            <img src={mongo} alt='mongo-img'></img>
            <li>
          <h3>MongoDB</h3><span className='bar'><span className='mongo'></span></span>
          </li>
          </div> 
          <div className='skill-image'>
            <img src={git} alt='git-img'></img>
            <li>
          <h3>Git</h3><span className='bar'><span className='Git'></span></span>
          </li>
          </div> 
          <div className='skill-image'>
            <img src={java} alt='java-img'></img>
            <li>
          <h3>Java</h3><span className='bar'><span className='Java'></span></span>
          </li>
          </div> 
    </div>
    </div>
  );
}

export default Skills;