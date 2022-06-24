import React, { useState } from "react";
import BuyForm from "./BuyForm";
import "./InstantSellAndBuy.css";
import SellForm from "./SellForm";

const InstantSellAndBuy = () => {
  // start handle render of buy and sell form
  const [buyForm, setBuyForm] = useState(true);
  const [sellForm, setSellForm] = useState(false);
  const buyFormHandler = () => {

    setBuyForm(true);
    setSellForm(false);
  };
  const sellFormHandler = () => {

    setBuyForm(false);
    setSellForm(true);
  };

  
  // start handle render of buy and sell form
  return (
    <div className="col container-1 me-4 p-2">
      <div>
        <h5 className="mb-5 ">Instant buy and sell</h5>
        {/* <!-- start form --> */}
        {buyForm && (
          <BuyForm
            buyFormHandler={buyFormHandler}
            sellFormHandler={sellFormHandler}
            isShownBuyForm={buyForm}
          />
        )}
        {sellForm && (
          <SellForm
            buyFormHandler={buyFormHandler}
            sellFormHandler={sellFormHandler}
            isShownSellForm={sellForm}
          />
        )}

        {/* <!-- end form --> */}
      </div>
    </div>
  );
};

export default InstantSellAndBuy;
