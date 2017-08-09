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
			<View >
				<View></View> 
                <View>
                    <Text style={styles.gastosTxt}>Ingresar Gasto:</Text>
                    <View>
                        <Text >Fecha:</Text>                        
                        <TextInput value={this.state.date} 
                                    placeholder="Fecha" 
                                    onChangeText={(date) => {this.setState({date})}}/>
                    </View>
                    <View>
                        <Text >Nombre:</Text>                                                
                        <TextInput value={this.state.title} 
                                    placeholder="Nombre"
                                    onChangeText={(title) => {this.setState({title})}}/>
                    </View>
                    <View>
                        <Text >Precio:</Text>                                                
                        <TextInput value={this.state.price} 
                                    placeholder="Precio"
                                    onChangeText={(price) => {this.setState({price})}}/>   
                    </View>                 
                </View> 
			</View>
		);
	}
}