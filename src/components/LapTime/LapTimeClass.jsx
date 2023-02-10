import React, { Component } from "react";

class LapTime extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lapTime } = this.props;

    return (
      <div className="lapTime">
        {lapTime.map((round, idx) => (
          <div key={idx}>{round}</div>
        ))}
      </div>
    );
  }
}

export default LapTime;
