import {Routes, Route, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './Container/Home/HomePage';
import Projects from './Container/Projects/Projects';

import Navy from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navy/>
        <Routes>
          {/* <Route path="*" element={<Err404 />}/> */}
          <Route index element={<Homepage />}/>
          <Route path="/Projects" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
