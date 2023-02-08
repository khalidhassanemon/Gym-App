import React from "react";
import { FaRunning } from "react-icons/fa";
import { TbYoga } from "react-icons/tb";
import { IoIosBody } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
const MiddleLast = () => {
  return (
    <div className="container row w-100 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl">
      <div className="col-md-4 ">
    
       <div className="d-flex my-5">
       <button className="bg-indigo-400 rounded-xl p-1 mr-4 text-white"  style={{ fontSize: "50px" }}>
          <IoIosBody></IoIosBody>
        </button>

        <div>
          Get that 11 line <br></br> in 30 days
          <div className="d-flex">
            <span>
              <p className="font-thin">Learn more </p>
            </span>
            <span className="mt-1">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </div>
        </div>
       </div>
     
      </div>

      <div className="col-md-4 ">
        <div className="d-flex my-14">
        <button   className="bg-indigo-400 rounded-xl mr-4 text-white"
              style={{ fontSize: "60px", color: "black", marginLeft: "5px" }}>
          <FaRunning></FaRunning>
        </button>
        <div className="">
          14 days<br></br> shared challenge
          <div className="d-flex">
            <span>
              <p className="font-thin">Learn more</p>
            </span>
            <span className="mt-1">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </div>
        </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div className="d-flex">

        <div className="d-flex my-5">
          <button   className="bg-indigo-400 rounded-xl mr-4 text-white"
              style={{ fontSize: "60px", color: "black", marginLeft: "5px" }}>
            <TbYoga></TbYoga>
          </button>

          <div className="text-gray-400 font-semibold -mt-1">
            Get flat belly <br></br> in 30 days
            <div className="d-flex">
              <p className="font-thin">Learn more </p>

              <span className="mt-1">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleLast;