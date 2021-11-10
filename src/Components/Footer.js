import React from 'react'
import { Row, Col } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    return(
      <Row className="footer">
        <Col className="menu-footer">
          <p style={{ "marginRight": "15px" }}>Home</p>
          <p style={{ "marginRight": "15px" }}>Articles</p>
          <p style={{ "marginRight": "15px" }}>About</p>
        </Col>
      </Row>         
    )
  }
}

export default Footer