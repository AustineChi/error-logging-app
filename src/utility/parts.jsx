import React from "react";

const Parts = ({ parts }) => {
  console.log("the wahala", parts);
  let __parts = parts || [];
  const _part = __parts.length ? (
    __parts.map((data, i) => {
      return (
        <div className="card" key={i}>
          <div className="card-body">{data}</div>
        </div>
      );
    })
  ) : (
    <div> No parts assigned to this Asset!</div>
  );
  return <div className="card-box">{_part}</div>;
};

export default Parts;
