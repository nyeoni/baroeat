import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Ionicons} from "@expo/vector-icons";

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SpecialScreen from "./SpecialScreen";
import ReservationScreen from "./ReservationScreen";
import SettingScreen from './SettingScreen';
import AccountScreen from './AccountScreen';

const HomeStack = createStackNavigator({
  HomeScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({title: '바로잇'})
});

const SpecialStack = createStackNavigator({
  SpecialScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({title: "오늘의 특가"}),
  initialRouteName: "SpecialScreen"
});

const ReservationStack = createStackNavigator({
  ReservationScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({title: "내 예약"}),
  initialRouteName: "ReservationScreen"
});

const SettingStack = createStackNavigator({
  SettingScreen,
  AccountScreen
}, {
  defaultNavigationOptions: ({navigation}) => ({title: '내 계정'}),
  initialRouteName: 'SettingScreen'
});

const TabNavigator = createBottomTabNavigator({
  "홈": HomeStack,
  "특가": SpecialStack,
  "내 예약": ReservationStack,
  "내 계정": SettingStack

}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let icon;

      switch (routeName) {
        case "홈":
          icon = <Ionicons name="ios-home" size={25} color={tintColor} />;
          break;
        case "특가":
          icon = <Ionicons name="ios-wallet" size={25} color={tintColor} />;
          break;
        case "내 예약":
          icon = <Ionicons name="ios-time" size={25} color={tintColor} />;
          break;
        case "내 계정":
          icon = <Ionicons name="ios-person" size={25} color={tintColor} />;
          break;
        default:
          icon = "▲";
      }
      
      return <Text style={{
        color: focused && "#5600ff" || "#888"
      }}>{icon}</Text>
    }
  }),
  lazy: false,
  tabBarOptions: {
    activeTintColor: "#5600ff",
    inactiveTintColor: "#888"
  }
});

const AppStack = createStackNavigator({
  LoginScreen: LoginScreen,
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({navigation}) => ({header: null})
  }
});

export default createAppContainer(AppStack);
