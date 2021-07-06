import React from 'react'
import './navigation.css'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function navigation() {
   
    return (
        <div className="navigation">
            <div className = "navi_icon">
                <Link className=""to="/"><ImportContactsIcon /> Overview </Link>
            </div>
            <div className="navi_icon">
                <Link to = "/projects"> <AssignmentIcon /> Projects </Link>
            </div>
            <div className ="navi_icon">
                <Link to ="/experience"><ImportContactsIcon /> Experience </Link>
            </div>
        </div>
    )
}

export default navigation