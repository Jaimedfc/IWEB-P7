import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default class Navbar extends React.Component {

	render() {
		return(
			<Text key='NavbarView' style={styles.navbar}>
				P6-Quiz en React-Redux por JFC y ATA
			</Text>
			);
	}
}

const styles = StyleSheet.create({
	navbar: {
		fontSize: 25,
		color: '#2e31ff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		textAlign: 'center',
		//fontFamily:'Cochin',
		fontWeight:'bold',
		marginTop: 20,
		marginLeft: 5,
		marginRight: 5,

	}
})