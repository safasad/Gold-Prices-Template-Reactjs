import React from 'react'

const SellForm = (props) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* <!-- Start form buttons --> */}
        <button
          onClick={props.buyFormHandler}
          className="btn btn-secondary formButton buyBtn me-2 fw-bold mb-3"
        >
          BUY
        </button>
        <button
          onClick={props.sellFormHandler}
          className="btn btn-secondary formButton fw-bold mb-3"
        >
          SELL
        </button>

        {/* <!-- End form buttons --> */}

      </form>
      <h4 className='text-light text-center'>SellForm</h4>
    </>
  );
}

export default SellForm