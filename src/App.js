import React, {useContext}from "react";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import HomePage from "./container/HomePage/HomePage";
import InfoPage from "./container/InfoPage/InfoPage";
import FavoritesPage from './container/FavoritesPage/FavoritesPage';
import CartPage from './container/CartPage/CartPage';
import LoginPage from './container/LoginPage/LoginPage';
import CollectionPage from './container/CollectionPage/CollectionPage';
import OrderSummary from './container/CartPage/OrderSummary/OrderSummary';
import CheckOut from './container/CartPage/CheckOut/CheckOut';
import Logout from "./container/LoginPage/Logout/Logout";
import AuthContext from './context/authContext';
import {FavoritesContextProvider} from './context/favoriteContext.js'


const App = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isLoggedIn;

  let routes =(
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Info/:productId" component={InfoPage} />
      <Route path="/Collections" component={CollectionPage}/>
      <Route path="/Login" component={LoginPage}/>
      <Redirect to="/" />
    </Switch>
  )

  if (isAuthenticated) {
    routes = (
      <FavoritesContextProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Info/:productId" component={InfoPage} />
          <Route path="/Collections" component={CollectionPage} />
          <Route path="/Favorites" component={FavoritesPage} />
          <Route exact path="/Cart" component={CartPage} />
          <Route exact path="/Cart/OrderSummary" component={OrderSummary} />
          <Route path="/Cart/OrderSummary/CheckOut" component={CheckOut} />
          <Route path="/Login" component={LoginPage} />
          <Route path="/Logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      </FavoritesContextProvider>
    );
  }

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
};

export default withRouter(App);
