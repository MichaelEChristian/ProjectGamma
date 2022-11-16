import React, { useState } from "react";

import new_collage from "../images/new_collage.jpg"

function Destination() {
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
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button type="button" class="btn btn-light">Plan Your Flight</button>
          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option>Choose your city</option>
          </select>
        </div>
      </nav>
      <div class="card bg-dark text-white">
        <img src={new_collage} id="wedding-new_collage" class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 class="card-title">Where </h1>
        </div>
      </div>
      <div>
        <section class="img-container">
          <br />
          <h2>Name of city dynamically changes </h2>

          <div class="container py-4">
            <div class="card">
              <div class="row ">
                <div class="col-md-5">
                  <img class="d-block w-100" src="https://cdn.britannica.com/29/118429-050-C00CA1C8/Skyline-Cincinnati-Ohio.jpg" alt="" />
                </div>

                <div class="col-md-7 px-3">
                  <div class="card-block px-6">
                    <h4 class="card-title">title of placeholder (this is where it will go)</h4>
                    <p class="card-text">
                      This is display PRICE
                    </p>
                    <p class="card-text">Summary of venue, I hope</p>
                    <br />
                    <a href="#" class="mt-auto btn btn-primary">Read More</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="container py-4">
            <div class="card">
              <div class="row ">
                <div class="col-md-5">
                  <img class="d-block w-100" src="https://cdn.britannica.com/29/118429-050-C00CA1C8/Skyline-Cincinnati-Ohio.jpg" alt="" />
                </div>

                <div class="col-md-7 px-3">
                  <div class="card-block px-6">
                    <h4 class="card-title">title of placeholder (this is where it will go)</h4>
                    <p class="card-text">
                      This is display PRICE
                    </p>
                    <p class="card-text">Text/ paragraph of place </p>
                    <br />
                    <a href="#" class="mt-auto btn btn-primary">Read More</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <p>stuff</p>
      {/* <form>
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
      </form> */}
    </div>
  );
}

export default Destination;
