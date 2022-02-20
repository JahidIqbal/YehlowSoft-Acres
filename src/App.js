import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/buynow/:id">
            <ServiceDetails />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
