import React from 'react'
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import {Routes, Route, useLocation} from 'react-router-dom'
import MovieDetails from './pages/MovieDetails';
import {AnimatePresence} from 'framer-motion';
import Error from './pages/Error';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs/>} exact/>
          <Route path="/work" element={<OurWork/>} exact/>
          <Route path="/work/:id" element={<MovieDetails/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/work/:/*' element={<Error/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
