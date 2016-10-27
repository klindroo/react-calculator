import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { calulatorApp } from './reducers';
import numberPad from './numberPad';
import Display from './components/Display.react';
import NumPad from './components/NumPad.react';

const store = createStore(calulatorApp);

const Calculator = (props) => {
	return (
		<div className="calculator">
			<Display value={props.state.calculator.value} />
			<NumPad numberPad={numberPad} {...props} />
		</div>
	);
}

const render = () => {
	ReactDOM.render(
		<Calculator
			state={store.getState()}
			onPadPress={(val) => {
				store.dispatch({type: 'PAD_PRESSED', value: val})
			}}/>, document.getElementById('root'));
}

store.subscribe(render);
render();

