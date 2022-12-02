// import { application } from "express";
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


  // const [usStates, setUsStates] = useState([]);
  const [images, setimages] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [weddingVenues, setWeddingVenues] = useState([]);
  const [fullWeddingData, setFullWeddingData] = useState([]);

  const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  useEffect(() => {
    async function getWeddingVenuesData() {
      const weddingVenuesUrl = `https://api.tomtom.com/search/2/poiSearch/wedding%20venue.json?countrySet=US&limit=1&lat=31.9686&lon=-99.9018&key=kmSK3ezGmqt9tFWRletCaqhczZg6OXVJ`
      const weddingVenuesResponse = await fetch(weddingVenuesUrl);
      if (weddingVenuesResponse.ok) {
        const weddingVenuesData = await weddingVenuesResponse.json();
        setWeddingVenues(weddingVenuesData.results)
        // console.log("weddingVenuesData--->", weddingVenuesData)

        const fulldata = await  Promise.all(weddingVenuesData.results.map(async (weddingVenue) => {

          const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '25332117b9mshc4a79d828ebc717p1cbd02jsn5ff2c737e061',
              'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            }
          };

          const weddingVenueImageUrl = `https://bing-image-search1.p.rapidapi.com/images/search?q=${weddingVenue.poi.name}&count=1`
          const weddingVenueImageResponse = await fetch(weddingVenueImageUrl, options);
          console.log("Bing url response", weddingVenueImageResponse)
          await sleep(1000);
          if (weddingVenueImageResponse.ok) {
            const WeddingData = await weddingVenueImageResponse.json();
            console.log("Bing Response", WeddingData)
            return {
                name: weddingVenue.poi.name,
                state: weddingVenue.address.countrySubdivisionName,
                stateAbbrevation: weddingVenue.address.countrySubdivision,
                address: weddingVenue.address.freeformAddress,
                phoneNumber: weddingVenue.poi.phone,
                url: weddingVenue.poi.url,
                weddingImage: WeddingData.queryExpansions[1].thumbnail.thumbnailUrl
            }
          }
        } 
        )
        ); setFullWeddingData(fulldata)
        console.log(fulldata)
      }
    }

    getWeddingVenuesData();
  }, [])
  // console.log("wedding Test----->", fullWeddingData)

  const onSubmit = (e) => {
    e.preventDefault();

    console.log('here')

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '25332117b9mshc4a79d828ebc717p1cbd02jsn5ff2c737e061',
        'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
      }
    };

    async function getStateImage() {
      const imageUrl = `https://bing-image-search1.p.rapidapi.com/images/search?q=wedding%venue%${searchInput}&count=9`
      const imageResponse = await fetch(imageUrl, options);
      if (imageResponse.ok) {
        const data = await imageResponse.json();
        setimages(data.value)
        // console.log("test---->", imageResponse)
        console.log("image-test---->", imageResponse)
      }
    }
    getStateImage();
    console.log(images)
  }


  return (
    <div>
      <div className="bg-dark text-white">
        <img src={sunset_wedding_photo} id="wedding-sunset_wedding_photo" className="card-img" alt="..." width='100%' height="450px" />
        <div className="card-img-overlay">
          <h1 className="card-title">Where </h1>
        </div>
      </div>
      <section>
        <div className="container" id="destination-container">
          {fullWeddingData.map((wedding) => {
            if (wedding === undefined){
              return(
                <p>Not found</p>
              )
            } return (
              <div>
                <header>
                  <h2 className="destination-headings">{wedding.name}</h2>
                  <h4 className="destination-headings">{wedding.state}, {wedding.stateAbbrevation}</h4>
                </header>
                <img id="destination-img" src={wedding.weddingImage} alt="stuff" />
                <footer className="destination-border">
                  <h4>{wedding.address}</h4>
                  <h5>{wedding.phoneNumber}</h5>
                  <h6>{wedding.url}</h6>
                </footer>
                <br />
              </div>
            )
          })}
        </div>
      </section>


      <section>
        <form onSubmit={(e) => { onSubmit(e) }}>
          <label htmlFor="search">Input a destination!</label>
          <input onChange={e => setSearchInput(e.target.value)} value={searchInput} placeholder="Input State" required type="text" name="user_submit" id="user_submit" className="form-control"  ></input>
          <input type="submit" />
        </form>
      </section>

      <div>
        {/* <section> */}
        {/* <nav>
            <p>This is where the select will go</p>
          </nav> */}
        <div className="card">
          <div className="card-body">
            This is some text within a card body.
          </div>
        </div>
        {/* </section> */}


        <section className="img-container">
          <div className="container">
            {images.map((imageInfo, index) => {
              if (index % 3 !== 0) {
                return null
              } else {
                return (
                  <div className="row row-cols-3">
                    <div className="col">
                      <div className="card">
                        <img src={images[index].contentUrl} className="card-img-top" alt="test" />
                        <div className="card-body">
                          <h5 className="card-title">{images[index].name}</h5>
                          <a href={images[index].hostPageUrl} className="btn btn-primary">Take me There!</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src={images[index + 1].contentUrl} className="card-img-top" alt="test" />
                        <div className="card-body">
                          <h5 className="card-title">{images[index + 1].name}</h5>
                          <a href={images[index + 1].hostPageUrl} className="btn btn-primary">Take me There!</a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src={images[index + 2].contentUrl} className="card-img-top" alt="test" />
                        <div className="card-body">
                          <h5 className="card-title">{images[index + 2].name}</h5>
                          <a href={images[index + 2].hostPageUrl} className="btn btn-primary">Take me There!</a>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              }
            }
            )

            }

          </div>
        </section>
      </div>
    </div >
  );
}

export default Destination;
