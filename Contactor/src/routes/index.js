import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../views/Main'
import Contact from '../views/SingleContact'

const Stack = createStackNavigator()

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Contacts'>
            <Stack.Screen name ="Contacts" component={Contacts} />
            <Stack.Screen name ="Contact" component={Contact} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes