import React from "react";
import { Button } from "primereact/button";
import "../../Styles.css";
import Navbar from "../../Static/Header";
import TaskBar from "../../Static/TaskBar";
const Reminders = () => {
  return (
    <div id="reminder">
      <Navbar />
      <hr className="w-1024px" />
      <TaskBar />
      <div className="mt-3 mb-3">
        <span style={{ fontSize: "30px", color: "grey" }}>
          R E M I N D E R S
        </span>
      </div>
      <div className="w-900px m-auto">
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-900px bg-pink-50 mb-3">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="text-900 text-pink-500 font-medium text-xl">
                Routine
              </span>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-pink-100 border-round"
              style={{ width: "2rem", height: "2rem" }}
            >
              <i className="pi pi-bell text-pink-500 text-xl"></i>
            </div>
          </div>
          <div className="flex justify-content-around">
            <span className="text-600 w-180px">Check Mail</span>
            <div className="flex justify-content-around w-200px">
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-stopwatch"
                  className=" p-button-text p-button-plain text-cyan-500"
                  aria-label="alarm"
                  tooltip="Set alarm"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-900px bg-pink-50 mb-3">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="text-900 text-pink-500 font-medium text-xl">
                Routine
              </span>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-pink-100 border-round"
              style={{ width: "2rem", height: "2rem" }}
            >
              <i className="pi pi-bell text-pink-500 text-xl"></i>
            </div>
          </div>
          <div className="flex justify-content-around">
            <span className="text-600 w-180px">Walking</span>
            <div className="flex justify-content-around w-200px">
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-stopwatch"
                  className=" p-button-text p-button-plain text-cyan-500"
                  aria-label="alarm"
                  tooltip="Set alarm"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* custom */}

        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-900px bg-cyan-50 mb-3">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="text-900 text-cyan-500 font-medium text-xl">
                Custom
              </span>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-cyan-100 border-round"
              style={{ width: "2rem", height: "2rem" }}
            >
              <i className="pi pi-bell text-cyan-500 text-xl"></i>
            </div>
          </div>
          <div className="flex justify-content-around">
            <span className="text-600 w-180px">Meet Class Advisor</span>
            <div className="flex justify-content-around w-200px">
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain text-pink-600"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain text-pink-600"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-stopwatch"
                  className=" p-button-text p-button-plain text-pink-500"
                  aria-label="alarm"
                  tooltip="Set alarm"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Routine */}
        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round w-900px bg-pink-50 mb-3">
          <div className="flex justify-content-between mb-3">
            <div>
              <span className="text-900 text-pink-500 font-medium text-xl">
                Routine
              </span>
            </div>
            <div
              className="flex align-items-center justify-content-center bg-pink-100 border-round"
              style={{ width: "2rem", height: "2rem" }}
            >
              <i className="pi pi-bell text-pink-500 text-xl"></i>
            </div>
          </div>
          <div className="flex justify-content-around">
            <span className="text-600 w-180px">Call Mom</span>
            <div className="flex justify-content-around w-200px">
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
                tooltip="Chart"
                tooltipOptions={{
                  position: "bottom",
                }}
              >
                <Button
                  icon="pi pi-pencil"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="Edit"
                  tooltip="Edit"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-trash"
                  className=" p-button-text p-button-plain text-cyan-600"
                  aria-label="trash"
                  tooltip="Delete"
                  tooltipOptions={{
                    position: "bottom",
                  }}
                />
              </div>
              <div
                className="flex align-items-center justify-content-center bg-grey-100 border-round m-auto"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <Button
                  icon="pi pi-stopwatch"
                  className=" p-button-text p-button-plain text-cyan-500"
                  aria-label="alarm"
                  tooltip="Set alarm"
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
export default Reminders;
