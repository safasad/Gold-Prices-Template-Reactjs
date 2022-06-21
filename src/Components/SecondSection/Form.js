import React from "react";

const Form = () => {
  return (
    <>
      <form>
        {/* <!-- Start form buttons --> */}
        <button className="btn btn-secondary formButton buyBtn fw-bold mb-3">
          BUY
        </button>
        <button className="btn btn-secondary formButton fw-bold mb-3" disabled>
          SELL
        </button>
        {/* <!-- End form buttons --> */}

        <div className="mb-3">
          <select className="form-select formInput">
            <option>Gold</option>
          </select>
        </div>
        <div className="mb-3 d-flex justify-content-between quantityFiled ">
          <label for="quantity" className=" text-light p-2">
            Quantity
          </label>
          <div className="d-inline-block position-relative w-25">
            <p className="static-value text-light">gm</p>
            <input
              id="quantity"
              className=" text-light w-100"
              style={{
                padding: "8px",
                color: "white",
                backgroundColor: "black",
                border: "none",
              }}
              value="123"
            />
          </div>
        </div>

        <div className="mb-3 d-flex justify-content-between">
          <div className="mb-3 me-2  orderType">
            <select className="form-select p-2 formInput">
              <option>Order type</option>
            </select>
          </div>

          <div className="mb-3 d-flex justify-content-between priceLimit formInput priceLimitInput">
            <label for="priceLimit" className=" text-light p-2 ">
              Price limit
            </label>
            <div className="d-inline-block position-relative w-50">
              <p className="static-value text-light">EGP</p>
              <input
                id="priceLimit"
                className=" text-light w-100"
                style={{
                  padding: "8px",
                  color: "white",
                  backgroundColor: "black",
                  border: "none",
                }}
                value="00.00"
              />
            </div>
          </div>
        </div>
        <div className="mb-5 d-flex justify-content-between OrderValueSummary ">
          <p className=" text-light">Order value summary</p>
          <p className=" text-light">00000000</p>
        </div>

        <div className="d-flex justify-content-between ">
          <button type="submit" className="btn btn-secondary  px-4">
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

export default Form;
