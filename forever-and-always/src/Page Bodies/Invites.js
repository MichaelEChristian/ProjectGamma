import React from 'react';
import {useState} from 'react';
import Slider from 'react-slick';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import card1 from '../images/Card1.jpg'
import card2 from '../images/Card2.jpg'
import card3 from '../images/Card3.jpg'
import card4 from '../images/Card4.jpg'
import card5 from '../images/Card5.jpg'
import CardText from '../Form Components/CardText';


const images = [card1, card2, card3, card4, card5, card1, card2, card3, card5, card5]
const fonts = ["Ardella", "Peacock", "Relax", "Milkshake", "Corporation", "Modern Sans"]
function Invites(props) {

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight/>
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft/>
      </div>
    )
  }

  const handleClick = (e, img) => {
    console.log("inside handleclick function, image is:", img)
    props.setParentImage(img);
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    beforeChange: (current, next) => setImageIndex(next)
  }
    return (
      <div className="invites">
        <Slider {...settings} className="sliders">
          {images.map((img, idx) => (
            <div className={idx===imageIndex ? "slide activeSlide": "slide"}>
              <img id={idx} onClick={(e) => {handleClick(e, img)}} src={img} alt={img}/>
              <div>Testing</div>
            </div>
          ))}
        </Slider>
        <div><CardText/></div>
      </div>
    )
}

export default Invites
