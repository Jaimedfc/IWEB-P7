import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import {questionAnswer} from '../redux/actions';
import {submit} from '../redux/actions';
import {changeQuestion} from '../redux/actions';
import {initQuestions} from '../redux/actions';
import {timer} from '../redux/actions';
import {View,AsyncStorage,Alert} from 'react-native';



class QuizScreen extends Component {

    componentDidMount() {

        let token = "c003ee94c290a3df3dcd";
        let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token="+token;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                this.props.dispatch(initQuestions(json))
            })
            .catch(error =>{
                console.log(error)
            });
        var intervalo = setInterval(() =>{
            this.props.dispatch(timer(this.props.timer-1));
            if (this.props.timer===0){
                this.props.dispatch(submit(this.props.questions))
            }

        },1000);


    }

    async loadData(){
        try{
            var storedState = await AsyncStorage.getItem('@P7_2018_IWEB:quiz');
            if (storedState !== null){
                var state = JSON.parse(storedState);
                this.props.dispatch(initQuestions(state));
                Alert.alert(
                    "Alert",
                    "Your questions have been loaded.",
                    [
                        {text:'OK',onPress:() => console.log('OK pressed')}
                    ],
                    { cancelable: false}
                );
            }else {
                Alert.alert(
                    "Alert",
                    "There are no questions saved.",
                    [
                        {text:'OK',onPress:() => console.log('OK pressed')}
                    ],
                    { cancelable: false}
                );
            }
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be loaded.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }
    }

    async saveData(){
        try{
            var currentQuestions = JSON.stringify(this.props.questions);
            await AsyncStorage.setItem('@P7_2018_IWEB:quiz', currentQuestions)
                .then(
            Alert.alert(
                "Alert",
                "Your questions have been saved.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            ));
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be saved.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }
    }

    async deleteData(){
        try{
            await AsyncStorage.removeItem('@P7_2018_IWEB:quiz')
                .then(
            Alert.alert(
                "Alert",
                "Your questions have been deleted.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            ));
        }catch (e) {
            console.log(e);
            Alert.alert(
                "Alert",
                "Your questions couldn't be deleted.",
                [
                    {text:'OK',onPress:() => console.log('OK pressed')}
                ],
                { cancelable: false}
            );
        }

    }
  render() {
    return (
      <View key='QuizScreenView' style={{flex:1,flexDirection:'column', justifyContent:'space-around', alignItems:'center',backgroundColor: '#87CEEB'}}>
        <Navbar key='Navbar' style={{ justifyContent:'flex-start'}}/>
        <Game key='Game' style={{flex:1, justifyContent:'center', alignItems:'center'}}
              question={this.props.questions[this.props.currentQuestion]}
              score={this.props.score}
              isFinished={this.props.finished}
              iCurrentQuestion={this.props.currentQuestion}
              questions={this.props.questions}
              time={this.props.timer}
              goBack={this.props.navigation.goBack}
              saveData={this.saveData.bind(this)}
              loadData={this.loadData.bind(this)}
              deleteData={this.deleteData.bind(this)}
              onQuestionAnswer={(answer) => {
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
              }}
              onChangeQuestion={(nextQuestion)=>{
                this.props.dispatch(changeQuestion(nextQuestion))
              }}
              onSubmit={(questions)=>{
                this.props.dispatch(submit(questions))
              }}
              onInitQuestions={(questions)=>{
                this.props.dispatch(initQuestions(questions))
              }} />
      </View>
      );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(QuizScreen);
