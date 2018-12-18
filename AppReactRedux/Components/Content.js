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
				<Image key='img1' source={require('../../assets/sadHomer.png')} style={styles.image}/>
			);
		}else{
            return(
            	<Image key='img2' source={{uri: question.attachment.url}} style={styles.image}/>
			);
		}
	}

	showTimer(isFinished){
		if (isFinished) {
			return null;
		}else{
			return(
				<Text  key='timer' style={styles.timer}>
					Tiempo restante:
					{this.props.time} segundos.
				</Text>
			);
		}
	}

	isFinished(isFinished, question){
			if (isFinished) {
				return(
					<Image key='img3' source={{uri:"http://img.europapress.es/fotoweb/fotonoticia_20141218121003_800.jpg"}} style={styles.image}/>
				);
			}else{
				return(
					this.emptyQuestion(this.props.question)
				);
			}
	}



	render() {
		return(
			<View key='contentView' style={styles.content}>
			{this.isFinished(this.props.isFinished,this.props.question)}
			<View key='QAT' style={styles.questionAnswerTips}>
				<Question key='question' style={styles.question} question={this.props.question}
					isFinished={this.props.isFinished}/>
				<Answer key='answer' question={this.props.question}
					onQuestionAnswer={this.props.onQuestionAnswer}
					isFinished={this.props.isFinished}
					score={this.props.score}
					questions={this.props.questions}/>
				<Tips key='tipskey' question={this.props.question} isFinished={this.props.isFinished}/>
			</View>
				{this.showTimer(this.props.isFinished)}
			</View>
			);
	}
}
const styles = StyleSheet.create({
	content:{
		flex:1,
		margin:20,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	image:{
		flex:4,
		maxHeight:'50%',
		maxWidth:'80%',
		minHeight:'25%',
		minWidth:'80%',
		borderRadius:20,
		borderWidth: 1,
		borderColor: '#000000',
		backgroundColor: '#ffffff'
	},
	questionAnswerTips:{
		flex:5,

	},
	question:{

	},
	timer:{
		flex:1
	}
});