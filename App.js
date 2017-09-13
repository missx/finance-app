import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import ConfigScreen from './app/screens/ConfigScreen/ConfigScreen';
import HistoryScreen from './app/screens/HistoryScreen/HistoryScreen';
import StatisticsScreen from './app/screens/StatisticsScreen/StatisticsScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Config: { screen: ConfigScreen },
    History: { screen: HistoryScreen },
    Statistics: { screen: StatisticsScreen }
});

export default App;