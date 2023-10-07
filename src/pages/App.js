
import Home from './Home';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import About from './About';
import PhotoGallery from './PhotoGallery';
import Services from './Services';
import Hours from './Hours';
import Prices from './Prices'
function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Home */}
      <Home/>
     
      {/* About */}
      <About />
      <PhotoGallery />
      {/* Services */}
      <Prices/>
      <Hours/>
      <Services/>
      
      <Footer/>
      {/* Hours */}
      {/* Prices */}
      {/* Contact */}
    </div>
  );
}

export default App;
