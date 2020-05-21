// import $ from 'jquery'
// import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-svg-core'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import selectReducer from "./store/reducers/selectReducer";
import createShopReducer from "./store/reducers/createShopReducer";
import registerModalReducer from "./store/reducers/registerModalReducer"
import createProductReducer from "./store/reducers/createProductReducer"
import tableAttributeReducer from './store/reducers/tableAttributeReducer'
import categoryReducer from './store/reducers/categoryReducer'
import productReducer from './store/reducers/productReducer'
import shopReducer from './store/reducers/shopReducer'
import allShopsReducer from './store/reducers/allShopsReducer'


const rootReducer=combineReducers({
    selectReducer:selectReducer,
    createShopReducer:createShopReducer,
    registerModalReducer:registerModalReducer,
    createProductReducer:createProductReducer,
    tableAttributeReducer:tableAttributeReducer,
    categoryReducer:categoryReducer,
    productReducer:productReducer,
    shopReducer:shopReducer,
    allShopsReducer:allShopsReducer
});



const store=createStore(rootReducer,applyMiddleware(thunk));
const app=(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
