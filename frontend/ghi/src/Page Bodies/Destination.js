import { useEffect, useState } from 'react'
import sunset_wedding_photo from '../images/sunset_wedding_photo.jpg'
import { getDestinations } from '../library/api'

function Destination(props) {
  const [selectedState, setSelectedState] = useState(['Texas'])
  const [weddingVenues, setWeddingVenues] = useState([])
  const [temporaryState, setTemporaryState] = useState('')

  useEffect(() => {
    async function getYelpWeddingVenuesData() {
      const destinations = await getDestinations(selectedState)
      setWeddingVenues(destinations.businesses)
    }
    getYelpWeddingVenuesData()
  }, [selectedState])

  const submitValue = (e) => {
    e.preventDefault()
    setSelectedState(temporaryState)
  }

  return (
    <div>
      <section className="nav-top-padding">
        <img
          src={sunset_wedding_photo}
          id="wedding-sunset_wedding_photo"
          className="card-img"
          alt="..."
          width="100%"
          height="450px"
        />
        <section>
          <form>
            <div>
              <input
                type="text"
                placeholder="Please enter a State"
                onChange={(e) => setTemporaryState(e.target.value)}
              />
              <button onClick={submitValue}>Submit</button>
            </div>
          </form>
        </section>
      </section>

      <section>
        <div className="container" id="destination-container">
          {weddingVenues.map((wedding) => {
            if (wedding === undefined) {
              return <p>Not found</p>
            }
            return (
              <div>
                <header>
                  <h2 className="destination-headings">{wedding.name}</h2>
                  <h4 className="destination-headings">
                    {wedding.location.city}, {wedding.location.state}
                  </h4>
                </header>
                <img id="destination-img" src={wedding.image_url} alt="stuff" />
                <footer className="destination-border">
                  <h4>
                    {wedding.location.display_address[0]}{' '}
                    {wedding.location.display_address[1]}
                  </h4>
                  <h5>{wedding.display_phone}</h5>
                </footer>
                <br />
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Destination
