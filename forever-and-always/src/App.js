import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Main from './Page Bodies/Main';
import Themes from './Page Bodies/Themes';
import Invites from './Page Bodies/Invites';
import ParentInvite from './Page Bodies/ParentInvite';
import CardText from './Form Components/CardText';
import Login from './Form Components/Login';
import Text from './Demo/Text';
import Destination from './Page Bodies/Destination';
import Dashboard from './Page Bodies/Dashboard';
import Catering from './Page Bodies/Catering';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
          <Route path="login" element={<Login/>}/>
          <Route path="destinations" element={<Destination/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/themes/" element={<Themes/>}/>
          <Route path="/catering/" element={<Catering/>}/>
          <Route path="/destinations/" element={<Destination/>}/>
          <Route path="/invites/" element={<Invites/>}/>
          <Route path="/invites/forms/" element={<CardText/>}/>
          <Route path="/invites/creation/" element={<ParentInvite/>}/>
          <Route path="/invites/test/" element={<Text/>}/>
          <Route path="/profile/dashboard/" element={<Dashboard/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
