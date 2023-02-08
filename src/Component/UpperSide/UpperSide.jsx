import React from "react";
import Image from "next/image";
import img1 from "../../Images/imag-1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import { BiChevronRightCircle } from "react-icons/bi";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";

const UpperSide = () => {
  return (
    <div className="container d-md-flex justify-content-md-between align-items-md-center my-3 my-md-10 ">
      <div className="col-md-6">
        <div className="body font-serif">
          <h6 className="title font-bold text-3xl">Healthy in side</h6>
          <h6 className="text-indigo-600 font-extrabold text-3xl">
            fresh <span className="text-black">outside</span>
          </h6>
          <p className="card-text text-justify text-gray-500 w-100 text-sm">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <button className="btn btn-outline btn-primary d-flex me-2">
              <span className="mr-4">Get Started </span> <span></span>
              <BiChevronRightCircle></BiChevronRightCircle>
            </button>
            <button className="btn btn-outline btn-success bg-white text-blue-900 d-flex">
              <span className="mr-5">Learn more</span>
              <FaPlayCircle></FaPlayCircle>
              <span></span>
            </button>
          </div>
          <h6 className="font-medium mt-8 font-serif text-gray-600">Brands</h6>
          <div>
            <span
              className="d-flex icon gap-4 mb-3"
              style={{ fontSize: "80px", color: "gray" }}
            >
              <SiNike></SiNike>
              <SiAdidas></SiAdidas>
              <SiPuma></SiPuma> <SiReebok></SiReebok>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={img1} className="" alt="" />
      </div>
    </div>
  );
};

export default UpperSide;