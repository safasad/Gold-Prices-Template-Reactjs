import React from "react";

const LiveMetalPrices = () => {
  return (
    <>
    
      {/* <!-- start Live metal card --> */}

      <div class="live-prices-card container-1 mb-4 p-2">
        <div class="d-flex justify-content-between mb-4">
          <div>
            <h5>Live metal prices</h5>
          </div>
          <div class="text-success d-flex justify-content-between fw-bold ">
            <p class="p-0 me-2">Market Is Open </p>
            <div class="bg-success isOpen "></div>
          </div>
        </div>
        <div class="mb-3 row  goldBalance ">
          <p class=" text-light col-4 ">Gold balance</p>
          <div class="col">
            <div class="d-flex   justify-content-between">
              <p class=" text-success">Buy</p>
              <p class=" text-success">
                <i class="fa fa-caret-up"></i> EGP 980.00
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="text-danger">Sell</p>
              <p class=" text-danger ">
                <i class="fa fa-caret-down"></i> EGP 970.00
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p class=" text-light ">Daily change</p>
              <p class=" text-light ">EGP 5.0</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class=" text-light "> Daily change %</p>
              <p class=" text-light ">% 0.1</p>
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
