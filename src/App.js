import './styles/App.css';
import LineChart from './components/LineChart';
import React from 'react'
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import TopMenu from './components/TopMenu';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <TopBar />
        <TopMenu />
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