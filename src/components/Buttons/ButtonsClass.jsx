import React, { Component } from "react";

import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";

import useSound from "use-sound";
import boop from "../../sound/boop.mp3";
import drums from "../../sound/909-drums.mp3";
import pfff from "../../sound/pfff.mp3";
import plunger from "../../sound/plunger.mp3";

import { theme } from "../../helpers/createTheme";

class Buttons extends Component {
  constructor() {
    super();
  }

  render() {
    const { handleClickStart } = this.props;
    const { handleClickContinue } = this.props;
    const { handleClickStop } = this.props;
    const { handleClickReset } = this.props;
    const { isStarting } = this.props;
    const { isCounting } = this.props;
    const { isStoping } = this.props;
    const { isReseting } = this.props;

    сonst[startSound] = useSound(boop);
    const [stopSound] = useSound(drums);
    const [continueSound] = useSound(pfff);
    const [resetSound] = useSound(plunger);

    return (
      <div className="buttons">
        <ThemeProvider theme={theme}>
          {!isStarting ? (
            <Button
              variant="contained"
              color="green"
              className="btn"
              onClick={() => {
                startSound();
                handleClickStart();
              }}
              disabled={isCounting}
            >
              Start
            </Button>
          ) : (
            <Button
              variant="contained"
              color="violet"
              className="btn"
              onClick={() => {
                continueSound();
                handleClickContinue();
              }}
              disabled={isCounting}
            >
              Continue
            </Button>
          )}
          <Button
            variant="contained"
            color="red"
            className="btn"
            onClick={() => {
              stopSound();
              handleClickStop();
            }}
            disabled={isStoping}
          >
            Stop
          </Button>
          <Button
            variant="contained"
            color="orange"
            className="btn"
            onClick={() => {
              resetSound();
              handleClickReset();
            }}
            disabled={isReseting}
          >
            Reset
          </Button>
        </ThemeProvider>
      </div>
    );
  }
}

export default Buttons;
