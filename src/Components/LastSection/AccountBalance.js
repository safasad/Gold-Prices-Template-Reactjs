import React from "react";
import "./lastSection.css";
import Card from "./Card";

const AccountBalance = () => {
  // this variable will be used to determine if the card has center or not
  const center = true;
  const goldBalance = [
    {
      title: "Available",
      number: "1350gm",
    },
    {
      title: "Withdrawal",
      number: "EGP 92.275.00",
    },
    {
      title: "Total",
      number: "100gm",
    },
    {
      title: "Value",
      number: "10gm",
    },
  ];
  return (
    <div className="col container-1 me-4 p-2">
      <div>
        {/* start header  */}
        <div className="d-flex justify-content-between mb-4">
          <h5>Account Balance</h5>
          <div className="icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/*  end header  */}
        {/* <!-- start cards --> */}
        <Card center={center} items={goldBalance} />
        <Card title="Cash balance" number="EGP 100.000.00" />
        <Card title="Unrealized P/L" number="EGP 950.024.00" />
        <Card title="Funds in withdrawal" number="EGP 950.024.00" />
        <Card title="Portfolio value" number="EGP 90.183" />

        {/* <!-- end cards --> */}
      </div>
    </div>
  );
};

export default AccountBalance;
