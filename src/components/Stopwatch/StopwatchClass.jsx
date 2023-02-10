import React, { Component } from "react";

import { tick } from "../../helpers/tick";
import { tickMSMS } from "../../helpers/ticksMSMS";

import Buttons from "../Buttons/ButtonsClass";
import LapTime from "../LapTime/LapTimeClass";
import ClockFace from "../ClockFace/ClockFaceClass";

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountOfTime: this.props.time,
      lapTime: [],
      isCounting: false,
      isStarting: false,
      isStoping: true,
      isReseting: true,
    };

    this.timerID = null;
  }

  // componentDidMount() {}

  componentDidUpdate() {
    if (this.state.isCounting === true) {
      const arrTime = this.state.amountOfTime.split(":").map((el) => +el);

      if (this.props.time === "00:00:00") {
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () =>
            this.state.isCounting &&
            this.setState({ amountOfTime: tick(arrTime) }),
          1000
        );
      } else {
        clearInterval(this.timerID);
        this.timerID = setInterval(
          () =>
            this.isCounting &&
            this.setState({ amountOfTime: tickMSMS(arrTime) }),
          1
        );
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const handleClickStart = () => {
      this.setState({
        isStarting: true,
        isCounting: true,
        isStoping: false,
        isReseting: false,
      });
    };

    const handleClickContinue = () => {
      this.setState({ isCounting: true, isStoping: false });
    };

    const handleClickStop = () => {
      const newArr = [...this.state.lapTime];
      newArr.push(this.state.amountOfTime);
      this.setState({
        isCounting: false,
        lapTime: newArr,
        isStoping: true,
        isReseting: false,
      });
      clearInterval(this.timerID);
    };

    const handleClickReset = () => {
      this.setState((state, props) => ({
        amountOfTime: props.time,
        lapTime: [],
        isCounting: false,
        isStarting: false,
        isStoping: true,
        isReseting: true,
      }));
    };

    return (
      <div className="timer">
        <ClockFace amountOfTime={this.state.amountOfTime} />
        <Buttons
          handleClickStart={handleClickStart}
          handleClickContinue={handleClickContinue}
          handleClickStop={handleClickStop}
          handleClickReset={handleClickReset}
          isStarting={this.state.isStarting}
          isCounting={this.state.isCounting}
          isStoping={this.state.isStoping}
          isReseting={this.state.isReseting}
        />
        <LapTime lapTime={this.state.lapTime} />
      </div>
    );
  }
}

export default Stopwatch;
