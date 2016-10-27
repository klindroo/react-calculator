const defaultState = {
	value: 0,
	totalValue: 0,
	lastValue: 0,
	modifier: undefined,
	lastModifier: undefined,
	valid: true
}

const modify = (state = {}, action) => {
	return Object.assign({}, state, {
		totalValue: state.value,
		modifier: action.value,
		lastModifier: action.value
	});
}

const toggleSign = (state = {}, action) => {
	return Object.assign({}, state, {
		value: -(state.value),
		lastValue: -(state.value)
	});
}

const direct = (state = {}, action) => {
	let val = state.value;
	if (action.value === "sin") {
		const radVal = state.value * Math.PI / 180.0;
		val = Math.sin(radVal);
	} else if (action.value === "cos") {
		const radVal = state.value * Math.PI / 180.0;
		val = Math.cos(radVal);
	}
	return Object.assign({}, state, {
		value: val,
		lastValue: val
	});
}

const calculate = (state = {}, action) => {
	let val = 0;
	switch (state.lastModifier) {
		case '+':
			val = state.totalValue + state.lastValue;
			break;
		case '-':
			val = state.totalValue - state.lastValue;
			break;
		case '×':
			val = state.totalValue * state.lastValue;
			break;
		case '÷':
			val = state.totalValue / state.lastValue;
			break;
		default:
			val = 0;
			break;
	}
	return Object.assign({}, state, {
		value: val,
		totalValue: val
	});
}

export default (state = defaultState, action) => {
	if (action.type === 'PAD_PRESSED') {
		const val = action.value.toLowerCase();
		switch (val) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				let newVal = state.value === 0 || state.modifier ? parseInt(action.value) : parseInt(state.value + action.value);
				return Object.assign({}, state, {
					value: newVal,
					lastValue: newVal,
					modifier: undefined
				});
			case '+':
			case '-':
			case '×':
			case '÷':
				return modify(state, action);
			case '+/-':
				return toggleSign(state, action);
			case 'sin':
			case 'cos':
				return direct(state, action);
			case '=':
				return calculate(state, action);
			case 'c':
				return defaultState;
			default:
				return state;
		}
	} else {
		return state;
	}
}