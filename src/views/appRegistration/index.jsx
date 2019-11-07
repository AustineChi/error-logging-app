import React, { Component } from "react";
import { connect } from "react-redux";
import { _getAllApplications } from "../../actions/mainAction";
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
    this.setState({ showModal: false, data: {}, edit: false  });
  };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  selectItem = (data) => {
    this.setState({data, edit: true,  showModal: true})
  }
  delete = (id)=> {

  }
  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  handleAdd = () => {
    this.props.addLocation(this.state.data);
  };
  handleUpdate = () => {
    this.props.addLocation(this.state.data);
  };

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
            <td>{data.appId}</td>
            <td>{data.adminEmail}</td>
            <td>{data.appName}</td>
            <td>{data.description}</td>
            <td><span><i className="fas fa-edit " onClick={() => this.selectItem(data)} /></span><span><i className="fas fa-trash " onClick={() => this.delete(data.id)} /></span></td>
          </tr>
        );
      })
    ) : (
      <div>No Inventory yet!</div>
    );
    return renData;
  };

  componentDidMount() {
      this.props.getAllApplications()
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
    const appList = this.props.allApplications.length ? (
      this.props.allApplications.map(data => {
        return (
          <div className="card" key={data.name}>
            <div className="card-header">
              {data.name} <i className="fas fa-ellipsis-v fr" />
            </div>
            <div className="card-body">
              <i className="fas fa-map-marker-alt p5" /> {data.address}
            </div>
          </div>
        );
      })
    ) : (
      <div>No Application yet!</div>
    );
 console.log(this.props.allApplications, "all app")
    return (
      <div className="side-container">
        <Sidebar />
        <CreateApp
          handleChange={this.onChange}
          handleAdd={this.handleClick}
          handleUpdate = {this.handleUpdate}
          data={this.state.data}
          response={""}
          edit = {this.state.edit}
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
                <th scope="col" style={{width:'5%'}}>ID</th>
                <th scope="col" style={{width:'15%'}}>Admin Email</th>
                <th scope="col">Application Name</th>
                <th scope="col"  style={{width:'65%'}}>Description</th>
                <th scope="col" style={{width:'8%'}}>Actions</th>
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
    allApplications: state._main.allApplications
});

const mapDispatchToProps = dispatch => {
  return {
    getAllApplications: () => {
        dispatch(_getAllApplications());
      }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);