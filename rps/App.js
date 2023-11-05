import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, Linking} from 'react-native';
import Character from './components/Character.js';



export default function App() {
    const [chopResult, setChop] = useState('N/A');//need a better name for this variable then value
    const chop_chart = { 1: "Rock", 2: "Paper", 3: "Scissors" };

    function random_chop() {
        let result = Math.ceil(Math.random() * 3);
        setChop(chop_chart[result]);
        Alert.alert(chop_chart[result]);
    }

  return (
      <View style={styles.container}>
          <Text>{chopResult}</Text>
          <Button title="chop!" onPress={random_chop} />
          <Character />

          <Text> </Text>
          <Button title="More info" onPress={() => Linking.openURL("https://vamp.bynightstudios.com/")}/>
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
