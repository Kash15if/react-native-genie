import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import GenericCard from "./customComponents/cards/GenericCard"

export default function App() {
  return (
    <View style={styles.container}>
      <GenericCard
        title={"Alexander the Great"}
        content={"Alexander the Great was a Macedonian king and military leader who lived from 356 BCE to 323 BCE. He is widely regarded as one of the greatest military strategists and conquerors in history. Alexander succeeded his father, King Philip II of Macedon, and went on to create one of the largest empires of the ancient world, stretching from Greece to Egypt and as far east as India."} />
      <Text>Abdv</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
