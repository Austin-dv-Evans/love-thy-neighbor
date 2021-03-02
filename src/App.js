import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Instagram from './components/Instagram'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Instagram /> 
    </div>
  );
}

export default App;
