import React, { Component } from 'react';
import ProfileName from './ProfileName';
import {Modal, Image, Col, Row, Button} from 'react-bootstrap';
import "./Individual.css";
import IndividualModalInfo from './IndividualModalInfo';
class Individual extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      index: this.props.index
    }
  }

  getInitialState= () => {
    return { showModal: false };
  }

  close= () => {
    this.setState({ showModal: false });
  }

  open= () => {
    this.setState({ showModal: true });
  }

  handleClick = () =>{
    alert("clicked");
  }

  next = () => {
    this.setState ({
      index: this.state.index + 1
    })
  }

  prev = () => {
    this.setState ({
      index: this.state.index - 1
    })
  }

  render() {

    let prevBtnClasses = this.state.index ===0 ? "prev hideButton" : "prev";
    let nextBtnClasses = this.state.index === this.props.memberArray.length-1 ? "next hideButton" : "next";
    let arrElement = this.props.memberArray[this.state.index];
    console.log("arrElement", arrElement);
    return (
      <div>

            <div>
              <Modal  bsSize="large" show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                  <Modal.Title className="text-center">
                              <p className="small">Profile Info</p>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Row>

                      <Col className="vcenter" xs={1}>
                          <Button className={prevBtnClasses} onClick={this.prev}>{`<`}</Button>
                      </Col>

                      <Col className="vcenter"  style={{height: "55vh"}} xs={10}>
                          <IndividualModalInfo
                            fullName = {`${arrElement.firstname} ${arrElement.lastname}`}
                            time={this.props.time}
                            oldImgUrl =  {arrElement.oldimgurl}
                            newImgUrl = {arrElement.newimgurl}
                            pledgeClass = {arrElement.pledgeclass}
                            pledgeClassYear = {arrElement.pledgeclassyear}
                            hometown = {arrElement.hometown}
                            major = {arrElement.major}
                            classOf = {arrElement.classof}
                            positionList = {arrElement.positionlist? JSON.parse(arrElement.positionlist):false}
                            quote={arrElement.quote}
                            />

                      </Col>

                      <Col className="vcenter" xs={1}>
                        <Button  className={nextBtnClasses} onClick={this.next}>{`>`}</Button>
                      </Col>

                    </Row>

                </Modal.Body>

                <Modal.Footer>
                  <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
              </Modal>
            </div>


        <Col  className="Individual" xs={12} sm={6} md={2} lg={2}>
          <Row onClick={this.open}>
            <Image
              src={this.props.time==="then" ? this.props.oldImgUrl : this.props.newImgUrl}
              responsive />
          </Row>
          <Row className="profileName">
            <ProfileName fullName={this.props.fullName}/>
          </Row>
        </Col>
      </div>
    )
  }
}

export default Individual;
