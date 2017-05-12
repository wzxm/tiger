import { connect } from 'react-redux';

import Homepage from './homepage/index.js';

class app extends React.Component {
	render(){
		let { state } = this.props;
		
		return (
			<div className="app">
				<Homepage/>
			</div>
		);
	}
}

//mapStateToProps
function select(state) {
    return {
    	state: state
    }
}

export default connect(select)(app);