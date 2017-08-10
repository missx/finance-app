import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './HomeScreenStyle';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            title: '',
            price: ''
        };
    }

	render() {
		return (
			<View style={styles.homeScreen}>
				<View style={styles.logoView}></View> 
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
                </View> 
			</View>
		);
    }
    
    sendDetailsToFirebase() {

    }
}