import React from 'react'
import './overview.css';
import image from './code.png'; 
import github from './github.png';
import git from './git.png';
import c from './c.png';
import cpp from './cpp.png';
import java from './java.png';
import js from './js.png';
import react from './react.png';
import terminal from './terminal.png';
import microsoft from './microsoft.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
function overview() {
    return (
        <div className="overview">
            <div className="stats">
                <h1> Hey! I am Harshit Joshi, <br></br>Software Developer</h1>
                <img className ="Coder" src={image} alt=""></img>
            </div>
            <h3>I am good at</h3> 
            <img className ="skills" src={react} alt=""></img>
            <img className ="skills" src={github} alt=""></img>
            <img className ="skills" src={git} alt=""></img>
            <img className ="skills" src={c} alt=""></img>
            <img className ="skills" src={cpp} alt=""></img>
            <img className ="skills" src={java} alt=""></img>
            <img className ="skills" src={js} alt=""></img>
            <img className ="skills" src={terminal} alt=""></img>
            <img className ="skills" src={microsoft} alt=""></img>
            <hr className="overview_line"/>

            <div className="stats__box">
                <div className="projects__completed">
                    <h1>8</h1>
                    <h2>Projects Completed</h2>
                </div>
                <hr className="stats__hr"/>
                <div className="current__projects">
                    <h1>3</h1>
                    <h2>Current Projects</h2>
                </div>
            </div>
            <div className="connect">
                <h3>Connect with me!</h3>
                <img className ="social" src={linkedin} alt=""></img>
                <img className ="social" src={instagram} alt=""></img>
            </div>
        </div>
    )
}
export default overview
