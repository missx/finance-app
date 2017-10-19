import React from 'react';
import { View,
		Text } from 'react-native';
import moment from 'moment';
import { Bar } from 'react-native-pathjs-charts';
import dateUtils from '../../lib/dateUtils';

export default class StatisticsScreen extends React.Component {


	constructor(props) {
		super(props);

		this.state = {
			expenses: [],
			error: '',
			expensesPerMonth: []
		}
	}

	componentDidMount() {
		let exps = [];
		firebaseMethods.getAllExpenses().then(result => {
			this.setState({
				expenses: result
			});	
			this.calculateExpensesPerMonth();
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

	calculateExpensesPerMonth() {
		let firebaseExpenses = this.state.expenses;
 
		firebaseExpenses.forEach((exp, i) => {
			
			//get expense month
			let monthFromExpense = dateUtils.getNameOfMonthAccordingToNumber(moment(exp.date).month());
		
			let monthFound = false;
			let expensesPerMonth = this.state.expensesPerMonth;
			
			for (var j = 0; j < expensesPerMonth.length; j++) {
				if (monthFromExpense === expensesPerMonth[j]["name"]) {
					//if month is in monthlyExp, add value
					expensesPerMonth[j]["value"] += parseInt(exp.price);
					monthFound = true;
				}
			}
			if (!monthFound) {
				this.setState({
					expensesPerMonth: expensesPerMonth.concat(
						{
							"value": parseInt(exp.price),
							"name": monthFromExpense
						}
					)
				});		
			}
		});
	}

	render() {
		
		let data = this.state.expensesPerMonth;
		console.log(data);

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

		let expensesView = (<Bar data={[this.state.expensesPerMonth]} options={options} accessorKey='value'/>);

		return (
			<View >
				{this.state.expenses.length > 0 ? expensesView : noExpensesView}
			</View>
		);
	}
}