import React from 'react';
import { View, 
        TouchableHighlight } from 'react-native';
import { Icon,
        ButtonGroup } from 'react-native-elements';

import styles from './FooterNavbarComponentStyle';

export default class FooterNavbarComponent extends React.Component {

    constructor () {
        super()
        this.state = {
          selectedIndex: -1
        }
        this.goToOption = this.goToOption.bind(this);
    }

    goToOption = (selectedIndex) => {
        this.setState({selectedIndex})
    }

    render() {
        const settingsBtn = () => (<Icon
            name='settings'
            color='#00aced' />);


        const historyBtn = () => (<Icon
                        name='history'
                        color='#00aced' />);

        const statisticsBtn = () => (<Icon
                    name='trending-up'
                    color='#00aced' />);

        const buttons = [{ element: settingsBtn }, { element: historyBtn }, { element: statisticsBtn }];
        const { selectedIndex } = this.state;
        
        return (
            <View >
                <ButtonGroup
                    onPress={this.goToOption}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={styles.buttonGrp} />
            </View>

        )
    }
}