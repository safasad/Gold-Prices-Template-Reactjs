import React, { useEffect, useRef, useState } from "react";

const BuyForm = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [summaryValue, setSummaryValue] = useState(0);
  const quantityRef = useRef();
  const priceRef = useRef();
  const metalRef = useRef();
  const orderTypeRef = useRef();

  // Handle order summary value
  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  // set order summary
  let OrderValueSummary = quantity * price;

  // To Rerender component only if order Summary value is changed
  useEffect(() => {
  setSummaryValue(OrderValueSummary);

  },[OrderValueSummary])

  /**
   * Function to handle the reset button of the form data
   */
  const resetHandler = () => {
    quantityRef.current.value = "";
    priceRef.current.value = "";
    metalRef.current.value = "Gold";
    orderTypeRef.current.value = "Order type";
    setSummaryValue(0) ;
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <!-- Start tabs buttons --> */}
        <button
          onClick={props.buyFormHandler}
          className={`btn btn-secondary formButton ${
            props.isShownBuyForm ? "activeBtn" : "inactiveBtn"
          } me-2 fw-bold mb-3`}
        >
          BUY
        </button>
        <button
          onClick={props.sellFormHandler}
          className={`btn btn-secondary formButton  ${
            props.isShownSellForm ? "activeBtn" : "inactiveBtn"
          } fw-bold mb-3`}
        >
          SELL
        </button>

        {/* <!-- End tabs buttons --> */}

        <div className="mb-3">
          <select className="form-select formInput " ref={metalRef}>
            <option>Gold</option>
            <option>Salver</option>
            <option>Platinum</option>
          </select>
        </div>
        <div className="mb-3 d-flex justify-content-between quantityFiled w-100 ">
          <label htmlFor="quantity" className=" text-light p-2 w-75">
            Quantity
          </label>
          <div className="input-group w-25">
            <input
              onChange={quantityHandler}
              ref={quantityRef}
              id="quantity"
              className=" text-light w-50 "
              defaultValue="123"
              placeholder="0"
            />
            <span className="input-group-text">gm</span>
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-between">
          <div className="mb-3 me-2  orderType">
            <select className="form-select p-2 formInput" ref={orderTypeRef}>
              <option>Order type</option>
              <option> type 1</option>
              <option> type 2</option>
              <option> type 3</option>
            </select>
          </div>
          <div className="mb-3 d-flex justify-content-between priceLimit w-100 ">
            <label htmlFor="priceLimit" className=" text-light p-2">
              PriceLimit
            </label>
            <div className="input-group" style={{ width: "44%" }}>
              <input
                onChange={priceHandler}
                ref={priceRef}
                id="priceLimit"
                className=" text-light w-50 "
                placeholder="00.00"
              />
              <span className="input-group-text">EGP</span>
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-between OrderValueSummary ">
          <p className=" text-light">Order value summary</p>
          <p className=" text-light">{summaryValue}</p>
        </div>

        <div className="d-flex justify-content-between ">
          <button
            type="submit"
            className="btn btn-secondary  px-4"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button type="submit" className="btn btn-success px-4">
            Preview
          </button>
        </div>

        {/* </fieldset> */}
      </form>
    </>
  );
};

export default BuyForm;
