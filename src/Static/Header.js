import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import  MainMenu  from './MainMenu.js';
import "../Styles.css";
import image from "./logo.gif";
import { InputText } from "primereact/inputtext";
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div
      className="m-auto flex justify-content-around mt-2" 
    >
      <div className="mt-1">
        <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)} style={{ backgroundColor: 'var(indigo-50)', width:'300px' }}>
          <p>M E N U - B A R</p>
          < MainMenu />
        </Sidebar>
        <Button
          icon="pi pi-bars "
          onClick={() => setVisibleLeft(true)}
          className="mr-2 p-button-raised p-button-text"
          tooltip="Menu"
          tooltipOptions={{
            position: "bottom",
            mouseTrack: true,
            mouseTrackTop: 15,
          }}
        />
      </div>
      <div className="flex">
        <div>
          <input
            type="image"
            img
            src={image}
            alt="photo"
            width="72px"
            height="72px"
          />
        </div>
        <div className="flex">
          <p style={{ color: "gray" , fontSize:'1.5rem'}}>K E E P</p>
        </div>
      </div>
      <div className="mt-1">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="S E A R C H"
            style={{boder:'unset',boxShadow:'5px 5px 5px grey'}}
          />
        </span>
      </div>
      <div className="flex w-200px justify-content-around mt-1">
        <div>
          <Link to='/chart' id='link'><Button
            icon="pi pi-sitemap"
            className="p-button-rounded p-button-success p-button-text"
            aria-label="Chart"
            tooltip="Chart"
            tooltipOptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
            }}
          /></Link>
        </div>
        <div>
          <Link to='/help' id='link'><Button
            icon="pi pi-comments"
            className="p-button-rounded p-button-warning p-button-text"
            aria-label="Help"
            tooltip="Help"
            tooltipOptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
            }}
          /></Link>
        </div>
        <div>
          <Link to='/signin' id='link'><Button
            icon="pi pi-user-edit"
            className="p-button-rounded p-button-info p-button-text"
            aria-label="User"
            tooltip="User"
            tooltipOptions={{
              position: "bottom",
              mouseTrack: true,
              mouseTrackTop: 15,
            }}
          /></Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
