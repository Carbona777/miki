import React from "react";
import FrontBody from "../Components/FrontBody";
import BackBody from "../Components/BackBody";

export default function Hero() {
  return (
    <>
      <div className="container-fluid align-center pt-3 ">
        <div className="row text-center">
          <div className="col-md-6">
            <FrontBody />
          </div>
          <div className="col-md-6">
            <BackBody />
          </div>
        </div>
      </div>

      {/* Bootstrap Javascript */}
    </>
  );
}
