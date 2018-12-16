import React from 'react';
import {View,StyleSheet,Text,ListView} from 'react-native';
export default class Navbar extends React.Component {

	constructor(props){
		super(props);
		this.showTips = this.showTips.bind(this)
		this.emptyTips = this.emptyTips.bind(this)
	}

	emptyTips(question){
		if (typeof question !== "undefined" && !this.props.isFinished ){
			if (question.tips.length !== 0){
				return (
					<View style={styles.box}>
						<Text style={styles.text}>Tips:</Text>
						<ListView
						style={styles.list}
						dataSource={this.showTips(question)}
						renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}/>
					</View>
				);
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
	showTips(question){
		return question.tips.map((tip,id)=>{
			return tip;
		})

	}
	render() {
		return this.emptyTips(this.props.question);
	}
}
const styles = StyleSheet.create({
	text:{

	},
	list:{

		},
	box:{

	}});