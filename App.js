import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/screens/HomeScreen/HomeScreen';
import HistoryComponent from './app/screens/HistoryScreen/HistoryScreen';
import StatisticsComponent from './app/screens/StatisticsScreen/StatisticsScreen';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    History: { screen: HistoryComponent },
    Statistics: { screen: StatisticsComponent }
});

export default App;