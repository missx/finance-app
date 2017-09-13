import React from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
		

export default class ConfigScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			maxPerWeek: ''
		}
	}

	static navigationOptions = {
		title: 'Configuration',
	};

	render() {
		return (
			<View >
				<View>
					<FormLabel>Gasto máximo por semana:</FormLabel>
					<FormInput 
						placeholder="5000"
						onChangeText={(maxPerWeek) => this.setState({maxPerWeek})}/>
					<FormValidationMessage>Invalid input</FormValidationMessage>
				</View>
			</View>
		);
	}
}