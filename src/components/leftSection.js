import React from 'react'
import './leftSection.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function leftSection() {
    return (
        <div className="line">
            <hr />
        <div className="leftSection">
            <img src="https://media-exp3.licdn.com/dms/image/C5603AQGOH2662KKkYw/profile-displayphoto-shrink_400_400/0/1623339666458?e=1629331200&v=beta&t=XTcFdq-rgMte3XWbeZZ3h4lUsYHxKPcoW5z9KxORyM4" alt=""></img>
            <div className="left_text">
                <h1>Harshit Joshi </h1>
            </div>
            <div className="left_icons">
                <WhatsAppIcon />
                <h1>+91-6377253495</h1>
                <MailOutlineIcon />
                <h1>harshitjsh0@gmail.com</h1>
            </div>
        </div>
    </div>
    )
}

export default leftSection