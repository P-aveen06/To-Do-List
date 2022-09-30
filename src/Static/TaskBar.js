import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "../Styles.css";
const Task = () => {
  const [value, setValue] = useState("");
  return (
    <div className="mt-1">
      <span className="p-input-icon-right">
        <i
          className="pi pi-check-square"
          id="task-i"
          style={{ margin: "auto" }}
        />
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Take a note..."
          style={{
            width: "600px",
            marginTop: "1.5rem",
            boxShadow: "5px 5px 9px grey",
          }}
        />
        
      </span>
    </div>
  );
};
export default Task;
