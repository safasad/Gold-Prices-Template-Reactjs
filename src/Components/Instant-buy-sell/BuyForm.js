import React, { useRef } from "react";

const BuyForm = (props) => {
  const quantityRef = useRef();
  const priceRef = useRef();
  const metalRef = useRef();
  const orderTypeRef = useRef();

  /**
   * Function to handle the reset button of the form data
   */
  const resetHandler = () => {
    quantityRef.current.value = "";
    priceRef.current.value = "";
    metalRef.current.value = "Gold";
    orderTypeRef.current.value = "Order type";
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
        <div className="mb-3 d-flex justify-content-between quantityFiled ">
          <label for="quantity" className=" text-light p-2">
            Quantity
          </label>
          <div className="d-inline-block position-relative w-25">
            <p className="static-value text-light">gm</p>
            <input
              maxLength={7}
              ref={quantityRef}
              id="quantity"
              className=" text-light w-100"
              style={{
                padding: "8px",
                color: "white",
                backgroundColor: "black",
                border: "none",
              }}
              defaultValue="123"
              placeholder="0"
            />
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

          <div className="mb-3 d-flex justify-content-between priceLimit formInput priceLimitInput">
            <label htmlFor="priceLimit" className=" text-light p-2 ">
              Price limit
            </label>
            <div className="d-inline-block position-relative w-50">
              <p className="static-value text-light">EGP</p>
              <input
                maxLength={5}
                placeholder="0.00"
                ref={priceRef}
                id="priceLimit"
                className=" text-light w-100"
                style={{
                  padding: "8px",
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                }}
                defaultValue="00.00"
              />
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-between OrderValueSummary ">
          <p className=" text-light">Order value summary</p>
          <p className=" text-light">00000000</p>
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
