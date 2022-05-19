import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presentation from './Components/presentation/Presentation';
import Homepage from './Components/Homepage/Homepage.jsx';
import Detail from './Components/Detail/Detail';
import Createdog from './Components/CreateDog/Createdog';




function App() {
  return (
    <BrowserRouter>


        <Routes>

          <Route exact path="/" element={<Presentation/>}/>
          <Route exact path="/dogs" element={<Homepage/>}/>
          <Route exact path="/dogs/:id" element={<Detail/>}/>
          <Route exact path="/dogs/create" element={<Createdog/>}/>

        </Routes>
    

    </BrowserRouter>
  );
}

export default App;
