import React from 'react'
import './navbar.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function navbar() {
    return (
        <div className="nav">
            <div className="nav_left">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
            <div className="nav_search">
                <input type="text" placeholder="Search or jump into" ></input>
            </div>
            <h1> Pull requests </h1>
            <h1> Issues</h1>
            <h1> Marketplace</h1>
            <h1> Explore</h1>
            </div>
            
            <div className="nav_right">
                <div className="nav_icons">
                <NotificationsNoneIcon className="icon_1" />
                <AddIcon className="icon_2" />
                <AccountCircleIcon className="icon_3" />
                </div>
            </div>
        </div>
    )
}

export default navbar;