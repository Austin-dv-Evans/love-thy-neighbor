import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import About from './components/About'
import HeroSlider from './components/HeroSlider'
import Instagram from './components/Instagram'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <HeroSlider />
      {/* <Instagram/> */}
      <About />
    </div>
  );
}

export default App;
