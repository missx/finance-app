import React from 'react';
import { View, 
    Text, 
    TextInput, 
    Button, 
    Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

import styles from './HomeScreenStyle';
import firebaseMethods from '../../lib/firebaseMethods';
import dateUtils from '../../lib/dateUtils';
import { tealBlueColor } from '../../config/commonStyle/colors';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: dateUtils.getTodaysDate(),
            title: '',
            price: '',
        };

        this.sendDetailsToFirebase = this.sendDetailsToFirebase.bind(this);
    }

    static navigationOptions = {
		title: 'Finance App',
	};

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
                        <DatePicker
                            style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Fecha"
                            format="YYYY-MM-DD"
                            minDate={dateUtils.addOrSubtractYears(this.state.date, 1, false)}
                            maxDate={dateUtils.addOrSubtractYears(this.state.date, 1, true)}
                            confirmBtnText="OK"
                            cancelBtnText="Cancelar"
                            showIcon={true}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    borderColor: tealBlueColor
                                }
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                      />
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
            firebaseMethods.saveExpense(data);
        } else {
            console.log('here');
            this.setState({
                error: 'All fields should be entered'
            });
        }
    }

    
}