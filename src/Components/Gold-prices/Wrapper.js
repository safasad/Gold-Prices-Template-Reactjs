import React from "react";
import LiveMetalPrices from "./LiveMetalPrices/LiveMetalPrices";
import LineChart from "./Chart/LineChart";

const GoldPricesSectionWrapper = () => {
  return (
    <div className="col  me-4  ">
      <LiveMetalPrices />
      <LineChart />
    </div>
  );
};

export default GoldPricesSectionWrapper;
