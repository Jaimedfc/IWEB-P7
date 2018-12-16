import React from 'react';
import {View,StyleSheet,TextInput,Text} from 'react-native';
export default class Answer extends React.Component {

	constructor(props){
		super(props);
		this.emptyQuestion = this.emptyQuestion.bind(this);
		this.gameEnded = this.gameEnded.bind(this);
	}

	emptyQuestion(question){
		if (typeof question === "undefined"){
			return (
				<Text style={styles.text}>no existen preguntas.</Text>
				);
		}else{
			return (
				<View style={styles.box}>
					<Text style={styles.smallText}>Su respuesta:</Text>
					<TextInput style={styles.textInput} placeholder="Mi respuesta" value={question.userAnswer || ""} onChangeText={(e)=>{
			 			this.props.onQuestionAnswer(e.target.value);
			 		}}/>
				</View>
				);
		}
	}

	gameEnded(isFinished,score,question){
	if (isFinished){
			return(
			<Text style={styles.text}>
				Su puntuación es de: {score}/{this.props.questions.length} puntos.
			</Text>
			);
		}else{
			return this.emptyQuestion(question);
		}

	}
	render() {
		return this.gameEnded(this.props.isFinished, this.props.score,this.props.question);
	}
}

const styles = StyleSheet.create({
	text:{

	},
	answer:{

	},
	textInput:{

	},
	box:{

	},
	smallText:{

	}
});