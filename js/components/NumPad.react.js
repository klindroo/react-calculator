import React from 'react';

import NumPadItem from '../components/NumPadItem.react';

export default (props) => {
	return (
		<table className="num-pad">
			<tbody>
				{props.numberPad.map((row, i) => {
					return (
						<tr key={i}>
							{row.map((col, j) => {
								return (
									<td key={j}>
										<NumPadItem
											val={col}
											active={props.state.calculator.modifier === col}
											onPadPress={props.onPadPress}/>
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}