import React from 'react'
import './navigaton.css'
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import AssignmentIcon from '@material-ui/icons/Assignment';


function navigation() {
    const navi = () =>{
        alert('hello')
    }
    return (
        <div className="navigation">
            <div className="navi_icon" onClick= {navi}>
            <ImportContactsIcon />
            <h1>Overview</h1>
            </div>
            <div className="navi_icon">
            <AssignmentIcon />
            <h1>Project</h1>
            </div>
            <div className="navi_icon">
            <ImportContactsIcon />
            <h1>Overview</h1>
            </div>
        </div>
    )
}

export default navigation