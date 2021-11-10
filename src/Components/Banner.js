import React from 'react'
import { Row, Col } from 'react-bootstrap'

/* import Image for Background */
import BgImage from '../Assets/Images/titanic.jpeg'

class Banner extends React.Component {
  render() {
    return(
      <Row className="banner">
        <Col className="wrapper-banner image-banner" style={{ "backgroundImage": `url(${BgImage})` }}>
          <Col className="wrapper-text-banner">
            <h1 className="title-banner" style={{ fontSize: "48px", fontFamily: "Roboto", fontStyle: "italic" }} >
              All Movies Here
            </h1>
            <p className="subtitle-banner" style={{ fontSize: "18px", fontFamily: "Roboto", fontStyle: "italic" }}>
              We brings our best movie to you
            </p>          
          </Col>
        </Col>
      </Row>      
    )
  }
}

export default Banner