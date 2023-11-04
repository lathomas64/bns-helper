import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';





export default function App() {
    const [chopResult, setChop] = useState('N/A');//need a better name for this variable then value
    const [blood, setBlood] = useState(12);
    const [willpower, setWillpower] = useState(6);
    const [health, setHealth] = useState(9);
    const maxHealth = 9;
    const maxBlood = 12;
    const maxWillpower = 6;

    function random_chop() {
        let result = Math.ceil(Math.random() * 3);
        switch (result) {
            case 1:
                setChop("Rock");
                Alert.alert(chopResult);
                break;
            case 2:
                setChop("Paper");
                break;
            case 3:
                setChop("Scissors");
                break;
        }
        
    }
  return (
    <View style={styles.container}>
          <Text>{chopResult}</Text>
          <Button title="chop!" onPress={random_chop}/>
          <Text>Blood {blood}/{maxBlood }</Text>
          <Button title="spend blood" onPress={() => setBlood(blood - 1) }/>
          <Button title="feed" onPress={() => setBlood(maxBlood) }/>
          <Text>Willpower {willpower}/{maxWillpower}</Text>
          <Button title="spend willpower" onPress={() => setWillpower(willpower - 1) }/>
          <Button title="refresh willpower" onPress={() => setWillpower(maxWillpower)} />
          <Text>Health {health}/{maxHealth}</Text>
          <Button title="take damage" onPress={() => setHealth(health - 1)} />
          <Button title="heal" onPress={() => setHealth(Math.min(health + 1, maxHealth))} />
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
