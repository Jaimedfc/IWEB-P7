import React from 'react';
import {StyleSheet,Text} from 'react-native';
export default class Question extends React.Component {

	constructor(props){
		super(props);
		this.gameEnded = this.gameEnded.bind(this);
	}

	gameEnded(finished,question){
		if (finished){
			return(
			<Text style={styles.text}>
				Enhorabuena, has acabado el cuestionario.
			</Text>
			);
		}else{
			if (typeof question !== "undefined"){
				return(
				<Text style={styles.text}>
					{question.question}
				</Text>
				);
			}else{
				return(
				<Text style={styles.text}>
					Lo sentimos mucho,
				</Text>
				);
			}
		}
	}

	render() {
		return this.gameEnded(this.props.isFinished,this.props.question);
	}
}
const styles = StyleSheet.create({
	text:{

	}
});