import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import Image from "next/image";
import img2 from "../../Images/image2.png";
const LastSide = () => {
  return (
    <div>
      <div className="container d-md-flex justify-content-md-center w-100 mx-auto mt-md-3">
        <div className="w-100 w-md-50 ">
          <Image className="" src={img2}></Image>
        </div>
        <div className="w-100 w-md-50">
          <h3 className="text-3xl font-serif ">
            Best full body <br></br> workout to loose fat
          </h3>
          <p className=" text-gray-500 w-100 text-sm text-justify">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.{" "}
          </p>
          <button className="btn btn-active btn-primary d-flex w-sm-50">
            Get Started
            <span className="ml-3">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastSide;