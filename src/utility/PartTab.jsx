import React from "react";

const PartTab = ({ parts }) => {
  const _parts = parts.length ? (
    parts.map(data => {
      return (
        <div className="card">
          <div className="card-header">Part Title</div>
          <div className="card-body">
            <span>Quantity: </span>
            <span>Cost: </span>
          </div>
        </div>
      );
    })
  ) : (
    <div>No Part available!</div>
  );
  return <div> {_parts} </div>;
};

export default PartTab;
