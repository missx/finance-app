import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'

import firebaseMethods from '../../lib/firebaseMethods';

export default class HistoryScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expenses: [],
		}
	}

	componentDidMount() {
		firebaseMethods.getAllExpenses().then((res) => {
			this.setState({
				expenses: res
			});
		console.log(this.state.expenses);
		
		});
		
	}

	static navigationOptions = {
		title: 'History',
	};

	render() {
		let listItems = this.state.expenses.forEach((v, i) => {
 console.log("v ", v);
			<ListItem
				key={i}
				title={v.title}
				subtitle={
					<View>
						<View>
							<Text>{v.price}</Text>
						</View>
						<View>
							<Text>{v.category}</Text>
							<Text>{v.date}</Text>
						</View>
					</View>
				}
			/>
		});

		return (
			<ScrollView>
				<List>
					{listItems}
				</List>
			</ScrollView>
		);
	}
}