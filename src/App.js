import '../src/styles/Sass/App.scss'
// import '../src/styles/Css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import LandingPage from './components/LandingPage'
import About from './screens/About'
import Navbar from './components/Navbar'
import Instagram from './components/Instagram'
import FindUs from './components/FindUs';
import Shop from './screens/Shop';
import PaymentForm from './components/PaymentForm'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect } from 'react'

const PUBLIC_KEY = process.env.REACT_APP_KEY
const AZ_FUNC = process.env.REACT_APP_AZ_FUNC
const stripeTestPromise = loadStripe(PUBLIC_KEY)


function App() {
  console.log(stripeTestPromise);

  // useEffect(() => {
  //   fetch(AZ_FUNC)
  //     .then(result => result.json())
  //     .then(resp => console.log(resp))
  //     .catch(err => console.log(err))
  // }, [])

  

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
            <FindUs/>
          </Route>
          <Route path='/shop'>
            <Shop/>
            <PaymentForm />
          </Route>
        </Switch>
      </Router>
    </div>
    </Elements>
    
  );
}

export default App;
