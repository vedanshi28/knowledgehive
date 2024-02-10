import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Features from './components/Features';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
         <Route exact="true" path='/' element={<Home />}/>
         <Route exact="true" path='/about' element={<About />}/>
         <Route exact="true" path='/featuress' element={<Features />}/>
         <Route exact="true" path='/contact' element={<Contact />}/>
         <Route path="/:anything" element={<Navigate replace to='/' />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
