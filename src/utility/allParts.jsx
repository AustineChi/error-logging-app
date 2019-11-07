import React from "react";
import { Modal } from "react-bootstrap";

const AllPart = ({
  parts,
  closeAddPartsModal,
  addPartsModal,
  handleChange,
  workOrderDetails,
  getPartQuantity,
  updateWorkOrderParts
}) => {
  console.log("the spice", workOrderDetails.parts);

  const _parts = parts.length ? (
    parts.map((data, key) => {
      return (
        <div className="card ">
          <div className="card-header">
            <input
              onChange={handleChange}
              type="checkbox"
              name="partName"
              id={key}
              data-tag={"parts"}
              // checked={
              //   workOrderDetails.parts.find(data => data.partName)
              //     ? true
              //     : false
              // }
              value={data.partName}
              className="m-all"
            />
            {data.partName}
          </div>
          <div className="card-body effect4">
            <span>Available Qty: {data.quantity}</span>
            <span className="add-parts-Input-field">
              {" "}
              Input Qty
              <input
                onChange={getPartQuantity}
                type="text"
                name="quantity"
                id={data.partName}
                data-tag={"parts"}
                defaultValue={parts.quantity || 1}
              />{" "}
            </span>
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
        <button className="btn btn-white" onClick={updateWorkOrderParts}>
          <i className="fas fa-plus p5" />
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AllPart;
