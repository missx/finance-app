import React from 'react';
import { View, 
    Text, 
    TextInput, 
    Button, 
    Image,
    ScrollView,
    Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { FormLabel, FormInput } from 'react-native-elements';
import { Select, Option } from "react-native-chooser";

import styles from './HomeScreenStyle';
import firebaseMethods from '../../lib/firebaseMethods';
import dateUtils from '../../lib/dateUtils';
import { tealBlueColor } from '../../config/commonStyle/colors';

import FooterNavbarComponent from '../../components/FooterNavbarComponent/FooterNavbarComponent';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: dateUtils.getTodaysDate(),
            title: '',
            price: '',
            category: 'Select category',
            allCategories: [],
            error: ''
        };

        this.sendDetailsToFirebase = this.sendDetailsToFirebase.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentDidMount() {
        firebaseMethods.getCategories().then(res => {
            if (res) {
                this.setState({
                    allCategories: res
                });
            }
        }, err => {
            this.setState({
                error: err
            });
        });
    }

    static navigationOptions = {
		title: 'Home',
	};

	render() {
        
        let selectOptions = this.state.allCategories.map((cat, i) => {
            return (
                <Option value={cat} key={i}>{cat}</Option>
            )
        });
        
		return (
			<View style={styles.homeScreen}> 
                <View style={styles.formView}>
                    <Text style={[styles.gastosTxt, styles.commonText]}>Add Expense:</Text>
                    <View>
                        <FormLabel>Date:</FormLabel>                        
                        <DatePicker
                            style={{width: '80%', alignSelf: 'center'}}
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
                        <FormLabel>Name:</FormLabel>                                                
                        <FormInput placeholder="Name"
                                    onChangeText={(title) => {this.setState({title})}}></FormInput>
                    </View>
                    <View>
                        <FormLabel>Price:</FormLabel>                                                
                        <FormInput placeholder="Price"
                                    onChangeText={(price) => {this.setState({price})}}></FormInput>   
                    </View> 
                    <View style={styles.selectView}>
                        <FormLabel>Category:</FormLabel> 
                        <Select
                            onSelect={this.updateCategory}
                            defaultText={this.state.category}
                            style={styles.selectCategoryBox}>
                            {selectOptions}
                        </Select>
                    </View>
                    <Button onPress={this.sendDetailsToFirebase} title="Save"
                    style={styles.btn}/>   
                    <Text>{this.state.error}</Text>             
                </View> 
                <FooterNavbarComponent navigation={this.props.navigation}/>

			</View>
		);
    }
    
    sendDetailsToFirebase() {
        if (this.state.date !== '' && this.state.title !== '' 
        && this.state.price !=='' && this.state.category !== '') {
            let data = {
                date: this.state.date,
                title: this.state.title,
                price: this.state.price,
                category: this.state.category
            }
            firebaseMethods.saveExpense(data);
        } else {
            this.setState({
                error: 'All fields should be entered'
            });
        }
    }

    updateCategory(cat) {
        this.setState({
            category: cat
        });
    }

    
}