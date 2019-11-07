import React, { Component } from "react";
import { connect } from "react-redux";
import { _getAllAuditLogs, _getAllApplications, _getAllActionTypes} from "../../actions/mainAction";
import Sidebar from "../../layout/sidebar";

class Index extends Component {
  state = {
    data: {},
    params:{
      page: "1",
      size: "10"
  }
  };


  onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  handleClick = () => {
    this.props.getAllAuditLogs(this.state.params)
  };

  pageChange= (e) => {

  }

  tableData = prop => {
    let id = 1;
    const renData = prop.length ? (
      prop.map(data => {
        return (
           <div className="card" key={data.auditLogId}>
              <div className="card-header">
                  <span>Date / Time:</span>   {data.timeStamp} <i className="fas fa-ellipsis-v fr" />
                   </div>
                   <div className="card-body">
                   <div className="row">
                   <div className="col-sm-3"> <span>Audit Log Id :</span> <p>{data.auditLogId}</p> </div>
                   <div className="col-sm-3"><span>Action Type Name:</span><p>{data.actionTypeName}</p> </div>
                   <div className="col-sm-3"><span>App Name:</span> <p>{data.appName}</p></div>
                   <div className="col-sm-3"><span>User:</span><p>{data.user}</p></div>
                   <div className="col-sm-12"><span>Description:</span><p>{data.description}</p></div>
                   <div className="col-sm-12"><span>Entity Name:</span><p>{data.entityName}</p></div>
                   <div className="col-sm-12"><span>Entity Body:</span><p className={(data.actionTypeName === "ERRORS")?"color-red ": ""}>{data.entityBody}</p></div>
                   </div>
                  </div>
              </div>
        );
      })
    ) : (
      <div>No Audit Log yet!</div>
    );
    return renData;
  };

  allApplicationsOptions = prop => {
    const renData = prop.length ? (
      prop.map(data => {
        return (
          <option key={data.appId} value={data.appId}>
          {data.appName}
        </option>
        );
      })
    ) : (
     ""
    );
    return renData;
  };

  actionType = prop => {
    const renData = prop.length ? (
      prop.map(data => {
        return (
          <option key={data.appId} value={data.id}>
          {data.name}
        </option>
        );
      })
    ) : (
     ""
    );
    return renData;
  };

  componentDidMount() {
    this.props.getAllAuditLogs(this.state.params)
    this.props.getAllApplications()
    this.props.getAllActionTypes()
  }


  render() {
    console.log(this.props.allApplications, "page")
    return (
      <div className="side-container">
        <Sidebar />
        <div className="breadcrumb">
          Audit Trails
        </div>
        <div>
        <p>Select search Parameters</p>
        </div>
          <div className="row">
          <div className="col-sm-3"> 
          Applications
          <label htmlFor="">
          <select
            // onChange={handleChange}
            // value={data.assignedUsers}
            name="assignedUsers"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {this.allApplicationsOptions(this.props.allApplications)}
          </select>
        </label></div>
          <div className="col-sm-3">Action types
          <label htmlFor="">
          <select
            // onChange={handleChange}
            // value={data.assignedUsers}
            name="assignedUsers"
            className="browser-default custom-select custom-select-md mb-3"
          >
          <option value="">none</option>
            {this.actionType(this.props.allActionTypes)}
          </select>
        </label>
          </div>
          </div>
        <div className="card-box">{this.tableData(this.props.allAuditLogs)}</div>


        <div className="docs-prevnext" >
          {(this.state.params.page==1)? " " :<button className="docs-prev btn" name="prev" onClick={this.handleChange}>prev</button>}
          {(this.props.allAuditLogs.length > 9)? <button className="docs-next btn" name="next" onClick={this.handleChange}>next</button>: ""}
</div>

         </div>
    );
  }
}
const mapStateToProps = state => ({
  allAuditLogs: state._main.allAuditLogs,
  allApplications: state._main.allApplications,
  allActionTypes: state._main.allActionTypes

});

const mapDispatchToProps = dispatch => {
  return {
    getAllAuditLogs: (params) => {
      dispatch(_getAllAuditLogs(params));
    },
    getAllApplications: () => {
      dispatch(_getAllApplications());
    },
    getAllActionTypes: (params) => {
      dispatch(_getAllActionTypes(params));
    }
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);