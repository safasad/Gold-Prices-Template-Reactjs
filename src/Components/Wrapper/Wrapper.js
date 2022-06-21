import React from 'react'
import FirstSectionWrapper from './../FirstSection/Wrapper';
import InstantSellAndBuy from './../SecondSection/InstantSellAndBuy';
import AccountBalance from './../LastSection/AccountBalance';

const Wrapper = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col">
          <FirstSectionWrapper/>
        </div>
        <div className="col">
          <InstantSellAndBuy/>
        </div>
        <div className="col">
          <AccountBalance/>
        </div>
      </div>
    </div>
  );
}

export default Wrapper