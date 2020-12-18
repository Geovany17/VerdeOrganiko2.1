/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//import { reducer as notifications } from 'react-notification-system-redux';

// import reducers

import signupReducer from './components/Signup/reducer';
import loginReducer from './components/Login/reducer';
import adminReducer from './components/Admin/reducer';
import usersReducer from './components/Users/reducer';
import accountReducer from './components/Account/reducer';

import authenticationReducer from './components/Authentication/reducer';



const createReducer = history =>
    combineReducers({
        router: connectRouter(history),
        // notifications,
        // applicaiton: applicationReducer,
        // homepage: homepageReducer,
        signup: signupReducer,
        login: loginReducer,

        //navigation: navigationReducer,
        authentication: authenticationReducer,
        //cart: cartReducer,
        //newsletter: newsletterReducer,
        //customer: customerReducer,
        admin: adminReducer,
        account: accountReducer,

        users: usersReducer,
        // product: productReducer,
        // category: categoryReducer,
        // brand: brandReducer,
        // menu: navigationMenuReducer,
        // shop: shopReducer,
        // merchant: merchantReducer,
        // contact: contactReducer,
        // order: orderReducer
    });

export default createReducer;