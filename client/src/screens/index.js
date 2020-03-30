import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './register';

const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen
					name="login"
					options={{ headerShown: false }}
					component={Login}
				/>
				<Stack.Screen
					name="register"
					options={{ headerShown: false }}
					component={Register}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}