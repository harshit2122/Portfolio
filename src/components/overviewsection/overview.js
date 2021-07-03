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
        </div>
    )
}
export default overview
