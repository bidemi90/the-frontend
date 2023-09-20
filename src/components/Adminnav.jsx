import React from "react";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegWindowRestore } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { IoIosStats } from "react-icons/io";
import { BiSolidMessageDots } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { ImTab } from "react-icons/im";

const Adminnav = () => {
  const dontshownav=()=>{
document.getElementById("thenavitself").style.display="none"
  }
  return (
    <nav className="navinadd shadow-lg " id="thenavitself" >
      <div className=" d-flex justify-content-between align-items-center">
        <div className="hlodingloginthus"></div>
        <button className="   tabbutton" onClick={dontshownav}>
          <ImTab />
        </button>
      </div>

      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <RiDashboardLine /> dashboard
      </Link>
      <div className="outholdingclick shadow dropdown">
        <button className=" w-100 border-0  rounded  d-block text-capitalize  fw-semibold fs-6 eachclick d-flex justify-content-between align-items-center">
          <p className="m-0">
            <FaRegWindowRestore /> Products
          </p>
          <BiSolidDownArrow className=" fs-6" />
        </button>
        <div className="thedropinit">
          <Link
            className="   d-block text-capitalize  fw-semibold fs-6 eachclick"
            to="/signup"
          >
            <RxDotFilled />
            all product
          </Link>
          <Link
            className="   d-block text-capitalize  fw-semibold fs-6 eachclick"
            to="/signup"
          >
            <RxDotFilled />
            Add product
          </Link>
          <Link
            className="   d-block text-capitalize  fw-semibold fs-6 eachclick"
            to="/signup"
          >
            <RxDotFilled />
            categories
          </Link>
          <Link
            className="   d-block text-capitalize  fw-semibold fs-6 eachclick"
            to="/signup"
          >
            <RxDotFilled />
            dashboard
          </Link>
        </div>
      </div>
      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <AiOutlineShoppingCart /> order
      </Link>
      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <HiUsers /> customers
      </Link>
      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <IoIosStats /> statistics
      </Link>
      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <AiOutlineTransaction /> transation
      </Link>
      <Link
        className="  shadow  d-block text-capitalize  fw-semibold fs-6 eachclick outholdingclick"
        to="/signup"
      >
        <BiSolidMessageDots /> review
      </Link>
    </nav>
  );
};

export default Adminnav;
