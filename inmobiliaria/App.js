import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App(){
	return(
		<View style={styles.container}>
			<Text>Hello Word!</Text>
		</View>
	);
}



const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alingItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});
