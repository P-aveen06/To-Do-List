import React from "react";
import { Button } from "primereact/button";
import {HashLink as Link} from 'react-router-hash-link';
import '../Styles.css';
const MainMenu = () => {
  return (
    <div className="w-300px ">
      <div className="w-300px mt-1">
        <Link to='/' id='link'><Button 
        label="Notes" 
        className="p-button-raised p-button-text" 
        icon="pi pi-pencil"
        style={{  width:'200px' }}
        /></Link>
      </div>
      <div className="w-300px mt-1">
        <Link to='/reminder' id='link'><Button
        icon="pi pi-bell" 
          label="Reminder"
          className="p-button-raised p-button-secondary p-button-text "
          style={{  width:'200px' }}
        /></Link>
      </div>
      <div className="w-300px mt-1">
        <Link to='/archived' id='link'><Button
        icon="pi pi-eject" 
          label="Archived"
          className="p-button-raised p-button-success p-button-text"
          style={{  width:'200px' }}
        /></Link>
      </div>
      <div className="w-300px mt-1">
        <Link to='/trash' id='link'><Button
        icon="pi pi-trash" 
          label="Trash"
          className="p-button-raised p-button-danger p-button-text"
          style={{  width:'200px' }}
        /></Link>
      </div>
      <div className="w-300px mt-1">
        <Link to='/settings' id='link'><Button
        icon="pi pi-cog" 
          label="Setting"
          className="p-button-raised p-button-warning p-button-text"
          style={{  width:'200px' }}
        /></Link>
      </div>
    </div>
  );
};
export default MainMenu;
