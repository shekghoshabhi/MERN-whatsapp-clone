import React from 'react'
import './css/Sidebar.css'

import {Avatar, IconButton} from '@material-ui/core';

import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';

import SingleChat from './SingleChat'

const Sidebar = () => {
    return (
        <div className="sidebar" >
            <div className="top" >
                 <div className="top_left" >
                    <Avatar/>
                 </div>
                 <div></div>
                 <div className="top_right">
                     <IconButton>
                         <DonutLargeIcon/>
                     </IconButton>
                     <IconButton>
                         <MessageIcon/>
                     </IconButton>
                     <IconButton>
                         <MoreVertIcon/>
                     </IconButton>

                 </div>
            </div>
            <div className="sidebar_search" >
               <SearchIcon/>
               <input placeholder="seacrh" className="search_input"/>
               

           </div>
            <div className="single" >
               <SingleChat/>
               <SingleChat/>

               <SingleChat/>
               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>

               <SingleChat/>
               <SingleChat/>
               <SingleChat/>
               <SingleChat/>
               <SingleChat/>
               <SingleChat/>


            </div>
        </div>
    )
}

export default Sidebar