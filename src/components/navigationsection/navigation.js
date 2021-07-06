import React from 'react'
import './navigation.css'
import AssignmentIcon from '@material-ui/icons/Assignment';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from "react-router-dom";


function navigation() {
   
    return (
        <div className="navigation">
            <div className = "navi_icon">
                <Link to="/"><AssignmentIndIcon /> Overview </Link>
            </div>
            <div className="navi_icon">
                <Link to = "/projects"> <AssignmentIcon /> Projects </Link>
            </div>
            <div className ="navi_icon">
                <Link to ="/experience"><WorkIcon /> Experience </Link>
            </div>
        </div>
    )
}

export default navigation