import React from "react";
import Adminnav from "./Adminnav";
import Admintopheader from "./Admintopheader";
import Adminproduc from "./Adminproduc";

const Admindash = (props) => {
  return (
    <div>
      <Admintopheader />
      <Adminnav />
      <div className="sectiontabholder">
        <Adminproduc />
      </div>
    </div>
  );
};

export default Admindash;
