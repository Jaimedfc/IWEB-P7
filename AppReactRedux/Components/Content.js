import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tips from "./Tips";
import {View,StyleSheet,Text,Image} from 'react-native';
export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.isFinished = this.isFinished.bind(this);
		this.emptyQuestion = this.emptyQuestion.bind(this);
		this.showTimer = this.showTimer.bind(this);
	}


	emptyQuestion(question){
		if (typeof question === "undefined"){
			return(
				<Image source="sadHomer.png" style={styles.image}/>
			);
		}else{
            return(
            	<Image source={{uri: question.attachment.url}} style={styles.image}/>
			);
		}
	}

	showTimer(isFinished){
		if (isFinished) {
			return null;
		}else{
			return(
				<Text  style={styles.timer}>
					Tiempo restante:
					{this.props.time} segundos.
				</Text>
			);
		}
	}

	isFinished(isFinished, question){
			if (isFinished) {
				return(
					<Image source={{uri:"http://img.europapress.es/fotoweb/fotonoticia_20141218121003_800.jpg"}} style={styles.image}/>
				);
			}else{
				return(
					this.emptyQuestion(this.props.question)
				);
			}
	}



	render() {
		return(
			<View style={styles.content}>
			{this.isFinished(this.props.isFinished,this.props.question)}
			<View style={styles.questionAnswerTips}>
				<Question question={this.props.question}
					isFinished={this.props.isFinished}/>
				<Answer question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}
					questions={this.props.questions}/>
				<Tips question={this.props.question} isFinished={this.props.isFinished}/>
			</View>
				{this.showTimer(this.props.isFinished)}
			</View>
			);
	}
}
const styles = StyleSheet.create({
	content:{

	},
	image:{

	},
	questionAnswerTips:{

	},
	timer:{

	}
});