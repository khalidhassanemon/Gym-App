import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import img3 from "../../Images/image3.png";
const LastPage = () => {
  return (
    <div className="ml-40 mr-28 mt-10">
      <div className="row g-0">
        <div className="col-md-8">
          <h6 className="card-title text-3xl font-thin font-serif">Daily morning <br></br> workout in home</h6>
          <p className="card-text w-auto text-justify text-sm text-gray-500">
          Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. 
          </p>
          <button className="btn btn-active  btn-primary w-52 d-flex mt-1 ">
            Get Started
            <span className="ml-7">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <Image src={img3}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
