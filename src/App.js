import './styles/App.css';
import LineChart from './components/LineChart';
import React from 'react'
import TopBar from './components/TopBar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <TopBar />
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Chart</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' element={< LineChart />}></Route>
          <Route exact path='/about' element={< About />} ></Route>

        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;