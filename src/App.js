import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Features/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
