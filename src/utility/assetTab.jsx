import React from "react";

const AssetTab = ({ filteredAssets }) => {
  const subAssets = filteredAssets.length ? (
    filteredAssets.map(data => {
      return (
        <div className="card">
          <div className="card-header">
            {data.assetName} <span className="fr">{data.active}</span>
          </div>
          <div className="card-body">{data.description}</div>
        </div>
      );
    })
  ) : (
    <div>No Subasset assigned to this Asset!</div>
  );
  return <div className="card-box">{subAssets}</div>;
};

export default AssetTab;
