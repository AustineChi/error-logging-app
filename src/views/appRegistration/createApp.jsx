import React from "react";
import { Modal } from "react-bootstrap";

const CreateApp = ({
  handleChange,
  handleAdd,
  handleUpdate,
  edit,
  data,
  response,
  showModal,
  handleClose
}) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{(edit === true)? "Update": "Register"} App</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span style={{ color: "red", fontSize: "13px" }}>
          {response.message}
        </span>
        <label htmlFor="">
        Admin Email:
        <input
          onChange={handleChange}
          value={data.adminEmail}
          className="inputStyle2"
          type="email"
          name="adminEmail"
          placeholder="adminEmail:"
        />
      </label>
         <label htmlFor="">
         Application Name:
          <input
          onChange={handleChange}
          value={data.appName}
          className="inputStyle2"
          type="text"
          name="appName"
          placeholder="appName:"
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
           { (edit === true)?"Update": "Create" } 
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateApp;
