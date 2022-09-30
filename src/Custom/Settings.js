import React from "react";
import image from "./Error.png";
import { Button } from "primereact/button";
const Error = () => {
  return (
    <div
      className=" m-auto mt-8 w-1024px h-30rem"
    >
      <div className="w-600px m-auto pt-8">
        <input
          type="image"
          img
          src={image}
          alt="photo"
          width="92px"
          height="100px"
        />
        <h1
          style={{
            fontFamily: "Barlow Condensed,sans-serif",
            fontStyle: "italic",
          }}
        >
          502 Error!
        </h1>
        <p>Sorry,I'm Working in This Page!</p>
      </div>
      <div>
      <Button label="Back to Basics" className="p-button-raised p-button-info p-button-text" id="error-bt"/>      </div>
    </div>
  );
};
export default Error;
