import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from './components/Home.js'
import {Destination} from './components/Destinations.js'
import {Restaurant} from './components/Restaurants.js'




const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRoute="Home">
        <Tab.Screen
          name="My BLists"
          component={Home}
        />
        <Tab.Screen
          name="My Destinations"
          component={Destination}
        />
        <Tab.Screen
          name="My Restaurants"
          component={Restaurant}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E311D6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity:2.0,

  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  
  
});
