import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Nav from './Nav';
import Main from './Page Bodies/Main';
import Login from './Form Components/Login';
import Destination from './Page Bodies/Destination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Nav/> */}
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="destination" element={<Destination/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
