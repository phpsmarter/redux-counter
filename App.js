import { StyleSheet, View } from 'react-native';

import Entry from './Index'
import React from 'react';

export default class App extends React.Component {
	render() {
		return (
			
				<Entry/>
				
			
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
	
});
