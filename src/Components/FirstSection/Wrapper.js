import React from "react";
import ChartGraph from "./ChartPart/Chart";
import LiveMetalPrices from "./LiveMetalPricesPart/LiveMetalPrices";

const FirstSectionWrapper = () => {
  return (
    <div className="col  me-4  ">
      <LiveMetalPrices />
      <ChartGraph />
    </div>
  );
};

export default FirstSectionWrapper;
