import React from 'react';
import { View, 
    Text, 
    TextInput, 
    Button, 
    Image } from 'react-native';

import styles from './HomeScreenStyle';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            title: '',
            price: ''
        };

        this.sendDetailsToFirebase = this.sendDetailsToFirebase.bind(this);
    }

	render() {
		return (
			<View style={styles.homeScreen}>
				<View style={styles.logoView}>
                    <Image source={require('../../images/Finance_App.png')} style={styles.logo}/>
                </View> 
                <View style={styles.formView}>
                    <Text style={[styles.gastosTxt, styles.commonText]}>Ingresar Gasto:</Text>
                    <View>
                        <Text style={styles.commonText}>Fecha:</Text>                        
                        <TextInput value={this.state.date} 
                                    placeholder="Fecha" 
                                    onChangeText={(date) => {this.setState({date})}}/>
                    </View>
                    <View>
                        <Text style={styles.commonText}>Nombre:</Text>                                                
                        <TextInput value={this.state.title} 
                                    placeholder="Nombre"
                                    onChangeText={(title) => {this.setState({title})}}/>
                    </View>
                    <View>
                        <Text style={styles.commonText}>Precio:</Text>                                                
                        <TextInput value={this.state.price} 
                                    placeholder="Precio"
                                    onChangeText={(price) => {this.setState({price})}}/>   
                    </View> 
                    <Button onPress={this.sendDetailsToFirebase} title="Save"
                    style={styles.btn}/>   
                    <Text>{this.state.error}</Text>             
                </View> 
			</View>
		);
    }
    
    sendDetailsToFirebase() {
        if (this.state.date != '' && this.state.title != '' && this.state.price != '') {
            let data = {
                date: this.state.date,
                title: this.state.title,
                price: this.state.price
            }
            this.props.saveExpense(data);
        } else {
            console.log('here');
            this.setState({
                error: 'All fields should be entered'
            });
        }
    }
}