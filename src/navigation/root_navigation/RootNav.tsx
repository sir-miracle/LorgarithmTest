import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNav from '../bottom_tabs/BottomTabNav';
import BookSessions from '../../screens/BookSessions';


const Stack = createNativeStackNavigator();

const RootNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
            <Stack.Screen name="BookSessions" component={BookSessions} />
        </Stack.Navigator>
    )
}

export default RootNav

