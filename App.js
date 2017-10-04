import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import ConfigScreen from './app/screens/ConfigScreen/ConfigScreen';
import HistoryScreen from './app/screens/HistoryScreen/HistoryScreen';
import StatisticsScreen from './app/screens/StatisticsScreen/StatisticsScreen';
import InitialScreen from './app/screens/InitialScreen/InitialScreen';

const App = StackNavigator({
    
    Home: { screen: HomeScreen },
    Initial: { screen: InitialScreen },
    Config: { screen: ConfigScreen },
    History: { screen: HistoryScreen },
    Statistics: { screen: StatisticsScreen }
});

export default App;