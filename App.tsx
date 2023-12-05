import React from 'react';
import { NavigationContainer, NavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/Home';
import DummyScreen from './src/screen/Dummy';
import StatisticsScreen from './src/screen/Statistics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GeneralWellnessScreen from './src/screen/GeneralWellness';
import BloodPressureScreen from './src/screen/BloodPressure';

type BottomTabParamList = {
  Home: undefined;
  Statistics: undefined;
  Action: undefined;
  History: undefined;
  Profile: undefined;
};
type RootStackParamList = {
  MainTab: NavigatorScreenParams<BottomTabParamList>;
  GeneralWellness: undefined;
  BloodPressure: undefined;
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Action"
        component={DummyScreen('Action Screen')}
        options={{
          tabBarLabel: 'Action',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={DummyScreen('History Screen')}
        options={{
          tabBarLabel: 'history',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DummyScreen('Profile Screen')}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="MainTab" 
          component={MyTabs} 
        />
        <Stack.Screen 
          name="GeneralWellness" 
          component={GeneralWellnessScreen} 
          options={{
            headerShown: true,
            title: 'General Wellness'
          }}
        />
        <Stack.Screen 
          name="BloodPressure" 
          component={BloodPressureScreen} 
          options={{
            headerShown: true,
            title: 'Blood Pressure'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
