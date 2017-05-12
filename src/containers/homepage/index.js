// import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class Homepage extends React.Component {
	constructor(props){
        super(props);
    }

	componentDidMount() {
		let { dispatch } = this.props;
	}

	componentDidUpdate() {
		// window.homepageIscroll && window.homepageIscroll.refresh();
	}

	render(){
		let { state, dispatch } = this.props;
		return (
			<div className="page homepage" id="homepage" data-router="#homepage">
				这是首页
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

export default connect(select)(Homepage);