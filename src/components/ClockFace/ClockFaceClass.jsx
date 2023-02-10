import React, { Component } from "react";

class ClockFace extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { amountOfTime } = this.props;

    return <div className="clockFace">{amountOfTime}</div>;
  }
}

export default ClockFace;
