import React from "react";

const Card = (props) => {
  return (
    <>
      {props.center ? (
        <>
          <div className="mb-3 row  goldBalance ">
            {" "}
            <p className=" text-light col-4 ">Gold balance</p>
            <div className="col">
              {props.items.map((item) => (
                <div className="d-flex justify-content-between">
                  <p>{item.title}</p>
                  <p className={`text-light ${item.class}`}>
                    {item.number}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="mb-3 d-flex justify-content-between priceLimit formInput ">
          <p className=" text-light ">{props.title && props.title}</p>
          {/* <!-- Will be a dynamic value come from server --> */}
          <p className={`text-light ${props.class ? props.class : ""}`}>
            {props.number && props.number}
          </p>
        </div>
      )}
    </>
  );
};

export default Card;
