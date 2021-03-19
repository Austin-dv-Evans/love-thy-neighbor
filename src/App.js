import '../src/styles/Sass/App.scss'
import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import LandingPage from './components/LandingPage'
import About from './components/About'
import Navbar from './components/Navbar'
import Instagram from './components/Instagram'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          {/* <Instagram/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
