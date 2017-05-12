import { fromJS } from 'immutable';

export default (state = {
    
}, action) => {
    switch (action.type) {
        case 'home/onChecked':
            return fromJS(state).set("data", action).toJS();
        default:
            return state;
    }
};