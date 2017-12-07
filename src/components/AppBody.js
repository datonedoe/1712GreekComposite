import React, { Component } from 'react';
import dataInfo from './../data/data.json';
import ProfileList from './ProfileList';
import { ButtonGroup, Button } from 'react-bootstrap';
// import Backdrop from './UI/Backdrop';
import './AppBody.css'
class AppBody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "then"
    }
  }
  componentWillMount() {
    console.log(dataInfo);
    this.setState({memberArray: dataInfo})
  }

  handleThenButton = () => {
    this.setState({time: "then"})
  }

  handleNowButton = () => {
    this.setState({time: "now"})
  }



  render() {
    return (
      <div className="AppBody">

        <ButtonGroup className="toggleButton">
          <Button onClick={this.handleThenButton}  bsStyle="primary">Then</Button>
          <Button onClick={this.handleNowButton}bsStyle="success">Now</Button>
        </ButtonGroup>
        <ProfileList time={this.state.time} memberArray={this.state.memberArray}/>
      </div>

    )

  }
}

export default AppBody;
