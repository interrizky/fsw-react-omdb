import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class SearchProduct extends React.Component {
  render() {
    return(
      <Row className="judul-search-product">
        <p className="preambule" md="12" style={{ fontSize: "24px", marginTop: "24px", textAlign: "center"}}>PRODUCTS</p>
        <Col className="search-form" md="12" style={{ textAlign: "center" }}>
          <input className="inputan form-control mx-auto w-50" type="text" style={{ marginBottom: "20px" }} placeholder="What is Your Favorite Movie??"></input>
          <Button type="button" variant="outline-dark" className="resetting btn-lg mb-3 mx-2">Reset</Button>          
          <Button type="button" variant="outline-danger" className="searching btn-lg mb-3 mx-2">Search</Button>
        </Col>
      </Row>
    )
  }
}

export default SearchProduct