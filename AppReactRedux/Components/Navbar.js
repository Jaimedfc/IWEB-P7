import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default class Navbar extends React.Component {

	render() {
		return(
			<Text style={styles.navbar}>
				P6-Quiz en React-Redux por Jaime de Frutos Cerezo y Alexander de la Torre Astanin
			</Text>
			);
	}
}

const styles = StyleSheet.create({
	navbar: {

	}
})