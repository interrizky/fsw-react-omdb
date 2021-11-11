import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Axios from 'axios'

class ListProduct extends React.Component {
  state = {
    OMDBData: null,
    Config: {
        url: 'http://www.omdbapi.com/?apikey=58ed57ce&s=world',
        method: 'get'
    },
  }

  HoverIn(e) {
    e.preventDefault()
    document.querySelector(`.dsp-foreground-${e.target.id}`).style.cssText += 'background-color: grey; opacity: 30%;';
    document.querySelector(`.dsp-background-${e.target.id}`).style.cssText = 'position: relative;';
  }

  HoverOut(events) {
    document.querySelector(`.dsp-foreground-${events.target.id}`).style.cssText = 'position: absolute;';
    document.querySelector(`.dsp-background-${events.target.id}`).style.cssText = 'position: relative; display: none;';
  }

  componentDidMount() {
    Axios(this.state.Config).then(response => {
        console.log(response)
        this.setState({
            OMDBData: response.data
        })
    }).catch(err => {
        console.log(err)
    })    
  }

  render() {
    return(
      <Row className="list-products">
        <p className="preambule" md="12" style={{ fontSize: "24px", marginTop: "24px", textAlign: "center"}}>PRODUCTS</p>
        <Col className="search-form" md="12" style={{ textAlign: "center" }}>
          <input className="inputan form-control mx-auto w-50" type="text" style={{ marginBottom: "20px" }} placeholder="What is Your Favorite Movie??"></input>
          <Button type="button" variant="outline-dark" className="resetting btn-lg mb-3 mx-2">Reset</Button>          
          <Button type="button" variant="outline-danger" className="searching btn-lg mb-3 mx-2">Search</Button>
        </Col>        
        <>
            {
              this.state.OMDBData !== null ? 
                  this.state.OMDBData.Search.map((data, index) => {
                      return(
                          <div key={ `wrapper-${index}` } className={ `kotak-wrapper wrapper-product-${index+1} shadow-lg rounded col-4` } style={{ backgroundColor: "rgb(250, 250, 250)" }} >
                            <div key={ `fore-${index}` } id={ `${index+1}` } className={ `display-depan dsp-foreground-${index+1}` } style={{ position: "absolute" }} onMouseOver={ this.HoverIn } onMouseLeave={ this.HoverOut } >
                              <img src={ data.Poster } id={ `${index+1}` } style={{ width: "200px", height: "175px" }} alt={data.Title} />
                              <p className="text-wrap" id={ `${index+1}` } style={{ marginTop: "16px", width: "200px" }}> { data.Title } </p>
                            </div>
                            <div key={ `back-${index}` } id={ `dsp-background-${index+1}` } className={ `display-belakang dsp-background-${index+1}` } style={{ position: "relative", display: "none"}} >
                              <a href={ `/detail/${data.Title}` } >
                                <Button variant="light" className={ `tombol-info-${index+1} w-100` }>HRef</Button>
                              </a>
                            </div>            
                          </div>                                            
                      )
                  })
              : null
            }
        </>
      </Row>             
    )
  }
}

export default ListProduct