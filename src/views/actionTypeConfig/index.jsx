import React, { Component } from "react";
import { connect } from "react-redux";
import {
  _getAllActionTypes,
  _updateToast,
  _addActionType,
  _editActionType,
  _deleteActionType
} from "../../actions/mainAction";
import Sidebar from "../../layout/sidebar";
import Toast from "../../utility/toast";
import CreateNew from "./createNew";

class Index extends Component {
  state = {
    data: {},
    showModal: false,
    toast: {
      visible: false,
      level: "success",
      message: null
    },
    edit: false
  };

  handleClose = () => {
    this.setState({ showModal: false, data: {}, edit: false });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };
  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  selectItem = data => {
    this.setState({ data, edit: true, showModal: true });
  };

  handleAdd = () => {
    this.props.addActionType(this.state.data);
  };

  handleUpdate = () => {
    this.props.editActionType(this.state.data);
  };

  delete = id => {
    let result = window.confirm("Want to delete?");
    if (result) {
      this.props.deleteActionType(id);
    }
  };

  _callToast = () => {
    let toast = {
      visible: false,
      level: "success",
      message: null
    };
    this.setState({
      toast: { ...this.state.toast, visible: false, message: null }
    });
    this.props.updateToast(toast);
  };

  showToast = () => {
    this.setState(
      {
        toast: this.props.toast
      },
      () => {
        setTimeout(() => this._callToast(), 4000);
      }
    );
  };

  tableData = prop => {
    const renData = prop.length ? (
      prop.map(data => {
        return (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>
              <span>
                <i
                  className="fas fa-edit "
                  onClick={() => this.selectItem(data)}
                />
              </span>
              <span>
                <i
                  className="fas fa-trash "
                  onClick={() => this.delete(data.id)}
                />
              </span>
            </td>
          </tr>
        );
      })
    ) : (
      <div>No Inventory yet!</div>
    );
    return renData;
  };

  componentDidMount() {
    this.props.getAllActionTypes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toast.visible !== this.props.toast.visible) {
      this.showToast();
      this.handleClose();
      this.props.getAllActionTypes();
    }
  }

  render() {
    return (
      <div className="side-container">
        <Sidebar />
        <CreateNew
          handleChange={this.onChange}
          handleAdd={this.handleAdd}
          handleUpdate={this.handleUpdate}
          data={this.state.data}
          response={""}
          showModal={this.state.showModal}
          edit={this.state.edit}
          handleClose={this.handleClose}
        />
        <div className="breadcrumb">
          AuditTrail action type
          <button
            type="button"
            className="btn btn-add float-right fs13 "
            onClick={this.handleShow}
          >
            <i className="fas fa-plus p5" />
            Add
          </button>
        </div>

        <div className="overflow-x">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" style={{ width: "5%" }}>
                  ID
                </th>
                <th scope="col">Name</th>
                <th scope="col" style={{ width: "70%" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "7%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{this.tableData(this.props.allActionTypes)}</tbody>
          </table>
        </div>

        <Toast
          level={this.state.toast.level}
          message={this.state.toast.message}
          visible={this.state.toast.visible}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  allActionTypes: state._main.allActionTypes,
  toast: state._main.toast
});

const mapDispatchToProps = dispatch => {
  return {
    getAllActionTypes: params => {
      dispatch(_getAllActionTypes(params));
    },
    updateToast: params => {
      dispatch(_updateToast(params));
    },
    addActionType: params => {
      dispatch(_addActionType(params));
    },
    editActionType: params => {
      dispatch(_editActionType(params));
    },
    deleteActionType: params => {
      dispatch(_deleteActionType(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
