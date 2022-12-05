import React from 'react'
import Trung from "../images/Trung.jpeg"
// import { Card, Col, Container, Image, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Main() {
  const weddingInfo = [{ "image": "https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92", "title": "Build your dream wedding", "p": "Our goal is to create a platform where couples can create their dream wedding without hiring a wedding planner. By doing so, our vision was to make the planning as seamless as possible through various features on the website. So you and your forever partner can enjoy the whole process without dealing with external pressure." },
  { "image": "https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg", "title": "Guidance through the unknown", "p": "Our team understands the idea to create and plan a wedding from scratch seems daunting. In order to remove the stress, we provide resources that guide the soon-to-be bride/groom into managing budget, food, venues/destinations, and other elements to make a wedding magical." },
  { "image": "https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg", "title": "Everlasting Memories with loved ones", "p": "You're one step away from living out your fairy tale wedding. We recommend creating a personal profile by signing up by pressing the button below. Afterwards, decide on what your personal budget should be and move onwards to your preferred destination. You'll be able to search and filter through different venues." }]

  const teamIntro = [{ "profileImage": Trung, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Trung Nguyen" },
  { "profileImage": Trung, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Trung Nguyen"}, 
  { "profileImage": Trung, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Trung Nguyen"}, 
  { "profileImage": Trung, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Trung Nguyen"}]

  return (
    <div className="main-pg-container">
      <section className="header-img-container">
        <div class="text-white" className="header-img">
          <img src="https://www.theknot.com/tk-media/images/98ecb5ef-141a-4ef5-ba1c-bbd0e547cd28~rs_768.h" className="wedding-img" alt="..." />
        </div>
      </section>
      <main>
        <div className="welcome-page-container">
          {weddingInfo.map((description, key) =>
            <div key={key} className="purpose-container">
              <img src={description.image} className="purpose-img"></img>
              <div className="purpose-info-container">
                <div className="purpose-title">{description.title}</div>
                <div className="purpose-paragraph">{description.p}</div>
              </div>
            </div>
          )}
        </div>
        <div className="member-cards-container">
          {teamIntro.map((member, key) =>
            <div className="member-card">
              <img src={member.profileImage} className="member-img"/>
              <div className="member-name">{member.name}</div>
              <div className="member-vision">{member.cheeesyParagraph}</div>
            </div>
          )}
        </div>
      </main>
      <footer className="main-pg-footer">
        <div>
          <p>
            Copyright &copy; Your Website 2021
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Main
