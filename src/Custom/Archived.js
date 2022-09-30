import React from "react";
import Navbar from '../Static/Header';
import TaskBar from '../Static/TaskBar';
const Archived = () => {
  return (
    <div>
      <Navbar />
      <hr className="w-1024px" />
      <TaskBar />
      <div className="mt-5 mb-3 m-auto">
        <span className="text-500 text-4xl">A R C H I V E D</span>
      </div>
      <div className="grid w-1024px m-auto">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-gray-50">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Archived</span>
                <div className="text-900 font-medium text-xl">Sep-30</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-gray-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-gray-500 text-xl"></i>
              </div>
            </div>
            <span className="text-500">This is private</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-gray-50">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">Archived</span>
                <div className="text-900 font-medium text-xl">Sep-23</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-gray-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-gray-500 text-xl"></i>
              </div>
            </div>
            <span className="text-500">since last week</span>
          </div>
        </div>
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round bg-gray-50">
            <div className="flex justify-content-between mb-3">
              <div>
                <span className="block text-500 font-medium mb-3">
                  Archived
                </span>
                <div className="text-900 font-medium text-xl">Sep-12</div>
              </div>
              <div
                className="flex align-items-center justify-content-center bg-gray-100 border-round"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-gray-500 text-xl"></i>
              </div>
            </div>
            <span className="text-500">newly registered</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Archived;
