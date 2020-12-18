/**
 *
 * actions.js
 * actions configuration
 */

import { bindActionCreators } from 'redux';
import * as account from './components/Account/actions';
import * as users from './components/Users/actions';
import * as authentication from './components/Authentication/actions';
import * as signup from './components/Signup/actions';
import * as login from './components/Login/actions';
//import * as forgotPassword from './components/ForgotPassword/actions';
//import * as resetPassword from './components/ResetPassword/actions';


export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {

            ...authentication,
            ...signup,
            ...login,
            ...account,
            ...users,

        },
        dispatch
    );
}