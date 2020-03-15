import React, { Component } from "react";

class Toast extends Component {

  state = { 
    visible: '',


   }

  getIcon() {
    switch (this.props.level) {
      case "warning":
        return "http://svgshare.com/i/19x.svg";
      case "danger":
        return "http://svgshare.com/i/19E.svg";
      case "success":
        return "http://svgshare.com/i/19y.svg";
      default: 
      return ''
    }

  }



  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.visible !== prevState.visible) {
        return { visible: nextProps.visible };
    }
    else return null; 
}
 

  render() {
    let classes = `notif ${this.props.level} `;
    classes += this.props.visible ? "visible" : "not-visible";
    return (
      <div className={classes}>
        <figure>
          <img src={this.getIcon()}  alt=""/>
        </figure>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Toast;
