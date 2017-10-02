import React from 'react';
import { View, Image } from 'react-native';
import styles from './InitialScreenStyle';

export default class InitialScreen extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        const { navigate } = this.props.navigation;
        console.log('initial');
        setTimeout(() => {
            navigate('Home');
        }, 1500);
    }

	render() {
		return (
			<View >
				<View style={styles.logoView}>
                    <Image source={require('../../images/Finance_App.png')} style={styles.logo}/>
                </View>
			</View>
		);
	}
}