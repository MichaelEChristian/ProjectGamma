import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import '../App.css';
import ThemeCards from '../images/ThemeCards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Winter from '../images/Winter.jpg'
import Winter2 from '../images/Winter2.webp'
import Winter3 from '../images/Winter3.jpg'
import Goth from '../images/Goth.jpg'
import Goth2 from '../images/Goth2.jpg'
import Goth3 from '../images/Goth3.jpg'
import Garden from '../images/Garden.jpg'
import Garden2 from '../images/Garden2.jpg'
import Beach from '../images/Beach.jpeg'
import Beach2 from '../images/Beach2.png'
import Beach3 from '../images/Beach3.jpg'

const themes = [Winter, Winter2, Winter3, Goth, Goth2, Goth3, Garden, Garden2, Beach, Beach2, Beach3]

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]


function Themes(props) {

  return (
    <div>
        <h1 className="most-popular-themes" style={{textAlign: "center"}}>Most Popular Themes</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
            {themes.map(img => {
              return (
                <Card className="carousel-card" style={{ width: '18rem' }}>
                  <div>{console.log(img)}</div>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and talk about key
                      features of the theme e.g. Winter Wonderland, etc.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              );
            })}
            </Carousel>
        </div>
    </div>
  )
}

export default Themes
