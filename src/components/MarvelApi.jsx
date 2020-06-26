import React,{useState,useEffect} from 'react';
import {Card, Button,Container,Row,Col} from 'react-bootstrap';
import Rating from './Rating'
import axios from 'axios'
import '../assets/styles/MarvelApi.css';


const Swapi = (event) => {

const [loading,setLoading] = useState(true);
const [searchCharacter, setSearchCharacter] = useState('ruben')
const [data,setData] = useState([])  // sets the data to an arrays

useEffect(() => {
  axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=5bc48e45865f395ff6f1485e74c1031d&hash=ba7f4972e30a6a32e42a97178648df9f`)
  .then(res => {
    console.log(res.data.data.results)
    setData(res.data.data.results)


  })
  .catch(error => console.log("Hubo un error con la API" ,error))
},[]);



const listComics = data.map(comic => {


  
return(
  <Col className="card-column" sm ={4}>
  <Card key= {comic.id} style={{ width: '20rem', height: '40rem' }}>
    <Card.Img className="card-image" variant="top" src= {`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
    <Card.Body>
    <Card.Title>{comic.title}</Card.Title>
        <Rating />  
      <Card.Text className= "card-text">
        Number of Pages: {comic.pageCount} <br/>
        Number of creators: {comic.creators.available}

      </Card.Text>
        <Button onClick={UrlHandler}  className= 'button-url' variant="primary">View more</Button>
        <Button onClick={UrlHandler}  className= 'btn-warning button-description' variant="primary">Description</Button>
    </Card.Body>
  </Card>
  </Col>
);
});



return (
  <div className="marvel-api">
    <Container>
      <Row>
        {listComics}
      </Row>
    </Container>
    


  </div>
);
}

const UrlHandler = () => {
  return window.open('https://www.marvel.com/comics')
}

export default Swapi;

