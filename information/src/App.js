import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Players from './pages/Players/Players';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import Leagues from './pages/Leagues/Leagues';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/Contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/terms' component={Terms} />
        <Route path='/leagues' component={Leagues} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
