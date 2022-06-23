import React from "react";
import GoldPricesSectionWrapper from "./../Gold-prices/Wrapper";
import InstantSellAndBuy from "./../Instant-buy-sell/InstantSellAndBuy";
import AccountBalance from "./../AccountBalance/AccountBalance";

const Wrapper = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col">
          <GoldPricesSectionWrapper />
        </div>
        <div className="col">
          <InstantSellAndBuy />
        </div>
        <div className="col">
          <AccountBalance />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
