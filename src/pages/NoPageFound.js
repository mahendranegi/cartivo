import React from "react";
import { useNavigate } from "react-router-dom";
function NoPageFound() {
const navigate = useNavigate()
  return (
    <div className="noPageFound">
      <div className="noPageContent">

        <div className="errorNumber">
          404
        </div>

        <h1>Page Not Found</h1>

        <p>
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <button className="homeBtn" onClick={()=> navigate("/")}>
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default NoPageFound;