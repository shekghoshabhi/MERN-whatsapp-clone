import React from 'react'
import './css/SingleChat.css'
import {Avatar, IconButton} from '@material-ui/core';


const SingleChat = () => {
    return (
        <div className="singleChat" >
            <Avatar className="avatar" />
            <div className="name" >
                <h3>Name</h3>
                <span>Recent Message</span>
            </div>
        </div>
    )
}


export default SingleChat