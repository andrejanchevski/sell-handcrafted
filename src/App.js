import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route,Switch} from "react-router-dom";
import HomeBuilder from "./containers/HomeBuilder/HomeBuilder";
import ProductBuilder from "./containers/ProductBuilder/ProductBuilder";
import ShopBuilder from "./containers/ShopBuilder/ShopBuilder";
import CreateShopForm from "./containers/CreateShopForm/CreateShopForm";


function App() {
  return (
    <div>
      <Layout>
          <Switch>
              <Route path="/" exact component={CreateShopForm}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
