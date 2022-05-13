import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading, Search, Playing, Home, Songs, Favourite, Recent, Playlists, Playlist } from './screens';
import { SCREENS } from '../constants';

const Stack = createStackNavigator();
const StackNavigation = () => (
	<Stack.Navigator >
		<Stack.Screen name={SCREENS.LOADING} component={Loading} />
		<Stack.Screen name={SCREENS.SEARCH} component={Search} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.PLAYING} component={Playing} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.HOME} component={Home} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.SONGS} component={Songs} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.FAVOURITE} component={Favourite} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.RECENT} component={Recent} options={{headerShown:false}}/>
		<Stack.Screen name={SCREENS.PLAYLISTS} component={Playlists} options={{headerShown:false}} />
		<Stack.Screen name={SCREENS.PLAYLIST} component={Playlist} options={{headerShown:false}} />
	</Stack.Navigator>
);

const Index = () => {
	return (
		<NavigationContainer>
			<StackNavigation />
		</NavigationContainer>
	);
};

export default Index;
