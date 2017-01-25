import React, {Component} from 'react';
import friends from 'friends.json';
import 'app.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FriendsList from 'FriendsList';
import Dialog from 'Dialog';
import DialogButton from 'DialogButton';
import ScrollPosition from 'ScrollPosition';

class App extends Component {

  state = {
    dialogOpen: false,
    scrollPosition: 0,
    containerWidth: 0
  }

  element;

  onWindowScroll = event => {
    this.setState({scrollPosition: this.element.scrollTop});
  }

  componentDidMount() {
    this.element.addEventListener("scroll", this.onWindowScroll);
    this.setState({containerWidth: this.element.offsetWidth});
  }

  componentWillUnmount() {
    this.element.removeEventListener("scroll", this.onWindowScroll);
  }

  openDialog = () => {
    this.setState({dialogOpen: true});
  }

  closeDialog = () => {
    this.setState({dialogOpen: false});
  }

  render() {

    const {dialogOpen, scrollPosition, containerWidth} = this.state;

    return (
      <div className="app" ref={element => this.element = element}>
        <div className="content">
          <b>Friend List</b>
          <ScrollPosition scrollPosition={scrollPosition} containerWidth={containerWidth}/>
          <hr/>
          <DialogButton onClick={this.openDialog} text="Open dialog"/>
          <FriendsList friends={friends}/>
          {dialogOpen && <Dialog closeDialog={this.closeDialog}/>}
        </div>

        <ReactCSSTransitionGroup
          transitionName="fadein"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {dialogOpen && <Dialog closeDialog={this.closeDialog}/>}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default App;
