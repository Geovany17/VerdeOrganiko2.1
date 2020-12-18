import React from "react";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductPage from "./Pages/ProductPage";
import CalatheaProduct from "./Pages/CalatheaProduct";
import PileaProduct from "./Pages/PileaProduct";
import OrbifoliaProduct from "./Pages/OrbifoliaProduct";
import MonsteraProduct from "./Pages/MonsteraProduct";
import OxalisProduct from "./Pages/OxalisProduct";
import Footer from "./components/Footer/Footer";
// import Parallax from "./components/Parallax/Parallax";

function App() {
  return (
    <>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router>
            <Navbar />
            <Switch>
              {/* <Hero /> */}
              {/* <h2 class="ui center aligned icon header">
          <i class="circular users icon"></i>
          About us
        </h2> */}
              <Route path='/buy' exact component={Product} />
              <Route path={['/', '/home']} exact component={Home} />
              <Route path='/login' exact component={Login} />
              <Route path='/sign-up' exact component={Signup} />
              <Route path='/first' exact component={ProductPage} />
              <Route path='/second' exact component={CalatheaProduct} />
              <Route path='/third' exact component={PileaProduct} />
              <Route path='/fourth' exact component={OrbifoliaProduct} />
              <Route path='/fifth' exact component={MonsteraProduct} />
              <Route path='/sixth' exact component={OxalisProduct} />
              {/* <LoginForm /> */}
            </Switch>
            {/* <div class="elfsight-app-2d5a33c3-a371-44d5-91d0-496ed2d6bc2e"></div> */}
            {/* <Parallax /> */}

            <Footer />
          </Router>

        </ConnectedRouter>
      </Provider>
    </>
  );
}

export default App;
