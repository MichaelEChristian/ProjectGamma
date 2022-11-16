import React, { useState } from "react";

// state - [

// ]

function Destination() {
    useState(0)
  return (
    <div>
    <nav>
      <p>nav bar </p>
    </nav>
    <section>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="destination-pics" src="https://hctg-images.imgix.net/images/venues/the-oaks-at-boerne/WD20200924OaksAtBoerneThe08.jpg?auto=format%2Ccompress&crop=focalpoint&dpr=3&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&w=400&s=c9e1f2034ff35fe588a388ac09154a89" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>The Oaks at Boerne</h5>
        <h6>Boerne, TX</h6>
        <p>110 acres of Hill Country perfection with gently rolling meadows graced by hundreds of its namesake ancient oaks • large, cheerful barn with roll-up sides and plenty of shabby-chic touches • endless photo ops—a romantic “room for two” tree swing, vintage farm equipment and furniture, and even some photogenic longhorn cattle</p>
      </div>
    </div>
    <div class="carousel-item">
      <img id="destination-pics" src="https://hctg-images.imgix.net/images/articles/CharlestonLane02.jpg?auto=format%2Ccompress&crop=focalpoint&dpr=3&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&w=400&s=0386a1f365f6690d2ad427ae84157e4f" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>Charleston Lane</h5>
        <h6>Willis, TX</h6>
        <p>elegant lakefront event venue with sweeping views of Lake Conroe • five unique spaces for indoor and outdoor ceremonies and receptions • venue rental includes a private menu tasting and private cocktail and beverage tasting</p>
      </div>
    </div>
    <div class="carousel-item">
      <img id="destination-pics" src="https://hctg-images.imgix.net/images/venues/elmwood-gardens-by-provence/WD20220629Elmwood-Gardens22.jpg?auto=format%2Ccompress&crop=focalpoint&dpr=3&fit=min&fm=jpg&fp-x=0.5&fp-y=0.5&w=400&s=782ca7b9cd3c74d18155a2f298690e1d" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h5>Elmwood Gardens by Provence</h5>
        <h6>Palestine, TX</h6>
        <p>Enchanting, 32-acre wedding venue • numerous picturesque outdoor ceremony sites • farm-to-table dining experience</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </section>
      <p>stuff</p>
      <form>
        <div>
          <div class="req_input">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input type="date" id="start" name="trip-start"/>
            <input type="date" id="end" name="trip-end" />
          </div>
          <div>
            <select>
              <option>mapped data airports in texas, From</option>
            </select>
            <select>
              <option>mapped data airports in texas, To</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Destination;
