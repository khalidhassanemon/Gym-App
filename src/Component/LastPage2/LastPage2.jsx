import React from "react";
import Image from "next/image";
import imag4 from "../../Images/image4.png";
const LastPage2 = () => {
  return (
    <div className="mt-9">
      <div className="mb-3 ml-40 mr-28">
        <div className="row g-0">
          <div className="col-md-6">
            <Image className="order-first sm:order-last" src={imag4}></Image>
          </div>
          <div className="col-md-6">
            <div className=" text-center">
              <div className="mt-16">
                <h1 className="font-serif font-thin">How it works?</h1>
                <span>
                  <p style={{ boxShadow: "0px 5px 20px #F4AAB9",padding:'10px' }}>
                    The Body becomes sick beacause of rarely exercise
                  </p>
                  <p>
                    Don't give up in order to get a healthy and ideal body
                  </p>
                  <p className="cont-40">
                    Become addicted to the exercise that is given
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage2;
