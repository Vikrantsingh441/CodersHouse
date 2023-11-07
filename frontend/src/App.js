import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Navigation from './components/shared/Navigation/Navigation';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        {/* <Route path='/register' exact element={<Register/>}/>
        <Route path='/login' exact element={<Login/>}/> */}
        <Route path='/authenticate'  element={<Authenticate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
