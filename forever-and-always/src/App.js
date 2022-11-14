import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Main from './Page Bodies/Main';
import Themes from './Page Bodies/Themes';
import Invites from './Page Bodies/Invites';
import ParentInvite from './Page Bodies/ParentInvite';
import CardText from './Form Components/CardText';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/themes/" element={<Themes/>}/>
          <Route path="/invites/" element={<Invites/>}/>
          <Route path="/invites/forms/" element={<CardText/>}/>
          <Route path="/invites/creation/" element={<ParentInvite/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
