import React from "react";

const LiveMetalPrices = () => {
  return (
    <>
      {/* <!-- start Live metal card --> */}

      <div className="live-prices-card container-1 mb-4 p-2">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <h5>Live metal prices</h5>
          </div>
          <div className="text-success d-flex justify-content-between fw-bold ">
            <p className="p-0 me-2">Market Is Open </p>
            <div className="bg-success isOpen "></div>
          </div>
        </div>
        <div className="mb-3 row  goldBalance ">
          <p className=" text-light col-4 ">Gold balance</p>
          <div className="col">
            <div className="d-flex   justify-content-between">
              <p className=" text-success">Buy</p>
              <p className=" text-success">
                <i className="fa fa-caret-up"></i> EGP 980.00
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-danger">Sell</p>
              <p className=" text-danger ">
                <i className="fa fa-caret-down"></i> EGP 970.00
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p className=" text-light ">Daily change</p>
              <p className=" text-light ">EGP 5.0</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className=" text-light "> Daily change %</p>
              <p className=" text-light ">% 0.1</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- start Live metal card --> */}
    </>

    // <!-- end Live metal prices -->
  );
};

export default LiveMetalPrices;
