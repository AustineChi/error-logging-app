import React from "react";
import { Modal } from "react-bootstrap";

const AddPartsToAssets = ({
  handleChange,
  updateAsset,
  parts,
  closeAddPartsModal,
  addPartsModal,
  assetDetails
}) => {
  let assetDetailsParts = assetDetails.parts || [];
  const _parts = parts.length ? (
    parts.map((data, key) => {
      return (
        <div className="card">
          <div className="card-body">
            <input
              onChange={handleChange}
              type="checkbox"
              name="parts"
              checked={assetDetailsParts.indexOf(data.partName) !== -1}
              value={data.partName}
              className="m-all"
            />
            {data.partName}
          </div>
        </div>
      );
    })
  ) : (
    <div>Loading....</div>
  );
  return (
    <Modal show={addPartsModal} onHide={closeAddPartsModal}>
      <Modal.Header closeButton>
        <Modal.Title>Select Parts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card-box"> {_parts} </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-white" onClick={updateAsset}>
          <i className="fas fa-plus p5" />
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPartsToAssets;
