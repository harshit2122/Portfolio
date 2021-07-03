import React from 'react'
import './overview.css';
import image from './code.png'; 
function overview() {
    return (
        <div className="overview">
            <div className="stats">
                <h1> Hey! I am Harshit Joshi, <br></br>Software Developer</h1>
                <img className ="Coder" src={image} alt="image"></img>
            </div>
           
        </div>
    )
}

export default overview
