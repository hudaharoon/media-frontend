import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Watchhistory from './Pages/Watchhistory';
import Landing from './Pages/Landing';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Watchhistory' element={<Watchhistory></Watchhistory>}></Route>
      </Routes>

      <Footer />
    </div>

  );
}

export default App;
