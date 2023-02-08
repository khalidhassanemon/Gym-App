import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import img3 from "../../Images/img3.jpg";
const LastPage = () => {
  return (
    <div className="container d-md-flex w-100 my-3">
      <div className="w-md-50">
        <h6 className="">
          Daily morning <br></br> workout in home
        </h6>
        <p className=" text-sm text-gray-500">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button className="btn btn-active btn-primary d-flex w-sm-50">
          Get Started
          <span className="">
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </span>
        </button>
      </div>
      <div className="w-md-50 mt-sm-3">
        <div className="w-100">
          <Image src={img3}></Image>
        </div>
      </div>
    </div>
  );
};

export default LastPage;