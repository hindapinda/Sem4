// /Users/hindbidaoui/Desktop/loading page /Loading-page/src/assets/preloader.jsx

import React, { useEffect } from "react";
import { preLoaderAnim } from '../animations';
import "./preloader.css";

function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Designer,</span>
        <span>Developer,</span>
        <span>Creator.</span>
      </div>
    </div>
  );
}

export default Preloader;
