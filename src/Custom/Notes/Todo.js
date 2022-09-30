import React from "react";
import { Button } from "primereact/button";
const Todo = () => {
  return (
    <div className="w-400px">
      <div>
        <span className="text-blue-500">TO - DO</span>
      </div>
      <div className="m-auto w-200px">
        <div className="col-12 md:col-6 lg:col-3 w-700px ">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-300px bg-blue-50">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-400 font-medium mb-3">Task</span>
                <span className="text-900 text-blue-500 font-medium text-xl">
                  To-Do
                </span>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-200 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i
                  className="pi pi-exclamation-triangle text-blue-600 text-xl"
                ></i>
              </div>
            </div>
            <div className="flex justify-content-around">
              <span
                className="text-600 w-180px"
              >
                To Learn NextJS Framework
              </span>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto w-200px">
        <div className="col-12 md:col-6 lg:col-3 w-700px ">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-300px bg-blue-50">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-400 font-medium mb-3">Task</span>
                <span className="text-900 text-blue-500 font-medium text-xl">
                  To-Do
                </span>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-blue-200 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i
                  className="pi pi-exclamation-triangle text-blue-600 text-xl"
                ></i>
              </div>
            </div>
            <div className="flex justify-content-around">
              <span
                className="text-600 w-180px"
              >
                To Recall CRUD concepts in My-SqL
              </span>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;
