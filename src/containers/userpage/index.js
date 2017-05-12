import { connect } from 'react-redux';

class Userpage extends React.Component {
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
			<div className="page userpage" id="userpage" data-router="#userpage">
				这是用户页
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

export default connect(select)(Userpage);