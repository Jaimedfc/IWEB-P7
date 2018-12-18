import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import QuizScreen from '../Components/QuizScreen';
import React from 'react';

export default class ReduxProvider extends React.Component {

	constructor(props) {
		super(props);


        this.initialState = {
			score:0,
			finished:false,
			currentQuestion:0,
			questions:[],
			timer:300
			  };
		this.store = this.configureStore();
	}

	render() {

		return (

			<Provider style={{flex:1, backgroundColor: '#87CEEB'}} key='provider' store={ this.store}>
				<QuizScreen style={{flex:1, backgroundColor: '#87CEEB'}} key='QuizScreen'/>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, this.initialState);
	}
}
