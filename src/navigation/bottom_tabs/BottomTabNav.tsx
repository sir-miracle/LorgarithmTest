import { StyleSheet, Platform, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sessions from '../../screens/Sessions';
import Appointments from '../../screens/Appointments';
import { colors } from '../../themes/colors';
import SessionsIcon from '../../assets/svgs/el_home.svg'
import AppointmentsIcon from '../../assets/svgs/el_love.svg'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    const tabColor = (focused: boolean) => focused ? colors.brightRed : colors.gray2
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.brightRed,
                tabBarInactiveTintColor: colors.gray2,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    height: Platform.OS == "android" ? 60 : 85,
                    borderTopColor: colors.white
                },
                tabBarItemStyle: { marginBottom: 10 },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    lineHeight: 20,
                    fontFamily: 'Jeko Medium'
                },
                tabBarIconStyle: {
                    marginTop: Platform.OS == "android" ? 10 : 5,
                }
            })}
        >
            <Tab.Screen name="Sessions" component={Sessions}
                options={(route) => {
                    if (route.navigation.isFocused()) {
                    }
                    return {
                        title: 'Sessions',
                        tabBarIcon:
                            ({ focused }) => (<SessionsIcon color={tabColor(focused)} />)
                    }
                }} />

            <Tab.Screen name="Appointments" component={Appointments}
                options={(route) => {
                    if (route.navigation.isFocused()) {
                    }
                    return {
                        title: 'Appointments',
                        tabBarIcon:
                            ({ focused }) => (<AppointmentsIcon color={tabColor(focused)} />)
                    }
                }} />
        </Tab.Navigator>
    )
}

export default BottomTabNav

const styles = StyleSheet.create({})

//screens - sessions, Appointments