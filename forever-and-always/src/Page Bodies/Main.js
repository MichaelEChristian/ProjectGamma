import React from 'react'
import Trung from "../images/Trung.jpeg"
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Main() {
  return (
    <div>
      <section>
        <div class="text-white" id="header-img">
          <img src="https://eliaskordelakos.com/wp-content/uploads/sites/14206/2017/11/Canaves-Oia-Santorini-1.jpg" id="wedding-new_collage"  alt="..." />
        </div>
      </section>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={5}>
              <Image
                src="https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92"
                class="img-fluid rounded-circle"
                fluid
                roundedCircle
                className=""
                />
            </Col>
            <Col sm={7}>
            <h1 class="font-weigh-light">Build your dream wedding</h1>
              <p class="mt-4">
                Our goal is to create a platform where couples can create their dream wedding without hiring a wedding planner. By doing so, our vision was to make the planning as seamless as possible through various features on the website. So you and your forever partner can enjoy the whole process without dealing with external pressure.
              </p>
            </Col>
            <Col sm={6}>
            <h1 class="font-weigh-light">Guidance through the unknown...</h1>
              <p class="mt-5">
                Our team understands the idea to create and plan a wedding from scratch seems daunting. In order to remove the stress, we provide resources that guide the soon-to-be bride/groom into managing budget, food, venues/destinations, and other elements to make a wedding magical. 
              </p>
            </Col>
            <Col sm={6}>
              <Image
                src="https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg"
                class="img-fluid rounded-circle"
                fluid
                roundedCircle
                className=""
                />
            </Col>
            <Col sm={6}>
              <Image
                src="https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg"
                class="img-fluid rounded-circle"
                fluid
                roundedCircle
                className=""
                />
            </Col>
            <Col sm={6}>
            <h1 class="font-weigh-light">Everlasting memories with loved ones</h1>
              <p class="mt-5">
                You're one step away from living out your fairy tale wedding. We recommend creating a personal profile by signing up by pressing the button below. Afterwards, decide on what your personal budget should be and move onwards to your preferred destination. You'll be able to search and filter through different venues. Next, 
              </p>
              <button>Getting Started</button>
            </Col>
          </Row>
          <section>
            <h1>Meet the team</h1>
          </section>
          <Row>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={Trung} id="Trung" />
              <Card.Body>
                <Card.Title>Trung Nguyen</Card.Title>
                  <Card.Text>
                    My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.
                  </Card.Text>
              </Card.Body>
              </Card>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
              </Card.Body>
              </Card>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
              </Card.Body>
              </Card>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
              </Card.Body>
              </Card>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <div class="container px-4 px-lg-5">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Main
