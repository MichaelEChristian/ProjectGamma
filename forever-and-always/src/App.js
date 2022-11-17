import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Main from './Page Bodies/Main';
import Themes from './Page Bodies/Themes';
import Invites from './Page Bodies/Invites';
import ParentInvite from './Page Bodies/ParentInvite';
import CardText from './Form Components/CardText';
import Text from './Demo/Text';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
        {/* <Route path="login" element={<Login/>}/>
          <Route path="destination" element={<Destination/>}/> */}
          <Route path="/" element={<Main/>}/>
          <Route path="/themes/" element={<Themes/>}/>
          <Route path="/invites/" element={<Invites/>}/>
          <Route path="/invites/forms/" element={<CardText/>}/>
          <Route path="/invites/creation/" element={<ParentInvite/>}/>
          <Route path="/invites/test/" element={<Text/>}/>
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
