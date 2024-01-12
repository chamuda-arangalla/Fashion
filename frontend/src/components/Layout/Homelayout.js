import React from "react";
import Homeheader from "../Header/Homeheader";
import Homefooter from "../Footer/Homefooter";

const Homelayout = ({ children }) => {
  return (
    <div>
      <Homeheader />
      <main style={{ minHeight: "75vh" }}>{children}</main>
      <Homefooter />
    </div>
  );
};

export default Homelayout;
