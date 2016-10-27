import React from 'react';

class NumPadItem extends React.Component {

	constructor(props) {
	    super(props);
	    this.sendEvent = this.sendEvent.bind(this);
	}

	sendEvent(e) {
		e.preventDefault();
		this.props.onPadPress(this.props.val);
	}
     
	render() {
		const { val, active } = this.props;
		return (
			<button
				className={"btn-" + val.toLowerCase() + (active ? " active" : "")}
				onTouchEnd={this.sendEvent}
				onClick={this.sendEvent}>
				{val}
			</button>
		);
	}
}

export default NumPadItem;