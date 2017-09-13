import React from 'react';
import { ScrollView } from 'react-native';

import firebaseMethods from '../../lib/firebaseMethods';

export default class HistoryScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expenses: []
		}
	}

	componentDidMount() {
		let exps = firebaseMethods.getAllExpenses();
		this.setState({
			expenses: exps
		});
	}
	static navigationOptions = {
		title: 'History',
	};

	render() {
		return (
			<ScrollView >
				
			</ScrollView>
		);
	}
}