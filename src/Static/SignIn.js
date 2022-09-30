import React, { useState } from "react";
import Navbar from './Header'
import TaskBar from './TaskBar'
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [checked, setChecked] = useState("");
  return (
    <div>
      <div>
        <Navbar />
        <hr className="w-1024px" />
        <TaskBar />
      </div>
      <div className="w-700px m-auto mt-5">
        <div className="flex align-items-center justify-content-center">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
              <div className="text-900 text-3xl mb-3">Hii Again!</div>
              <span className="text-600 font-medium line-height-3">
                Don't have an account?
              </span>
              <Link to='/signup' id='link'><span className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"> Create Now!</span></Link>
            </div>

            <div>
              <label htmlFor="email" className="block text-900  mb-2">
                E M A I L
              </label>
              <InputText id="email" type="text" className="w-full mb-3" />

              <label htmlFor="password" className="block text-900 mb-2">
                P A S S W O R D
              </label>
              <InputText
                id="password"
                type="password"
                className="w-full mb-3"
              />
              <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                  <Checkbox
                    id="rememberme"
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                    className="mr-2"
                  />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
                <a
                  className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                  href="*"
                >
                  Forgot your password?
                </a>
              </div>

              <Button label="Sign In" icon="pi pi-sign-in" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
