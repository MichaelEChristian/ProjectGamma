import { useEffect, useState } from "react";
import sunset_wedding_photo from "../images/sunset_wedding_photo.jpg"

function Destination(props) {

  // const UsStates = [
  //   'Alabama',
  //   'Alaska',
  //   'Arizona',
  //   'Arkansas',
  //   'California',
  //   'Colorado',
  //   'Connecticut',
  //   'Delaware',
  //   'Florida',
  //   'Georgia',
  //   'Hawaii',
  //   'Idaho',
  //   'Illinois',
  //   'Indiana',
  //   'Iowa',
  //   'Kansas',
  //   'Kentucky',
  //   'Louisiana',
  //   'Maine',
  //   'Maryland',
  //   'Massachusetts',
  //   'Michigan',
  //   'Minnesota',
  //   'Mississippi',
  //   'Missouri',
  //   'Montana',
  //   'Nebraska',
  //   'Nevada',
  //   'New Hampshire',
  //   'New Jersey',
  //   'New Mexico',
  //   'New York',
  //   'North Carolina',
  //   'North Dakota',
  //   'Ohio',
  //   'Oklahoma',
  //   'Oregon',
  //   'Pennsylvania',
  //   'Rhode Island',
  //   'South Carolina',
  //   'South Dakota',
  //   'Tennessee',
  //   'Texas',
  //   'Utah',
  //   'Vermont',
  //   'Virginia',
  //   'Washington',
  //   'West Virginia',
  //   'Wisconsin',
  //   'Wyoming'
  // ]

  // const [images, setimages] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  const [selectedState, setSelectedState] = useState(["Texas"]);
  const [weddingVenues, setWeddingVenues] = useState([]);
  const [temporaryState, setTemporaryState] = useState('');


  useEffect(() => {

    async function getYelpWeddingVenuesData() {
      const weddingVenuesUrl = `http://localhost:8000/destination/?selctedStates=${selectedState}`
      const yelpResponse = await fetch(weddingVenuesUrl);
      if (yelpResponse.ok) {
        const yelpData = await yelpResponse.json();
        setWeddingVenues(yelpData.businesses)
        console.log(yelpData)
        console.log(" bus --->", yelpData.businesses)
      }
    }
    getYelpWeddingVenuesData();
  }, [selectedState])


  const submitValue = (e) => {
    e.preventDefault()
    setSelectedState(temporaryState)
    console.log(selectedState)
  }


  return (
    <div>
      <div className="bg-dark text-white">
        <img src={sunset_wedding_photo} id="wedding-sunset_wedding_photo" className="card-img" alt="..." width='100%' height="450px" />
        <section>
          <form>
            <div>
              <input type="text" placeholder="Please enter a State" onChange={e => setTemporaryState(e.target.value)} />
              <button onClick={submitValue}>Submit</button>
            </div>
          </form>

        </section>

        <section>
          <div className="container" id="destination-container">
            {weddingVenues.map((wedding) => {
              if (wedding === undefined) {
                return (
                  <p>Not found</p>
                )
              } return (
                <div>
                  <header>
                    <h2 className="destination-headings">{wedding.name}</h2>
                    <h4 className="destination-headings">{wedding.location.city}, {wedding.location.state}</h4>
                  </header>
                  <img id="destination-img" src={wedding.image_url} alt="stuff" />
                  <footer className="destination-border">
                    <h4>{wedding.location.display_address[0]} {wedding.location.display_address[1]}</h4>
                    <h5>{wedding.display_phone}</h5>
                  </footer>
                  <br />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div >
  );
}

export default Destination
