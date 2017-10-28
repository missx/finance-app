import React from 'react';
import { ScrollView, View, Text, Picker } from 'react-native';
import { List, ListItem } from 'react-native-elements'

import firebaseMethods from '../../lib/firebaseMethods';
import styles from './HistoryScreenStyle';

export default class HistoryScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			expenses: [],
			displayedMonth: '',
			monthsAvailable: ['October', 'November']
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
		let listItems = this.state.expenses.map((v, i) => {
			return (
				<ListItem
					key={i}
					title={v.title}
					subtitle={
						<View>
							<View style={styles.priceView}>
								<Text>${v.price}</Text>
							</View>
							<View style={styles.catAndDateView}>
								<Text style={styles.categoryView}>{v.category}</Text>
								<Text style={styles.dateView}>{v.date}</Text>
							</View>
						</View>
					}
				/>
			)
		});

		let monthsAvailable = this.state.monthsAvailable.map((v, i) => {
			return (
				<Picker.Item label={v} value={v} key={i}/>
			)
		});

		return (
			<ScrollView>
				<View>
					<Picker
						selectedValue={this.state.displayedMonth}
						onValueChange={(itemValue, itemIndex) => this.setState({displayedMonth: itemValue})}>
						{monthsAvailable}
					</Picker>
				</View>
				<List>
					{listItems}
				</List>
			</ScrollView>
		);
	}
}