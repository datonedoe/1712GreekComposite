import React, { Component } from 'react';
import Individual from './Individual';
import { Grid, Row} from 'react-bootstrap';

class ProfileList extends Component {

  click = () => {
    alert("CLICKED!")
  }
  render() {
    return (
      <div>

          <Grid>
            <Row>
              {this.props.memberArray.map((each, index)=> {

                  return (

                          <Individual

                                    key={each.id}
                                    index={index}
                                    memberArray={this.props.memberArray}
                                    time={this.props.time}
                                    oldImgUrl={each.oldimgurl}
                                    newImgUrl={each.newimgurl}
                                    fullName={`${each.firstname} ${each.lastname}`}/>


                  )
              })}

            </Row>
          </Grid>
      </div>
    )
  }
}

export default ProfileList;
