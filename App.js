import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { FlatList } from 'react-native';

import GenericCard from "./customComponents/cards/GenericCard"
import { useEffect, useState } from 'react';
import Timeline from './customComponents/commons/TimeLine';
import Tabs from './customComponents/tabs/Tabs';

export default function App() {

  const [menuList, setMenuList] = useState();

  useEffect(() => {

    fetch('https://react-native-testapi-node.vercel.app')
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data.nav);
        setMenuList(data.nav)
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });



    // fetch("https://react-native-testapi-node.vercel.app/").then((res) => res.json()).then((data) => {
    //   console.log(JSON.parse(data.nav))
    //   setMenuList(JSON.parse(data.nav))
    // })
  }, [])

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
    <View style={styles.container}>

      <View style={styles.item1}>
        <Tabs />
      </View>
      {/* <GenericCard
        title={"Alexander the Great"}
        content={"Alexander the Great was a Macedonian king and military leader who lived from 356 BCE to 323 BCE. He is widely regarded as one of the greatest military strategists and conquerors in history. Alexander succeeded his father, King Philip II of Macedon, and went on to create one of the largest empires of the ancient world, stretching from Greece to Egypt and as far east as India."} /> */}

      <View style={styles.item2}>
        <Timeline />
      </View>

      <View style={styles.item3}>
        {menuList && <FlatList
          data={menuList.map((item) => ({ key: item.label }))}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />}
      </View>

    </View>
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
