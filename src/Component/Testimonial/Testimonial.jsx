import React from "react";
import { CgQuote } from "react-icons/cg";
import { FaImages } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-6">
          <div className="card-body">

          <div className="d-flex justify-around mb-10 mt-10 ">
            <div>
          <div className="w-96 border border-slate-800 rounded bg-white shadow-lg shadow-blue-500/50 p-4">
            <p className="text-justify d-flex ">
              <div>
                <CgQuote></CgQuote>
              </div>
              It's great to be able to work out from home and be helped by the
              gymbaran. My day feels fresher when I regularly participate in
              this fun sport. Good luck to the coaches.
            </p>
            <div className="ml-4 d-flex">
              <div className="w-14 h-12 mr-4 text-3xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-2">
                <FaImages></FaImages>
              </div>
              <div>
                <h6>Suketi Mantapo</h6>
                <p>Designer Graphic</p>
              </div>
            </div>
          </div>
          </div>

          </div>

          </div>
          </div>
          <div className="col-md-6">
           
          <div className="card-body">

<div className="d-flex justify-around mb-10 mt-10 ">
  <div>
<div className="w-96 border border-slate-800 rounded bg-white shadow-lg shadow-blue-500/50 p-4">
  <p className="text-justify d-flex ">
    <div>
      <CgQuote></CgQuote>
    </div>
    exercise used to be a boring thing for me, but after following the gymbaran I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.
  </p>
  <div className="ml-4 d-flex">
    <div className="w-14 h-12 mr-4 text-3xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-2">
      <FaImages></FaImages>
    </div>
    <div>
      <h6>Ada Apose</h6>
      <p>Designer Graphic</p>
    </div>
  </div>
</div>
</div>

</div>

</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
