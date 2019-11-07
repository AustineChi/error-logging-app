import React, { Component } from "react";

class Toast extends Component {
  getIcon() {
    switch (this.props.level) {
      case "warning":
        return "http://svgshare.com/i/19x.svg";
      case "danger":
        return "http://svgshare.com/i/19E.svg";
      case "success":
        return "http://svgshare.com/i/19y.svg";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.visible !== nextProps.visible) {
      this.setState({
        visible: nextProps.visible
      });
    }
  }

  render() {
    console.log("props", this.props);
    let classes = `notif ${this.props.level} `;
    classes += this.props.visible ? "visible" : "not-visible";
    return (
      <div className={classes}>
        <figure>
          <img src={this.getIcon()} />
        </figure>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default Toast;
