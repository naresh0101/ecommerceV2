import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Products from '../../views/products';
import Product from '../../views/product';
import CartOrWishlist from '../../views/InCart';
import InCart from '../../views/InCart';
import WishList from '../../views/Wishlist';


const Dashboard = () => {
  return (
    <Fragment >
      <Header />
      <div className="relative flex h-screen bg-gray-200">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/cart" component={InCart} />
          <Route exact path="/wishlist" component={WishList} />
        </Switch>

      </div>

    </Fragment>
  );
};

export default Dashboard;
