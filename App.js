import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [user, setUser] = useState("Moiz");
  const [fruit, setFruit] = useState({name: "Mango", price: 24});
  const pressHanddler = () => {
    setUser("Asif");
    setFruit({name:"Apple", price: 120})
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>{user} is eating {fruit.name} that has cost {fruit.price}$</Text>
      <View style={styles.button}>
        <TextInput style={styles.textinput}
        multiline
        placeholder="Enter Username"
        onChangeText={(user) => setUser(user)}
        value={user}
        />
        <TextInput style={styles.textinput}
        placeholder="Enter Fruit name"
        onChangeText={(text) => setFruit({...fruit, name:text})}
        value={fruit.name}
        />
        <TextInput style={styles.textinput}
        keyboardType="numeric"
        placeholder="Enter Price"
        onChangeText={(price) => setFruit({...fruit, price:price})}
        value={fruit.price}
        />
        <Button title="Change Name"
        onPress={pressHanddler}
        /></View>
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
  mytext: {
   fontSize: 20
  },
  button: {
    marginTop: 30
  },
  textinput: {
    borderWidth: 1,
    borderColor: "black",
    width:300,
    height:50,
    padding:10,
    margin:10
  }
});
