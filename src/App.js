import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/LandingPage'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
