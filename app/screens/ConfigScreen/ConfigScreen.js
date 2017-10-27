import React from 'react';
import { View,
		ScrollView,
		Text,
		Modal } from 'react-native';
import { FormLabel, 
		FormInput, 
		FormValidationMessage, 
		List, 
		ListItem, 
		Avatar,
		Button } from 'react-native-elements';

import styles from './ConfigScreenStyle';
import firebaseMethods from '../../lib/firebaseMethods';
import { pinkColor } from '../../config/commonStyle/colors';

export default class ConfigScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			maxPerMonth: '',
			categories: [],
			modalVisible: false,
			newCategory: '',
			error: ''
		}

		this.toggleModalVisible = this.toggleModalVisible.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.setNewCategory = this.setNewCategory.bind(this);
		this.removeCategory = this.removeCategory.bind(this);
	}

	static navigationOptions = {
		title: 'Configuration',
	};

	componentDidMount() {
		firebaseMethods.getCategories().then(result => {
			this.setState({
				categories: result
			});
		}).catch( err => {
			this.setState({
				error: 'Could not load categories'
			});
		});
	}

	addCategory() {

		let exists = this.state.categories.find((cat, i) => {
			return this.state.newCategory.toLowerCase() == cat.toLowerCase();
		});

		if (!exists) {
			firebaseMethods.saveNewCategory(this.state.newCategory)
			.then(res => {
				this.setState({
					categories: this.state.categories.concat(this.state.newCategory),
					newCategory: ''
				});
			}, err => {
				this.setState({
					error: err.toString(),
					newCategory: ''
				});
			});
		
			this.toggleModalVisible();
		} else {
			this.setState({
				error: 'Category already exists'
			});
		}
	}

	toggleModalVisible() {
		this.setState({modalVisible: !this.state.modalVisible});
	}

	setNewCategory(cat) {
		this.setState({
			newCategory: cat
		});
	}

	removeCategory(cat) {
		let catExists = this.state.categories.find((currentCat, i) => {
			return currentCat.toLowerCase() == cat.toLowerCase();
		});
	
		if (catExists) {
			firebaseMethods.removeCategory(cat).then(res => {
				if (res) {
					this.setState({
						categories: this.state.categories.filter((val, i) => { return val !== cat; })
					});
				}
			}, (err) => {
				this.setState({
					error: err
				});
			});
		}
	}

	render() {
		let modal = (
			<View style={styles.modal}>
				<Modal
					animationType={"slide"}
          			transparent={false}
					visible={this.state.modalVisible}
					>
					<View>
						<FormLabel>Add Category</FormLabel>
						<FormInput placeholder="Category name"
							onChangeText={ (cat) => {this.setNewCategory(cat)}}/>
						<Button
							onPress={this.addCategory}
							raised
							title='Save'
							backgroundColor={ pinkColor }
							style={styles.modalButton}/>
						<Button
							onPress={this.toggleModalVisible}
							raised
							title='Close'
							backgroundColor={ pinkColor }
							style={styles.modalButton}/>
					</View>
				</Modal>
			</View>
		);

		return (
			<ScrollView style={styles.configScreen}>
				{modal}
				<View>
					<FormLabel>Max spending per month:</FormLabel>
					<FormInput 
						placeholder="30000"
						onChangeText={(maxPerMonth) => this.setState({maxPerMonth})}/>
					<FormValidationMessage>Invalid input</FormValidationMessage>
				</View>
				<View>
					<View style={styles.categoryTitle}>
						<FormLabel>Categories:</FormLabel>
						<Avatar
							small
							icon={{name: 'add'}}
							onPress={this.toggleModalVisible}
							activeOpacity={0.7}
							overlayContainerStyle={{backgroundColor: pinkColor, borderRadius: 5}}
							containerStyle={{marginRight: 10}}
						/>
					</View>
					<List containerStyle={{marginBottom: 20}}>
					{
						this.state.categories.map((cat, i) => (
							<ListItem
								key={i}
								title={cat}
								rightIcon={{name: 'clear'}}
								onPressRightIcon={() => this.removeCategory(cat)}
							/>
						))
					}
					</List>
				</View>
			</ScrollView>
		);
	}
}