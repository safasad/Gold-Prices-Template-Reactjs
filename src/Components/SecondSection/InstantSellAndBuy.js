import React from "react";
import Form from "./Form";
import "./secondSection.css";

const InstantSellAndBuy = () => {
  return (
    <div class="col container-1 me-4 p-2">
      <div>
        <h5 class="mb-5 ">Instant buy and sell</h5>
        {/* <!-- start form --> */}
        <Form />
        {/* <!-- end form --> */}
      </div>
    </div>
  );
};

export default InstantSellAndBuy;
