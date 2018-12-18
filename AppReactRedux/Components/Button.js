import React from 'react';
import {View,StyleSheet,Button} from 'react-native';
export default class Actionbar extends React.Component {
	constructor(props){
		super(props);
		this.desactivateButton = this.desactivateButton.bind(this);
	}

	desactivateButton(index){
		switch (this.props.buttonName) {
			case "Previous Question":
				if(index===0){
					return true;
				}else {
					return false;
				}
			case "Next Question":
				if(index===9){
					return true;
				}else {
					return false;
				}
			default:
				return false;

		}
	}
	render() {
		return(
			<Button key={this.props.keyB} style={styles.button} accessibilityLabel={this.props.buttonName} disabled={this.desactivateButton(this.props.iCurrentQuestion)} onPress={this.props.buttonFunc} title={this.props.buttonName}/>
			);
	}
}
const styles = StyleSheet.create({
	button:{
		borderRadius: 5
	}
});