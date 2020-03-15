import React, { Component } from "react";
import { connect } from "react-redux";
import {
  _getAllApplications,
  _addNewApp,
  _editApp,
  _deleteApp,
  _updateToast
} from "../../actions/mainAction";
import Sidebar from "../../layout/sidebar";
import CreateApp from "./createApp";
import Toast from "../../utility/toast";

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

  selectItem = data => {
    this.setState({ data, edit: true, showModal: true });
  };
  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  handleAdd = () => {
    this.props.addNewApp(this.state.data);
  };
  handleUpdate = () => {
    this.props.editApp(this.state.data);
  };

  delete = id => {
    let result = window.confirm("Want to delete?");
    if (result) {
      this.props.deleteApp(id);
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
            <td>{data.appId}</td>
            <td>{data.adminEmail}</td>
            <td>{data.appName}</td>
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
                  onClick={() => this.delete(data.appId)}
                />
              </span>
            </td>
          </tr>
        );
      })
    ) : (
      <tr> <td> No Inventory yet!</td></tr>
    );
    return renData;
  };

  componentDidMount() {
    this.props.getAllApplications();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toast.visible !== this.props.toast.visible) {
      this.showToast();
      this.handleClose();
      this.props.getAllApplications();
    }
  }

  render() {
    return (
      <div className="side-container">
        <Sidebar />
        <CreateApp
          handleChange={this.onChange}
          handleAdd={this.handleAdd}
          handleUpdate={this.handleUpdate}
          data={this.state.data}
          response={""}
          edit={this.state.edit}
          showModal={this.state.showModal}
          handleClose={this.handleClose}
        />
        <div className="breadcrumb">
          Application Registration
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
                <th scope="col" style={{ width: "15%" }}>
                  Admin Email
                </th>
                <th scope="col">Application Name</th>
                <th scope="col" style={{ width: "65%" }}>
                  Description
                </th>
                <th scope="col" style={{ width: "8%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>{this.tableData(this.props.allApplications)}</tbody>
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
  allApplications: state._main.allApplications,
  toast: state._main.toast
});

const mapDispatchToProps = dispatch => {
  return {
    getAllApplications: () => {
      dispatch(_getAllApplications());
    },
    updateToast: params => {
      dispatch(_updateToast(params));
    },
    addNewApp: params => {
      dispatch(_addNewApp(params));
    },
    editApp: params => {
      dispatch(_editApp(params));
    },
    deleteApp: params => {
      dispatch(_deleteApp(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
