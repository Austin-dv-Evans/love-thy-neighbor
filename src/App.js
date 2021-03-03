import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
