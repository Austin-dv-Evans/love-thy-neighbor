import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Instagram from './components/Instagram'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Instagram /> 
    </div>
  );
}

export default App;
