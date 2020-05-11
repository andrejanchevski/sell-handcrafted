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
import ListShopsBuilder from "./containers/ListShopsBuilder/ListShopsBuilder";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <div>
      <Layout>
          <Switch>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/shops" exact component={ListShopsBuilder}/>
              <Route path="/create-product/:categoryName"  exact component={CreateProductForm}/>
              <Route path="/shop/:id" exact component={ShopBuilder}/>
              <Route path="/product/:id"  exact component={ProductBuilder}/>
              <Route path="/create-shop"  exact component={CreateShopForm}/>
              <Route path="/categories/:categoryName" render={()=>
                  <ListProductsBuilder key={window.location}/>   }/>
              <Route path="/" exact component={HomeBuilder}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
