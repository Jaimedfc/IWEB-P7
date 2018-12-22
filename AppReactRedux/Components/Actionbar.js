import React from 'react';
import Button from "./Button";
import {submit} from "../redux/actions";
import {View,StyleSheet} from 'react-native';


export default class Actionbar extends React.Component {

	constructor(props){
		super(props);
		this.isFinished = this.isFinished.bind(this);
        this.downloadQuestions = this.downloadQuestions.bind(this);
	}

    downloadQuestions() {
        let token = "c003ee94c290a3df3dcd";
        let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token="+token;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.props.onInitQuestions(json)
            })
            .catch(error =>{
                console.log(error)
            });

    }

	isFinished(isFinished,onSubmit,onInitQuestions,oldQuestions,onChangeQuestion,iCurrentQuestion){
		if ( oldQuestions.length !== 0){
			if (isFinished) {
				return(
					<View key='Actionbar1' style={styles.actionBarBot}>
						<Button key='boton1' buttonName="Play new game"  keyB= "ButtonNewGame" buttonFunc={ () => {
							return onInitQuestions();
						}
						}/>
					</View>
				);
			}else{
				return(
					<View key='Actionbar2' style={styles.actionBar}>
						<View key='ActionbarTop' style={styles.actionBarTop}>
							<View>
							<Button key='botonQuizScreen' buttonName="<" keyB= "ButtonBack" buttonFunc={ () => {
								this.props.goBack();
							}
							}/>
							</View>
							<View>
							<Button key='boton1' buttonName="Previous" keyB= "ButtonPrevQuestion"  iCurrentQuestion={this.props.iCurrentQuestion} buttonFunc={ () => {
								if (iCurrentQuestion!==0){
									return onChangeQuestion(iCurrentQuestion-1);
								}else{
									return;
								}
							}
							}/>
							</View>
							<View>
							<Button key='boton2' buttonName="Submit" keyB= "ButtonSubmit" buttonFunc={ () => {
								return onSubmit(oldQuestions);
							}
							}/>
							</View>
							<View>
							<Button key='boton3' buttonName="Next" iCurrentQuestion={this.props.iCurrentQuestion} keyB= "ButtonNextQuestion" buttonFunc={ () => {
								if (iCurrentQuestion===(oldQuestions.length-1)){
									return;
								}else{
									return onChangeQuestion(iCurrentQuestion+1);
								}
							}
							}/>
							</View>
						</View>
						<View key='ActionbarBot' style={styles.actionBarBot}>
							<Button key='save' buttonName="Save" keyB= "ButtonSave" buttonFunc={ () => {
								return this.props.saveData();
							}
							}/>
							<Button key='load' buttonName="Load" keyB= "ButtonLoad"  buttonFunc={ () => {
								return this.props.loadData();
							}
							}/>
							<Button key='delete' buttonName="Remove" keyB= "ButtonDelete" buttonFunc={ () => {
								return this.props.deleteData();
							}
							}/>
						</View>

				</View>
				);
			}
		}else{
			return(
				<View key='actionbar3' style={styles.actionBarTop}>
					<Button key='boton4' buttonName="New Game" keyB="ButtonInitQuestion"  className="ActionBar" buttonFunc={ () => {
						return onInitQuestions();
					}
					}/>
					<Button key='save2' buttonName="Save" keyB= "ButtonSave2" buttonFunc={ () => {
						return this.props.saveData();
					}
					}/>
					<Button key='load2' buttonName="Load" keyB= "ButtonLoad2"  buttonFunc={ () => {
						return this.props.loadData();
					}
					}/>
					<Button key='delete2' buttonName="Remove" keyB= "ButtonDelete2" buttonFunc={ () => {
						return this.props.deleteData();
					}
					}/>
				</View>
			);
		}
	}
	render() {
		return this.isFinished(this.props.isFinished,this.props.onSubmit,this.downloadQuestions,this.props.questions,this.props.onChangeQuestion,this.props.iCurrentQuestion);
	}
}

const styles = StyleSheet.create({
	actionBarTop:{

		marginBottom:5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	actionBarBot:{

		marginTop:5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		//alignItems: 'center'
	},
	actionBar:{
		flex:1,
		margin:10,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
