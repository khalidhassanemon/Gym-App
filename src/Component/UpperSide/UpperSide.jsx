import React from "react";
import Image from "next/image";
import img1 from "../../Images/imag-1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import { BiChevronRightCircle } from "react-icons/bi";
import { SiNike, SiAdidas, SiPuma, SiReebok } from "react-icons/si";

const UpperSide = () => {
  return (
    <div className=" ml-36 mr-10">
      <div className=" mb-3 max-w-full p-10">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="body font-serif">
              <h6 className="title font-bold text-3xl">Healthy in side</h6>
              <h6 className="text-indigo-600 font-extrabold text-3xl">
                fresh <span className="text-black">outside</span>
              </h6>
              <p className="card-text text-justify text-gray-500 w-96 text-sm">
                Exercise is a very important need for our body. Health and
                fitness will be obtained if you can do regular exercise and run
                a healthy routine.
              </p>
              <div className="d-flex ">
                <button className="btn btn-outline btn-primary mr-8 d-flex">
                  <span className="mr-7">Get Started </span> <span></span>
                  <BiChevronRightCircle></BiChevronRightCircle>
                </button>
                <button className="btn btn-outline btn-success bg-white text-blue-900 d-flex">
                  <span className="mr-5">Learn more</span>
                  <FaPlayCircle></FaPlayCircle>
                  <span></span>
                </button>
              </div>
              <h6 className='font-medium mt-8 font-serif text-gray-600'>Brands</h6>
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
          <div className="col-md-6">
            <Image src={img1} className="-mt-2 w-80 ml-24" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperSide;
