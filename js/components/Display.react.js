import React from 'react';

import formatNumber from '../utils/formatNumber';

export default (props) => {
	// decrease font size after every 3rd number so that large numbers still fit inside smaller screens
	const fontSize = 50 - (Math.ceil((""+props.value).length / 3.0) * 3);
	return (
		<div className="display">
			<label className="display-value" style={{fontSize: fontSize}}>{formatNumber(props.value)}</label>
		</div>
	);
}