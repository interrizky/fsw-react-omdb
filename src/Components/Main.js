import React from 'react'
import { Container } from 'react-bootstrap'

/* import bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
/* import manual styling */
import '../Assets/CSS/styles.css'

/* import component */
import Navbar from './Navbar'
import Banner from './Banner'
import SearchProduct from './SearchProduct'
import ListProduct from './ListProduct'
import Footer from './Footer'


class Main extends React.Component {
  render() {
    return(
      <Container fluid>
        <Navbar />
        <Banner />
        <SearchProduct />
        <ListProduct />
        <Footer />
      </Container>
    )
  }
}

export default Main