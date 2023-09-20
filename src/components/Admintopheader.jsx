import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import { ImTab } from "react-icons/im";

const Admintopheader = () => {

  const showthenav=()=>{
    document.getElementById("thenavitself").style.display="block"
      }

  return (
    <header className="adtopheader d-flex align-items-center justify-content-between p-2">
      <div className=" d-flex align-items-center">
      <button className="    tabbutton tabbutton2" onClick={showthenav}>
          <ImTab />
        </button>
        <FaSearch className="mx-3 fs-3" />
        <input
          className=" m-2 mx-3 inputsearchad"
          placeholder="Search product"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="droperfordetails">
        <div>
          <img src="" className="showingadmin" alt="" />
          <button className="theadshoeme">
            <BiSolidDownArrowAlt />
          </button>
        </div>

        <div className="dropaddetails">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis incidunt ab aspernatur necessitatibus magni, quibusdam odit hic, labore iure nihil, error nam unde exercitationem. Eius officiis assumenda modi debitis aut?
        </div>
      </div>
    </header>
  );
};

export default Admintopheader;
