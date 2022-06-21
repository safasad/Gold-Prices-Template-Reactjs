import React from "react";

const Form = () => {
  return (
    <>
      <form>
        {/* <!-- Start form buttons --> */}
        <button class="btn btn-secondary formButton buyBtn fw-bold mb-3">
          BUY
        </button>
        <button class="btn btn-secondary formButton fw-bold mb-3" disabled>
          SELL
        </button>
        {/* <!-- End form buttons --> */}

        <div class="mb-3">
          <select class="form-select formInput">
            <option>Gold</option>
          </select>
        </div>
        <div class="mb-3 d-flex justify-content-between quantityFiled ">
          <p class=" text-light">Quantity</p>
          <div class="d-inline-block position-relative w-25">
            <label for="quantity" class="static-value text-light">
              gm
            </label>
            <input
              id="quantity"
              class=" text-light w-100"
              style={{padding:'8px',color:'white',backgroundColor:'black' ,border:'none'}}
              value="123"
            />
          </div>
        </div>

        <div class="mb-3 d-flex justify-content-between">
          <div class="mb-3 me-2  orderType">
            <select class="form-select p-2 formInput">
              <option>Order type</option>
            </select>
          </div>

          <div class="mb-3 d-flex justify-content-between priceLimit formInput priceLimitInput">
            <p class=" text-light ">Price limit</p>
            <div class="d-inline-block position-relative w-50">
              <label
                for="priceLimit"
                class="static-value text-light"
                style={{top:'10px'}}
              >
                EGP
              </label>
              <input
                id="priceLimit"
                class=" text-light w-100"
                style={{padding:'8px',color:'white',backgroundColor:'black' ,border:'none'}}
                value="00.00"
              />
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex justify-content-between OrderValueSummary ">
          <p class=" text-light">Order value summary</p>
          <p class=" text-light">00000000</p>
        </div>

        <div class="d-flex justify-content-between ">
          <button type="submit" class="btn btn-secondary  px-4">
            Reset
          </button>
          <button type="submit" class="btn btn-success px-4">
            Preview
          </button>
        </div>

        {/* </fieldset> */}
      </form>
    </>
  );
};

export default Form;
