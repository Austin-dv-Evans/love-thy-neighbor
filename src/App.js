import '../src/styles/Sass/App.scss'
// import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import Instagram from './screens/Instagram'
import LandingPage from './components/LandingPage'
import About from './screens/About'
import Navbar from './components/Navbar'
import Contact from './screens/Contact'

import PaymentForm from './components/PaymentForm'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Donate from './screens/Donate';
import FooterNew from './components/FooterNew';


const PUBLIC_KEY = process.env.REACT_APP_KEY

const stripeTestPromise = loadStripe(PUBLIC_KEY)

function App() {
  console.log(stripeTestPromise);

  return (
    <Elements stripe={stripeTestPromise}>
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
          <Route path='/findus'>
            <Instagram/>
          </Route>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/donate'>
            <Donate/>
            
          </Route>
        </Switch>
        <FooterNew/>
      </Router>
    </div>
    </Elements>
    
  );
}

export default App;
