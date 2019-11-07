import React from "react";

const WorkOrderTab = ({ filteredWorkOrders }) => {
  const subAssets = filteredWorkOrders.length ? (
    filteredWorkOrders.map(data => {
      return (
        <div className="card">
          <div className="card-header">{data.title}</div>
          <div className="card-body">
            <span>last updated: {data.updated} </span>
            <span className="fr">{data.status} </span>
          </div>
        </div>
      );
    })
  ) : (
    <div> No Work Order associated to this Asset!</div>
  );
  return <div className="card-box">{subAssets}</div>;
};

export default WorkOrderTab;
