import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feed';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="FeedInsta" component={Feed} />  
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    
    
  );
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff' 
    },
    header: {
      heigth: 55,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems: 'center',
      justiyContent: 'space-beteween',
      pading: 5,
  
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1
    },
    logo: {

    },
    send: {
      width: 23,
      height: 23
    }
  }
)