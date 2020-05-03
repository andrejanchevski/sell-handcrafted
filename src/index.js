import $ from 'jquery'
import Popper from "popper.js";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-svg-core'
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore,combineReducers} from "redux";
import selectReducer from "./store/reducers/selectReducer";
import createShopReducer from "./store/reducers/createShopReducer";
import registerModalReducer from "./store/reducers/registerModalReducer"


const rootReducer=combineReducers({
    selectReducer:selectReducer,
    createShopReducer:createShopReducer,
    registerModalReducer:registerModalReducer
});

const store=createStore(rootReducer);

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
