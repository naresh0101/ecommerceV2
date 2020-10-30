import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import ProductList from '../../views/productList';
import ViewProduct from '../../views/viewProduct';
import InCart from '../../views/InCart';
import WishList from '../../views/Wishlist';


const Dashboard = () => {
  return (
    <Fragment >
      <Header />
      <div className="relative flex h-screen bg-gray-200">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/viewproduct" component={ViewProduct} />
          <Route exact path="/cart" component={InCart} />
          <Route exact path="/wishlist" component={WishList} />
        </Switch>

      </div>

    </Fragment>
  );
};

export default Dashboard;
