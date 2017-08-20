
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promise from "redux-promise";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';
import App from './components/app';
import HomePage from './containers/HomePage';
import * as actions from './actions';

import reducers from './reducers';

const reduxMiddleware = applyMiddleware(thunk, createLogger());

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={compose(reduxMiddleware)(createStore)(store)}>
        <MuiThemeProvider>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="*" component={HomePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
    , document.querySelector('.container'));