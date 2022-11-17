import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import '../App.css';
import ThemeCards from '../images/ThemeCards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Winter2 from '../images/Winter2.webp'
import Goth from '../images/Goth.jpg'
import Garden from '../images/Garden.jpg'
import Beach from '../images/Beach.jpeg'
import Modal from 'react-modal'

// Modal Components
import WinterWonderland from '../Modals/WinterWonderland';
import GothicGrunge from '../Modals/GothicGrunge';
import BohoBeach from '../Modals/BohoBeach';
import GardenGlades from '../Modals/GardenGlades';

const themes = [Winter2, Goth, Garden, Beach]
const themeNames = ["Winter Wonderland", "Gothic Grunge", "Garden Glades", "Boho Beach"]
const components = [<WinterWonderland/>, <GothicGrunge/>]

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

Modal.setAppElement('#root')
function Themes(props) {

  const [modalOpen, setModalOpen] = useState(false)
  const [modalComponent, setModalComponent] = useState()

  function renderComponent(e, index){
    setModalOpen(true);
    setModalComponent(components[index])
  }

  return (
    <div>
        <h1 className="most-popular-themes" style={{textAlign: "center"}}>Most Popular Themes</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
            {themes.map((img, index) => {
              return (
                <Card className="carousel-card" style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={img} alt={img} />
                  <Card.Body>
                    <Card.Title>{themeNames[index]}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and talk about key
                      features of the theme e.g. Winter Wonderland, etc.
                    </Card.Text>
                    <Button id={index} value={index} onClick={(e) => renderComponent(e, index)} variant="primary">Learn More</Button>
                      <Modal
                        style={
                          {
                            overlay: {
                              backgroundColor: 'pink'
                            },
                            content: {
                              color: 'pink'
                            }
                          }}
                        isOpen={modalOpen}
                        onRequestClose={() => setModalOpen(false)}
                      >
                        {modalComponent}
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
