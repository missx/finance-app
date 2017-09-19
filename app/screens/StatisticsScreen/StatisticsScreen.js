import React from 'react';
import { View,
		Text } from 'react-native';

import { Bar } from 'react-native-pathjs-charts';


export default class StatisticsScreen extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			expenses: [],
			error: ''
		}
	}

	componentDidMount() {
		let exps = [];
		firebaseMethods.getAllExpenses().then(result => {
			
			console.log(result);
			this.setState({
				expenses: result
			});	
			console.log(typeof this.state.expenses);
		}).catch (err => {
			exps = [];
			this.setState({
				error: err
			});
		}); 
	}

	static navigationOptions = {
		title: 'Statistics',
	};


	render() {

		let data = [
			[{
			"v": 49,
			"name": "apple"
			}, {
			"v": 42,
			"name": "apple"
			}],
			[{
			"v": 69,
			"name": "banana"
			}, {
			"v": 62,
			"name": "banana"
			}]
		];

		let options = {
			width: 300,
			height: 300,
			margin: {
			  top: 20,
			  left: 25,
			  bottom: 50,
			  right: 20
			},
			color: '#2980B9',
			gutter: 20,
			animate: {
			  type: 'oneByOne',
			  duration: 200,
			  fillTransition: 3
			},
			axisX: {
			  showAxis: true,
			  showLines: true,
			  showLabels: true,
			  showTicks: true,
			  zeroAxis: false,
			  orient: 'bottom',
			  label: {
				fontFamily: 'Arial',
				fontSize: 8,
				fontWeight: true,
				fill: '#34495E',
				rotate: 45
			  }
			},
			axisY: {
			  showAxis: true,
			  showLines: true,
			  showLabels: true,
			  showTicks: true,
			  zeroAxis: false,
			  orient: 'left',
			  label: {
				fontFamily: 'Arial',
				fontSize: 8,
				fontWeight: true,
				fill: '#34495E'
			  }
			}
		};

		let noExpensesView = <Text>No expenses</Text>;

		let expensesView = (<Bar data={data} options={options} accessorKey='v'/>);

		return (
			<View >
				{this.state.expenses.length > 0 ? expensesView : noExpensesView}
			</View>
		);
	}
}