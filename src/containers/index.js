import App from './app.js';

import reducers from '../reducers/index.js';

var DOM = require('react-router');
console.log(DOM);

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import User from './userpage/index.js';

const store = createStore(reducers);
class Root extends React.Component {
    componentDidMount() {
        
    }
	render () {
		return (
			<Provider store={store} >
				<App/>
			</Provider>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById("container"));

// function cookie(name, value, options) {
//     if (typeof value != 'undefined') { // name and value given, set cookie(设置或者删除)
//         options = options || {};
//         //删除cookie
//         if (value === null) {
//             value = '';
//             options.expires = -1;
//         }
//         var expires = '';
//         if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
//             var date;
//             if (typeof options.expires == 'number') {
//                 date = new Date();
//                 date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
//             } else {
//                 date = options.expires;
//             }
//             expires = '; expires=' + date.toUTCString();
//         }
//         var path = options.path ? '; path=' + (options.path) : '';
//         var domain = options.domain ? '; domain=' + (options.domain) : '';
//         var secure = options.secure ? '; secure' : '';
//         document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');

//     } else {
//         //取cookie
//         var cookieValue = null;
//         if (document.cookie && document.cookie != '') {
//             var cookies = document.cookie.split(';');
//             for (var i = 0; i < cookies.length; i++) {
//                 var cookie = (cookies[i]).trim();
//                 if (cookie.substring(0, name.length + 1) == (name + '=')) {
//                     cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                     break;
//                 }
//             }
//         }
//         return cookieValue;
//     }
// }