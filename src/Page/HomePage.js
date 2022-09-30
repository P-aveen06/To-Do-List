import React from 'react';
import Navbar from '../Static/Header.js';
// import Notes from '../Custom/Notes/Notes.js';
// import MainMenu from '../Static/MainMenu.js';
import TaskBar from '../Static/TaskBar.js';
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Note from '../Custom/Notes/Notes';
const Home=()=>{
    return (
        <div>
            <Navbar/>
            <hr className='w-1024px'/>
            <TaskBar/>
            <Note/>
        </div>
    )
}
export default Home;