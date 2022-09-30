import React from "react";
import "../../Styles.css";
import InProgress from "./Inprogress";
import Done from './Done';
import Todo from "./Todo";
const Notes = () => {
  return (
    <div className="m-auto w-900px">
      <div>
        <p style={{ fontSize: "30px", color: "grey" }}>N O T E S</p>
      </div>
      <div className="flex justify-content-around">
        <Todo/>
        <InProgress />
        <Done/>
      </div>
    </div>
  );
};
export default Notes;
