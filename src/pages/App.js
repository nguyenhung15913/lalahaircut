
import Home from './pages/Home';
import Nav from './components/Nav'
import About from './pages/About';
import PhotoGallery from './pages/PhotoGallery';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Home */}
       <Services />
       <Hours/>
      {/* About */}
      <About />
      <PhotoGallery />
      {/* Services */}
      {/* Hours */}
      {/* Prices */}
      {/* Contact */}
    </div>
  );
}

export default App;
