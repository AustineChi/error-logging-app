import React from "react";
import { Modal } from "react-bootstrap";

const CreateNew = ({
  handleChange,
  handleAdd,
  handleUpdate,
  data,
  response,
  showModal,
  edit,
  handleClose
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{(edit === true)? "Update": "Create"}  AuditTrail action type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span style={{ color: "red", fontSize: "13px" }}>
          {response.message}
        </span>
        <label htmlFor="">
        name:
        <input
          onChange={handleChange}
          value={data.name}
          className="inputStyle2"
          type="text"
          name="name"
          placeholder="name:"
        />
      </label>
         <label htmlFor="">
          Description:
          <textarea
            onChange={handleChange}
            value={data.description}
            name="description"
            className="wik1"
            placeholder="Enter description"
          />
        </label>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-dark fullwidth"
          onClick={(edit === true)? handleUpdate:handleAdd}
        >
         { (edit === true)?"Update": "Add" } 
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateNew;