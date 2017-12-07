import React, { Component } from 'react';
import { Image, Col, Row, ButtonGroup, Button} from 'react-bootstrap';
class IndividualModalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time : this.props.time
    }
  }
  thenClicked = () => {
    this.setState({time: "then"})
  }

  nowClicked = () => {
    this.setState({time: "now"})
  }
  render() {
    return (
      <div>
          <Row>
              <h2
                className="fullname"
                >{this.props.fullName}</h2>
          </Row>

          <Row>
            <Col sm={4}>
              <Image
                src={this.state.time === "then" ? this.props.oldImgUrl : this.props.newImgUrl}
                responsive></Image>
              <ButtonGroup justified>
                  <Button
                    bsSize="xsmall"
                    href="#"
                    onClick={this.thenClicked}
                    active={this.state.time === "then"}
                    >
                    Then
                  </Button>

                  <Button
                    bsSize="xsmall"
                    href="#"
                    onClick={this.nowClicked}
                    active={this.state.time !== "then"}
                    >
                    Now
                  </Button>
                </ButtonGroup>


            </Col>
            <Col sm={8}>

              <Row>
                <Col sm={4}><strong>Pledge class</strong></Col>
                <Col sm={7}>{this.props.pledgeClass} - {this.props.pledgeClassYear}</Col>
              </Row>

              <Row>
                <Col sm={4}><strong>Hometown</strong></Col>
                <Col sm={7}>{this.props.hometown}</Col>
              </Row>

              <Row>
                <Col sm={4}><strong>Major</strong></Col>
                <Col sm={7}>{`${this.props.major} '${this.props.classOf.toString().substr(2,2)}`}</Col>
              </Row>


              {
                this.props.positionList ?
                <Row>
                  <Col sm={4}><strong>Position(s)</strong></Col>
                  <Col sm={7}>
                    {this.props.positionList.map((each, index) =>
                      <div key={index}>{`${each.title} '${each.year.substr(2,2)}`}</div>)}
                  </Col>
                </Row> : null
              }


              <hr />

              <Row>
                <div className="quote">
                  "{this.props.quote}"
                </div>
              </Row>

            </Col>
          </Row>


      </div>
    )
  }
}

export default IndividualModalInfo;
