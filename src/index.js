import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { Login } from './components/Login'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './components/SignUp/SignUp';


// function verifyLogin(nextState, replace) {
//     if (localStorage.getItem('usersToken') === null) {
//         replace('/');
//     }
// }

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/signup" exact={true} component={SignUp} />
            {/* <Route path="*" exact={true} component={Error404Page} /> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
