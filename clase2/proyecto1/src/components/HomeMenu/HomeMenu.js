import React, { Component } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import AntDesign from '@expo/vector-icons/AntDesign';
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";


function HomeMenu (){
return (

        <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
            <Tab.Screen name="Home" component={Home} options={{tabBarIcon: () => (
                <AntDesign name="home" size={24} color="black" />
            ), headerShown: false 
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (
                <AntDesign name="profile" size={24} color="black" />
            ), headerShown: false 
            }}/>
        </Tab.Navigator>
)
}

export default HomeMenu