import React, {Component} from 'react';
import DialogButton from 'DialogButton';
import DisplayTime from 'DisplayTime';

class Dialog extends Component {
  state = {
    timeOpened: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({timeOpened: this.state.timeOpened + 1})
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({timeOpened: 0});
    clearInterval(this.interval);
  }

  render() {
    const {closeDialog} = this.props;
    const {timeOpened} = this.state;

    return (
      <div className="dialog">
        <DisplayTime time={timeOpened}/>
        <div>
          {`I'm a dialog`}
        </div>
        <DialogButton onClick={closeDialog} text="Close dialog"/>
      </div>
    )
  }
}

export default Dialog;
