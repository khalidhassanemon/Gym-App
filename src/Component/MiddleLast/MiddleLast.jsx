import React from "react";
import { FaRunning } from "react-icons/fa";
import { TbYoga } from "react-icons/tb";
import { IoIosBody } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
const MiddleLast = () => {
  return (
    <div>
      <div className="ml-48 mr-40 mb-3">
        <div className="row d-flex bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl sm:p-10">
          <div className="col-md-4 d-flex">
            <div className=" mt-4">
              <button
                className="bg-indigo-700 rounded-xl mr-4 p-2 text-white"
                style={{ fontSize: "50px" }}
                id="cont-9"
              >
                <IoIosBody></IoIosBody>
              </button>
            </div>

            <div
              className="font-medium text-gray-400 mt-4 font-semibold"
              id="container-5"
            >
              Get that 11 line <br></br> in 30 days
              <div className="d-flex">
                <span>
                  <p className="font-thin">Learn more </p>
                </span>
                <span className="mt-1.5 pl-3 text-white">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex">
            <div>
              <button
                className="bg-indigo-600 rounded-xl mt-4 mr-4 text-white text-5xl p-2"
                
              >
                <FaRunning></FaRunning>
              </button>
            </div>
            <div className=" text-gray-400 mt-4 font-semibold">
              14 days<br></br> shared challenge
              <div className="d-flex">
                <span>
                  <p className="font-thin">Learn more</p>
                </span>
                <span className="mt-1.5 pl-3 text-white">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="body d-flex mt-4">
              <div id="cont-15">
                <button
                  className="bg-indigo-700 rounded-xl mr-4 text-white"
                  style={{
                    fontSize: "60px",
                    color: "black",
                    marginLeft: "5px",
                  }}
                >
                  <TbYoga></TbYoga>
                </button>
              </div>

              <div className="text-gray-400 font-semibold -mt-1">
                Get flat belly <br></br> in 30 days
                <div className="d-flex">
                  <span>
                    <p className="font-thin">Learn more </p>
                  </span>
                  <span className="mt-1.5 pl-3 text-black ml-0.5">
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleLast;
