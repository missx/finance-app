import React from 'react';
import { View, Modal } from 'react-native';
import { FormLabel, 
		FormInput, 
		FormValidationMessage, 
		List, 
		ListItem, 
		Avatar } from 'react-native-elements'
import { pinkColor } from '../../config/commonStyle/colors';

import styles from './ConfigScreenStyle';

export default class ConfigScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			maxPerWeek: '',
			categories: ['Súper', 'Facturas'],
			modalVisible: false
		}
	}

	static navigationOptions = {
		title: 'Configuration',
	};

	openAddCategoryModal() {
		//this.setState({
		//	categories: this.state.categories.concat(cat)
		//});
	}

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
				<View>
					<View style={styles.categoryTitle}>
						<FormLabel>Categorías:</FormLabel>
						<Avatar
							small
							rounded
							icon={{name: 'add'}}
							onPress={this.openAddCategoryModal()}
							activeOpacity={0.7}
							overlayContainerStyle={{backgroundColor: pinkColor}}
							containerStyle={{float: 'right'}}
						/>
					</View>
					<List containerStyle={{marginBottom: 20}}>
					{
						this.state.categories.map((cat, i) => (
						<ListItem
							key={i}
							title={cat}
						/>
						))
					}
					</List>
				</View>
			</View>
		);
	}
}