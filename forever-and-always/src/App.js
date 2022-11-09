import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav';
import Main from './Page Bodies/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
