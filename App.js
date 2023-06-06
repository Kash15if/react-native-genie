
import { ScrollView, StyleSheet, Text, View } from 'react-native';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './structures/Menu';
import Page from "./structures/Page";


export default function App() {

  const Stack = createNativeStackNavigator();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 22,
    },
    item1: {
      padding: 10,
      fontSize: 18,
      flex: 0.2
    },
    item2: {
      padding: 10,
      fontSize: 18,
      flex: 0.6
    },
    item3: {
      padding: 10,
      fontSize: 18,
      flex: 0.2
    },
  });


  return (



    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Menu"}>
        <Stack.Screen name={"Pages"} component={Page} />
        <Stack.Screen name={"Menu"} component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
