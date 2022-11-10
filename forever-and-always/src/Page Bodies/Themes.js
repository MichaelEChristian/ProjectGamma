import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-elastic-carousel';
import '../App.css';
import ThemeCards from '../images/ThemeCards';


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]


function Themes(props) {

  return (
    <div>
        <h1 style={{textAlign: "center"}}>Most Popular Themes</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
                <ThemeCards></ThemeCards>
            </Carousel>
        </div>
    </div>
  )
}

export default Themes
