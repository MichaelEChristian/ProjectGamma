import React from 'react'
import Trung from "../images/Trung.jpeg"
import Jenny from "../images/Jenny.jpg"
import Elijah from "../images/Elijah.jpg"
import hehehehe from "../images/hehehehe.jpeg"
// import { Card, Col, Container, Image, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Main() {
  const weddingInfo = [{ "image": "https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92", "title": "Build your dream wedding", "p": "Our goal is to create a platform where couples can create their dream wedding without hiring a wedding planner. By doing so, our vision was to make the planning as seamless as possible through various features on the website. So you and your forever partner can enjoy the whole process without dealing with external pressure." },
  { "image": "https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg", "title": "Guidance through the unknown", "p": "Our team understands the idea to create and plan a wedding from scratch seems daunting. In order to remove the stress, we provide resources that guide the soon-to-be bride/groom into managing budget, food, venues/destinations, and other elements to make a wedding magical." },
  { "image": "https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg", "title": "Everlasting Memories with loved ones", "p": "You're one step away from living out your fairy tale wedding. We recommend creating a personal profile by signing up by pressing the button below. Afterwards, decide on what your personal budget should be and move onwards to your preferred destination. You'll be able to search and filter through different venues." }]

  const teamIntro = [{ "profileImage": Elijah, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Elijah Gilead" },
  { "profileImage": Jenny, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Jenny Zhang"}, 
  { "profileImage": hehehehe, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Michael Christian"}, 
  { "profileImage": Trung, "cheeesyParagraph": "My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.", "name": "Trung Nguyen"}]

  return (
    <div className="main-pg-container">
      <section className="header-img-container">
        <div class="text-white" className="header-img">
          <img src="https://cdn3.i-scmp.com/sites/default/files/images/methode/2018/09/10/3d80613c-af33-11e8-b224-884456d4cde1_image_hires_170017.jpg" className="wedding-img" alt="..." />
          <p></p>
        </div>
      </section>
      <main>
        <div className="welcome-pg-container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">About Us</h2>
            <h3 className="vision-statement" class="section-subheading text-muted">What we envisioned when creating our website</h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x"><img className="about-us-profile-img"src="https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92"/></span>
              <h4 class="my-3">Build your dream wedding</h4>
              <p class="text-muted">Our goal is to create a platform where couples can create their dream wedding without hiring a wedding planner. By doing so, our vision was to make the planning as seamless as possible through various features on the website. So you and your forever partner can enjoy the whole process without dealing with external pressure.</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x"><img className="about-us-profile-img"src="https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg"/></span>
              <h4 class="my-3">Guidance through the unknown</h4>
              <p class="text-muted">Our team understands the idea to create and plan a wedding from scratch seems daunting. In order to remove the stress, we provide resources that guide the soon-to-be bride/groom into managing budget, food, venues/destinations, and other elements to make a wedding magical.</p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x"><img className="about-us-profile-img"src="https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg"/></span>
              <h4 class="my-3">Everlasting memories with loved ones</h4>
              <p class="text-muted">You're one step away from living out your fairy tale wedding. We recommend creating a personal profile by signing up by pressing the button below. Afterwards, decide on what your personal budget should be and move onwards to your preferred destination. You'll be able to search and filter through different venues.</p>
            </div>
          </div>
        </div>
        {/* <div className="welcome-page-container">
          {weddingInfo.map((description, key) =>
            <div key={key} className="purpose-container">
              <img src={description.image} className="purpose-img"></img>
              <div className="purpose-info-container">
                <div className="purpose-title">{description.title}</div>
                <div className="purpose-paragraph">{description.p}</div>
              </div>
            </div>
          )}
        </div> */}
        <section class="page-section" className="roadmap">
            <div class="container">
                <div class="text-center">
                    <div className="rdmap-name">
                      <h2 class="section-heading text-uppercase">RoadMap</h2>
                      <h3 class="section-subheading text-muted">Step by step directions on how to navigate our website</h3>
                    </div>
                </div>
                <ul class="timeline">
                    <li className="top-rdmap">
                        <div class="timeline-image"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Sign up and create a profile</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Start by pressing the getting started button below to sign up for an account. This is to manage your personal preferences to your account and track different ideas and implementation.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Decide on a destination and select a venue</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">You have the ability to decide if you want a destination wedding or stay local. We give you the power, transparency in pricing, and date selection with venues in any place you decide to look up.</p></div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Choose a theme</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Pick a theme that fits you and your forever partner. We have a handful of ideas already to pick from.</p></div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Design your menu</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">We have filters for you and your loved ones to create a menu that is not only appetizing but also fits anyone and everyone's dietary preferences.</p></div>
                        </div>
                    </li>
                    <li class="timeline-image">
                        <div class="timeline-image"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="subheading">Create your invitations</h4>
                            </div>
                            <div class="timeline-body"><p class="text-muted">Customize your invitations with several templates.</p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <div className='meet-the-team-container'>
        <h1 className="team-p">Meet the team</h1>
          <div className="member-cards-container" id="">
            {teamIntro.map((member, key) =>
              <div className="member-card">
                <img src={member.profileImage} className="member-img"/>
                <div className="member-name">{member.name}</div>
                <div className="member-vision">{member.cheeesyParagraph}</div>
              </div>
            )}
          </div>
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
