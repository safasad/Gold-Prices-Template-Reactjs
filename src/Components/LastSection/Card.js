import React from "react";

const Card = (props) => {
  return (
    <>
      {props.center ? (
        <>
          <div class="mb-3 row  goldBalance ">
            {" "}
            <p class=" text-light col-4 ">Gold balance</p>
            <div class="col">
              {props.items.map(item => (
                <div class="d-flex justify-content-between">
                  <p>{item.title}</p>
                  <p class=" text-light fw-bold">{item.number}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div class="mb-3 d-flex justify-content-between priceLimit formInput ">
          <p class=" text-light ">{props.title && props.title}</p>
          {/* <!-- Will be a dynamic value come from server --> */}
          <p class=" text-light fw-bold ">{props.number && props.number}</p>
        </div>
      )}
    </>
  );
};

export default Card;
