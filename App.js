import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';

import HomeScreen from './app/screens/HomeScreen/HomeScreen';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDR_Sp3rE6_BGr6cwGkQJE4oQ9dwvNxBoc",
	authDomain: "finance-app-4a5b0.firebaseapp.com",
	databaseURL: "https://finance-app-4a5b0.firebaseio.com",
	projectId: "finance-app-4a5b0",
	storageBucket: "finance-app-4a5b0.appspot.com",
messagingSenderId: "100418400779"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<HomeScreen saveEntry={this.saveExpense}/>
			</View>
		);
	}

	saveExpense(data) {
		db.ref('expenses').set({
			date: data.date,
			title: data.title,
			price : data.price
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#EA8888',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
