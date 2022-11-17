import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import '../App.css';
import ThemeCards from '../images/ThemeCards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Winter2 from '../images/Winter2.webp'
import Goth from '../images/Goth.jpg'
import Garden from '../images/Garden.jpg'
import Garden2 from '../images/Garden2.jpg'
import Beach from '../images/Beach.jpeg'
import Beach2 from '../images/Beach2.png'
import Beach3 from '../images/Beach3.jpg'
import Modal from 'react-modal'
import WinterWonderland from '../Modals/WinterWonderland';

const themes = [Winter2, Goth, Garden, Beach]
const themeNames = ["Winter Wonderland", "Gothic Grunge", "Garden Glades", "Boho Beach"]

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

Modal.setAppElement('#root')
function Themes(props) {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
        <h1 className="most-popular-themes" style={{textAlign: "center"}}>Most Popular Themes</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
            {themes.map((img, index) => {
              return (
                <Card className="carousel-card" style={{ width: '22rem' }}>
                  <div>{console.log(img)}</div>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{themeNames[index]}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and talk about key
                      features of the theme e.g. Winter Wonderland, etc.
                    </Card.Text>
                    <Button id={index} onClick={() => setModalOpen(true)} variant="primary">Learn More</Button>
                      <Modal style={
                        {
                          overlay: {
                            backgroundColor: 'pink'
                          },
                          content: {
                            color: 'pink'
                          }
                        }
                      } isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
                        <WinterWonderland/>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                      </Modal>
                  </Card.Body>
                </Card>
              );
            })}
            <ThemeCards/>
            </Carousel>
        </div>
    </div>
  )
}

export default Themes
