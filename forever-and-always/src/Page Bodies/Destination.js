import React, { useState } from "react";

import new_collage from "../images/new_collage.jpg"

function Destination() {
  return (
    <div>
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
