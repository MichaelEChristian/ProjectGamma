import React from 'react'
import Trung from '../images/Trung.jpeg'
import Jenny from '../images/Jenny.jpg'
import Elijah from '../images/Elijah.jpg'
import hehehehe from '../images/hehehehe.jpeg'
import sunset_wedding_photo from '../images/sunset_wedding_photo.jpg'

import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
  const weddingInfo = [
    {
      image:
        'https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92',
      title: 'Build your dream wedding',
      p: 'Our goal is to create a platform where couples can create their dream wedding without hiring a wedding planner. By doing so, our vision was to make the planning as seamless as possible through various features on the website. So you and your forever partner can enjoy the whole process without dealing with external pressure.',
    },
    {
      image:
        'https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg',
      title: 'Guidance through the unknown',
      p: 'Our team understands the idea to create and plan a wedding from scratch seems daunting. In order to remove the stress, we provide resources that guide the soon-to-be bride/groom into managing budget, food, venues/destinations, and other elements to make a wedding magical.',
    },
    {
      image:
        'https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg',
      title: 'Everlasting Memories with loved ones',
      p: "You're one step away from living out your fairy tale wedding. We recommend creating a personal profile by signing up by pressing the button below. Afterwards, decide on what your personal budget should be and move onwards to your preferred destination. You'll be able to search and filter through different venues.",
    },
  ]

  const teamIntro = [
    {
      profileImage: Elijah,
      cheeesyParagraph:
        'My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.',
      name: 'Elijah Gilead',
    },
    {
      profileImage: Jenny,
      cheeesyParagraph:
        'My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.',
      name: 'Jenny Zhang',
    },
    {
      profileImage: hehehehe,
      cheeesyParagraph:
        'My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.',
      name: 'Michael Christian',
    },
    {
      profileImage: Trung,
      cheeesyParagraph:
        'My goal when creating our application was to make the entire process of wedding planning fun. We wanted to help personalize every detail of the wedding while giving insight and transparent pricing.',
      name: 'Trung Nguyen',
    },
  ]

  return (
    <div>
      <header>
        <section>
          <div id="intro" class="bg-image vh-100"></div>
        </section>
      </header>
      <div className="main-pg-container">
        {/* <section className="header-img-container">
        <div class="text-white" className="header-img">
          <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/305933382_194078206349814_3703546288574644125_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OyQNGqCiUBQAX_SQIsG&_nc_ht=scontent-dfw5-2.xx&oh=00_AfApIsuLejQPcxLz6sPbtc5LUos8tnPmxMyXM9H5Sj2OmA&oe=6394EE8F" className="wedding-img" alt="..." />
        </div>
      </section> */}
        <div class="hero row">
          <div class="hero__txt container">
            <h1>Forever & Always</h1>
            <h4>
              Not sure on a destination? Maybe New York City, New York City is a
              popular choice for couples looking for a city wedding. From
              classic venues like the Plaza Hotel to modern spaces like the
              Standard Hotel, New York City has something for every couple.
            </h4>
          </div>
        </div>
        <main>
          <section id="text-three-para">
            <div className="welcome-pg-container">
              <div class="text-center">
                <h2 class="section-heading text-uppercase">About Us</h2>
                <div className="vision-statement">
                  <h3 class="section-subheading text-muted">
                    What we envisioned when creating our website
                  </h3>
                </div>
              </div>
              <div class="row text-center">
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <img
                      className="about-us-profile-img"
                      src="https://www.theknot.com/tk-media/images/a3b7219c-ab2a-415a-a260-f6541e68af92"
                    />
                  </span>
                  <h4 class="my-3">Build your dream wedding</h4>
                  <p class="text-muted">
                    Our goal is to create a platform where couples can create
                    their dream wedding without hiring a wedding planner. By
                    doing so, our vision was to make the planning as seamless as
                    possible through various features on the website. So you and
                    your forever partner can enjoy the whole process without
                    dealing with external pressure.
                  </p>
                </div>
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <img
                      className="about-us-profile-img"
                      src="https://www.millersguild.com/wp-content/uploads/2022/01/dream-of-wedding.jpg"
                    />
                  </span>
                  <h4 class="my-3">Guidance through the unknown</h4>
                  <p class="text-muted">
                    Our team understands the idea to create and plan a wedding
                    from scratch seems daunting. In order to remove the stress,
                    we provide resources that guide the soon-to-be bride/groom
                    into managing budget, food, venues/destinations, and other
                    elements to make a wedding magical.
                  </p>
                </div>
                <div class="col-md-4">
                  <span class="fa-stack fa-4x">
                    <img
                      className="about-us-profile-img"
                      src="https://media2.insideweddings.com/images/YiLBjcRh1C0Uif7ZWdeW.original.jpg"
                    />
                  </span>
                  <h4 class="my-3">Everlasting memories with loved ones</h4>
                  <p class="text-muted">
                    You're one step away from living out your fairy tale
                    wedding. We recommend creating a personal profile by signing
                    up by pressing the button below. Afterwards, decide on what
                    your personal budget should be and move onwards to your
                    preferred destination. You'll be able to search and filter
                    through different venues.
                  </p>
                </div>
              </div>
            </div>
          </section>

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
          <section className="header-img-container">
            <div class="text-white" className="header-img">
              <p className="pic-font">
                Creating what seems impossible, possible!
              </p>
              <img
                src="https://cdn3.i-scmp.com/sites/default/files/images/methode/2018/09/10/3d80613c-af33-11e8-b224-884456d4cde1_image_hires_170017.jpg"
                className="wedding-img"
                alt="..."
              />
            </div>
          </section>
          <section class="page-section" className="roadmap">
            <div class="container">
              <div class="text-center">
                <div className="rdmap-name">
                  <h2 class="section-heading text-uppercase">RoadMap</h2>
                  <h3 class="section-subheading text-muted">
                    Step by step directions on how to navigate our website
                  </h3>
                </div>
              </div>
              <ul class="timeline">
                <li className="top-rdmap">
                  <div class="timeline-image"></div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">Sign up and create a profile</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        Start by pressing the getting started button below to
                        sign up for an account. This is to manage your personal
                        preferences to your account and track different ideas
                        and implementation.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image"></div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">
                        Decide on a destination and select a venue
                      </h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        You have the ability to decide if you want a destination
                        wedding or stay local. We give you the power,
                        transparency in pricing, and date selection with venues
                        in any place you decide to look up.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-image"></div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">Choose a theme</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        Pick a theme that fits you and your forever partner. We
                        have a handful of ideas already to pick from.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-image"></div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">Design your menu</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        We have filters for you and your loved ones to create a
                        menu that is not only appetizing but also fits anyone
                        and everyone's dietary preferences.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-image">
                  <div class="timeline-image"></div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h4 class="subheading">Create your invitations</h4>
                    </div>
                    <div class="timeline-body">
                      <p class="text-muted">
                        Customize your invitations with several templates.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="border-main-1">
            <div class="container">
              <div class="row">
                <div class="col-sm text-main-1">
                  <p>
                    Nestled on a secluded stretch of golden beach and set
                    against the magnificent mountains of Kauai’s north shore,
                    the intimate<strong> Hanalei Colony Resort </strong>is a
                    paradise on earth. Whether it's a simple wedding ceremony—an
                    intimate occasion for just the two of you, barefoot on the
                    beach at sunset—or a gala wedding and reception with dozens
                    of friends and family, Hanalei Colony provides a wedding
                    that captures the tranquility and beauty of its
                    surroundings.
                  </p>
                </div>
                <div class="col-sm">
                  <img
                    class="img-main-pg"
                    src="https://images.cvent.com/ws/images/venues/17401/Beachcomber-Cafe---Crystal-Cove-Newport-Beach-CA-12e5cb20-bb92-426e-88a3-7b6251035f0d.1646351631.jpeg?unique=true&d=900x450&f=webp"
                  />
                </div>
              </div>
            </div>
          </section>
          <section class="border-main-2">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <img
                    class="img-main-pg"
                    src="https://images.cvent.com/ws/images/venues/4108/Sleepy-Ridge-Weddings-Orem-UT-6ec3af93-c5c2-463c-a3e5-a7d16d947b2c.1580848420.jpg?unique=true&d=900x450&f=webp"
                  />
                </div>
                <div class="col-sm text-main-1">
                  <p>
                    Towering over a tranquil pond that reflects its graceful
                    architecture and majestic mountain backdrop,
                    <strong> Sleepy Ridge Weddings </strong>is one of the most
                    breathtaking, stately, and elegant wedding venues in Utah
                    County. With a variety of wedding packages to choose from,
                    the feel of an “old world golf course in Scotland” is at
                    once attainable and uncompromised, catering to your
                    limitations while providing the very best wedding quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h1 className="team-p">Meet the team</h1>
            <div class="parent">
              <div class="child">
                <br />
                <img src={Jenny} class="about-team-img" />
                <div>
                  <h4>Jenny Zheng</h4>
                  <p class="card-text">Write message</p>
                </div>
                <footer>
                  ICON FOR GIT, LINKEDIN, OTHER LINK YOU WANT TO ADD
                </footer>
              </div>
              <div class="child">
                <br />
                <img src={Elijah} class="about-team-img" />
                <div>
                  <h4>Elijah Gilead</h4>
                  <p class="card-text">Write message</p>
                </div>
                <footer>
                  ICON FOR GIT, LINKEDIN, OTHER LINK YOU WANT TO ADD
                </footer>
              </div>
              <div class="child">
                <br />
                <img src={hehehehe} class="about-team-img" />
                <div>
                  <h4>Michael Christian</h4>
                  <p class="card-text">Write message</p>
                </div>
                <footer>
                  ICON FOR GIT, LINKEDIN, OTHER LINK YOU WANT TO ADD
                </footer>
              </div>
              <div class="child">
                <img src={Trung} class="about-team-img" />
                <div>
                  <h4>Trung Nguyen</h4>
                  <p class="card-text">Write message</p>
                </div>
                <footer>
                  ICON FOR GIT, LINKEDIN, OTHER LINK YOU WANT TO ADD
                </footer>
              </div>
            </div>
          </section>
          {/* <section>
            <div className='meet-the-team-container'>
              <h1 className="team-p">Meet the team</h1>
              <div className="member-cards-container" id="">
                {teamIntro.map((member, key) =>
                  <div className="member-card">
                    <img src={member.profileImage} className="member-img" />
                    <div className="member-name">{member.name}</div>
                    <div className="member-vision">{member.cheeesyParagraph}</div>
                  </div>
                )}
              </div>
            </div>
          </section> */}
        </main>
        <footer className="main-pg-footer">
          <div>
            <p>
              We had a great time creating this web application assignment. We
              learned a lot about the technologies and tools that we used, and
              about problem-solving and working as a team.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Main
