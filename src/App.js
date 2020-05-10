import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route,Switch} from "react-router-dom";
import HomeBuilder from "./containers/HomeBuilder/HomeBuilder";
import ShopBuilder from "./containers/ShopBuilder/ShopBuilder";
import CreateShopForm from "./containers/CreateShopForm/CreateShopForm";
import ListProductsBuilder from "./containers/ListProductsBuilder/ListProductsBuilder";
import ProductBuilder from "./containers/ProductBuilder/ProductBuilder";
import CreateProductForm from "./containers/CreateProductForm/CreateProductForm";



function App() {
  return (
    <div>
      <Layout>
          <Switch>
              <Route path="create-product" component={CreateProductForm}/>
              <Route path="/shop/:id" component={ShopBuilder}/>
              <Route path="/product/:id" component={ProductBuilder}/>
              <Route path="/create-shop" component={CreateShopForm}/>
              <Route path="/categories/:categoryName" component={ListProductsBuilder}/>
              <Route path="/" exact component={HomeBuilder}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
