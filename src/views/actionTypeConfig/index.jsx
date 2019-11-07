import React, { Component } from "react";
import { connect } from "react-redux";
import { _getAllActionTypes } from "../../actions/mainAction";
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
    this.setState({ showModal: false, data: {}, edit: false  });
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

  selectItem = (data) => {
    this.setState({data, edit: true,  showModal: true})
  }

  handleAdd = () => {
    this.props.addLocation(this.state.data);
  };

  handleUpdate = () => {
    this.props.addLocation(this.state.data);
  };

  delete = (id)=> {

  }

  showToast = data => {
    this.setState(
      {
        toast: {
          ...this.state.toast,
          visible: data.success ? true : false,
          message: data.message,
          level: data.success === true ? "success" : "danger"
        }
      },
      () => {
        setTimeout(
          () =>
            this.setState({ toast: { ...this.state.toast, visible: false } }),
          4000
        );
      }
    );
  };

  tableData = prop => {
    let id = 1;
    const renData = prop.length ? (
      prop.map(data => {
        return (
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td><span><i className="fas fa-edit " onClick={() => this.selectItem(data)} /></span><span><i className="fas fa-trash " onClick={() => this.delete(data.id)} /></span></td>

          </tr>
        );
      })
    ) : (
      <div>No Inventory yet!</div>
    );
    return renData;
  }

  componentDidMount() {
    this.props.getAllActionTypes()
  }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.response.data) {
//       if (this.props.locationsData.indexOf(nextProps.response.data) === -1)
//         this.props.locationsData.unshift(nextProps.response.data);
//     }
//     if (nextProps.response.success === true) {
//       this.setState({ showModal: false, data: {} });
//       setTimeout(() => this.showToast(nextProps.response), 2000);
//     }
//   }

  render() {

    console.log(this.props.allActionTypes, "data")
    return (
      <div className="side-container">
        <Sidebar />
        <CreateNew
          handleChange={this.onChange}
          handleAdd={this.handleAdd}
          handleUpdate = {this.handleUpdate}
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
                <th scope="col"  style={{width:'5%'}} >ID</th>
                <th scope="col">Name</th>
                <th scope="col" style={{width:'70%'}}>Description</th>
                <th scope="col" style={{width:'7%'}}>Actions</th>

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
  allActionTypes: state._main.allActionTypes

});

const mapDispatchToProps = dispatch => {
  return {
    getAllActionTypes: (params) => {
      dispatch(_getAllActionTypes(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);