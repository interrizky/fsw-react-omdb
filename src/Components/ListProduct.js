import React from 'react'
import { Row } from 'react-bootstrap'
import Axios from 'axios'

class ListProduct extends React.Component {
  state = {
    OMDBData: null,
    Config: {
        url: 'http://www.omdbapi.com/?apikey=58ed57ce&s=world',
        method: 'get'
    },
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
        <>
            {
                this.state.OMDBData !== null ? 
                    this.state.OMDBData.Search.map((data, index) => {
                        return(
                            // <div key={ index }>
                            //     <img src={ data.Poster } alt={data.Title} />
                            //     <div>Halo { data.Title }, Welcome to tester js. Your Address { data.title }</div>
                            // </div>

                            <div key={ index } className={ `kotak-wrapper wrapper-product-${index+1} shadow-lg rounded col-4` } style={{ backgroundColor: "rgb(250, 250, 250)" }} >
                              <div id={ `dsp-foreground-${index+1}` } className={ `display-depan dsp-foreground-${index+1}` } style={{ position: "absolute" }}>
                                <img src={ data.Poster } style={{ width: "200px", height: "175px" }} alt={data.Title} />
                                  <p className="text-wrap" style={{ marginTop: "16px", width: "200px" }}> { data.Title } </p>
                              </div>
                              {/* <div id="dsp-background-1" class="dsp-background-1" style="position: relative; display: none;">
                                  <a href="detail.html?id=tt1981115&amp;title=Thor: The Dark World">
                                  <button class="tombol-info-1 btn btn-light w-100">HRef</button>
                                  </a>
                                  <br>
                                  <button data-toggle="modal" data-target="#exampleModalCenter-1" class="tombol-info-1 btn btn-dark w-100">Modal</button>                
                              </div>             */}
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