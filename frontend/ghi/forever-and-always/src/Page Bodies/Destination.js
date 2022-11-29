import { useState } from "react";
import sunset_wedding_photo from "../images/sunset_wedding_photo.jpg"
// import APIKEY from "../.env"
// import arizona from "../images/sunset_wedding_photo.jpg"




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

  // useEffect (() => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '25332117b9mshc4a79d828ebc717p1cbd02jsn5ff2c737e061',
  //       'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
  //     }
  //   };

  //   async function getStateImage(){
  //     const imageUrl = "https://bing-image-search1.p.rapidapi.com/images/search?q=wedding&count=9"
  //     const imageResponse = await fetch (imageUrl, options);
  //     if (imageResponse.ok){
  //       const data = await imageResponse.json();
  //       setimages(data.value)
  //       // console.log("test---->", imageResponse)
  //       console.log("image-test---->", imageResponse)
  //     }
  //   }
  //   getStateImage();
  // }, [])
  // console.log("test---->", images)

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
      <div class="card bg-dark text-white">
        <img src={sunset_wedding_photo} id="wedding-sunset_wedding_photo" class="card-img" alt="..." width='100%' height="450px" />
        <div class="card-img-overlay">
          <h1 class="card-title">Where </h1>
        </div>
      </div>
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
        <div class="card">
          <div class="card-body">
            This is some text within a card body.
          </div>
        </div>
        {/* </section> */}


        <section class="img-container">
          <div class="container">
            {images.map((imageInfo, index) => {
              if (index % 3 !== 0) {
                return null
              } else {
                return (
                  <div class="row row-cols-3">
                    <div class="col">
                      <div class="card">
                        <img src={images[index].contentUrl} class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">{images[index].name}</h5>
                          <a href={images[index].hostPageUrl} class="btn btn-primary">Take me There!</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src={images[index + 1].contentUrl} class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">{images[index + 1].name}</h5>
                          <a href={images[index + 1].hostPageUrl} class="btn btn-primary">Take me There!</a>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <img src={images[index + 2].contentUrl} class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">{images[index + 2].name}</h5>
                          <a href={images[index + 2].hostPageUrl} class="btn btn-primary">Take me There!</a>
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
    </div>
  );
}

export default Destination;
