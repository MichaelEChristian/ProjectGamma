import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Main from './Page Bodies/Main';
import Hotel from './Form Components/Hotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/Hotel'/>
        </Routes>
      </div>
      <div>
        <Hotel
        title='Click here for more details'
        imageUrl='https://media.istockphoto.com/id/1333257932/photo/digitally-generated-image-of-the-luxurious-hotel-lobby.jpg?b=1&s=170667a&w=0&k=20&c=F2MGAqZipZCsJSeeE1GQjUHBNi0kjn2wCwkMBauZsHs='
        body='Cheesy Wedding Quote about a beautiful hotel'
        />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
