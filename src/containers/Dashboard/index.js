import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import product from '../../views/productList';
import ViewProduct from '../../views/viewProduct';
import InCart from '../../views/InCart';
import SellProduct from '../../views/sellProduct';


const Dashboard = () => {
  return (
    <Fragment >
      <Header />
      <div className="relative flex h-screen bg-gray-200">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={product} />
          <Route exact path="/product" component={product} />
          <Route exact path="/viewproduct" component={ViewProduct} />
          <Route exact path="/mycart" component={InCart} />
          <Route exact path="/SellProduct" component={SellProduct} />
        </Switch>

      </div>

    </Fragment>
  );
};

export default Dashboard;
