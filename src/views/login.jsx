import React, { Component } from 'react';
import banner from "../images/banner.jpg";
import { connect } from "react-redux";
import { _getLogin, _isLogin } from "../actions/mainAction";
import { Redirect } from "react-router-dom"

class Login extends Component {
  state = { 
    data: {
      username: "",
      password: ""
    },
    loading: "",
    loginMessage: ""

   }

   onChange = e => {
    let data = this.state.data;
    data[[e.target.name]] = e.target.value;
    this.setState({
      data: data
    });
  };

  handleClick = () => {
    this.setState({loading: "loading...",loginMessage: ""})
    this.props.getLogin(this.state.data)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({loading: ""})
    console.log(nextProps, "props") 
    if (nextProps.loginStatus.success == false) {
      this.setState({ loginMessage: "Incorrect Username or Password" });
    }
    if (nextProps.loginStatus.token) {
      this.props.isLogin(true)
      sessionStorage.setItem('login', nextProps)
    }
  }

  render() { 
    if(this.props.loginState){
      return <Redirect to={"/user"}/>
    }   
    return (  
    <div className="body">
    <div className="wik2">SIgn in</div>
    <div className="banner-img">
      <img src={banner} alt="Banner" />
    </div>
    <div className="container p-5">
      <div className="row row border shadow rounded justify-content-center p-2">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
          <form className="form-horizontal">
            <br />
            <fieldset>
              <div className="form-group">
                <label for="email" className="cols-sm-2 control-label">
                  Your Email
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-envelope fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Enter your Username"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="cols-sm-2 control-label">
                  Your Password
                </label>
                <div className="cols-sm-10">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-key fa" aria-hidden="true"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Please input your password"
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
              </div>
             <span style={{"color":"#333"}}>{this.state.loading}</span>
             <span style={{"color":"red"}}>{this.state.loginMessage}</span>
              <div className="form-group ">
                <button
                  type="button"
                  className="btn btn-info btn-lg btn-block login-button"
                  onClick={this.handleClick}
                >
                  SIgn in
                </button>
              </div>
            <label className="control-label" for="login-form-password">
             <a href="/user/forgot" tabindex="5">Forgot password?</a>
            </label>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div> );
  }
}
 
const mapStateToProps = state => ({
  login: state._main.login,
  loginStatus: state._main.loginStatus,
  loginState: state._main.loginState

});

const mapDispatchToProps = dispatch => {
return {
  getLogin: data => {
    dispatch(_getLogin(data));
  },
  isLogin: data => {
    dispatch(_isLogin(data));
  }
};
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Login);