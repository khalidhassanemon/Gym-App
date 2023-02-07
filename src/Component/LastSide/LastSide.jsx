import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSprint, GiHighKick, GiWeightLiftingUp } from "react-icons/gi";
import Image from "next/image";
import img2 from "../../Images/image2.png";
const LastSide = () => {
  return (
    <div >
     <div className=" mb-3 p-10">
  <div className="row g-0">
    <div className="col-md-3">
     <Image className="w-80 ml-20" src={img2
    }></Image>
    </div>
    <div className="col-md-9">
      <div className="card-body ml-28 mt-5">
      <h3 className="font-xl">Best full body <br></br> workout to loose fat</h3>
       <p className=" text-gray-500 w-auto mr-28 text-sm text-justify">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
 <button className="btn btn-active  btn-primary w-52 d-flex mt-1 ">
            Get Started
            <span className="ml-7">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
      </div>
    </div>
    
  </div>
</div>
    </div>
  );
};

export default LastSide;
