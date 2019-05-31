import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


// function verifyLogin(nextState, replace) {
//     if (localStorage.getItem('usersToken') === null) {
//         replace('/');
//     }
// }

ReactDOM.render((
    <App /> , (
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            {/* <Route path="/profile" component={Profile} onEnter={verifyLogin} />
            <Route path="/gallery" component={SkirtsGallery} onEnter={verifyLogin} /> */}
        </Router>
    )),
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
