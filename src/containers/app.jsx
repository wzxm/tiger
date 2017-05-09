import React from 'react';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import reducers from '../reducers/index.jsx';
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>

            </Provider>
        )
    }
}