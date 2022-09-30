import React from "react";
import Navbar from '../Static/Header';
import TaskBar from '../Static/TaskBar';
import { OrganizationChart } from "primereact/organizationchart";
import { useState } from "react";
const Orgchart = () => {
  const [selection, setSelection] = useState("");
  const data = [
    {
      label: "U s e r",
      expanded: true,
      children: [
        {
          label: "N O T E S",
          expanded: true,
          children: [
            {
              label: "To-Do",
              expanded: true,
              children: [
                {
                  label: "To Recall CRUD concepts in My-SqL",
                },
              ],
            },
            {
              label: "In - Progress",
              expanded: true,
              children: [
                {
                  label: "Learning Node-Js for API Built",
                },
                {
                  label: "Learning Data Structure in JavaScript",
                },
                {
                  label: "Learning Python-3 ",
                }
              ],
            },
          ],
        },
        {
          label: "R E M I N D E R S",
          expanded: true,
          children: [
            {
              label: "Check Mail",
            },
            {
              label: "Meet Class Advisor",
            },
          ],
        },
      ],
    },
  ];
  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div >
          <div className="node-header">{node.label}</div>
          <div className="node-content">
            <div>{node.data.name}</div>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div>
      <Navbar />
      <hr className="w-1024px" />
      <TaskBar />
    <div className="organizationchart-demo w-1024px m-auto">
      <div className="card">
      <div className="mt-5 mb-3 m-auto">
        <span className="text-500 text-4xl">C H A R T - V I E W</span>
      </div>
        <OrganizationChart
          value={data}
          nodeTemplate={nodeTemplate}
          selection={selection}
          selectionMode="multiple"
          onSelectionChange={(event) => setSelection(event.data)}
          className="company"
        ></OrganizationChart>
      </div>
    </div>
    </div>
  );
};
export default Orgchart;
