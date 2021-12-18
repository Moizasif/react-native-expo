import React from "react";
import { View, Text, Button } from "react-native";
import { global } from "../styles/global";

const Home = ({navigation}) => {
    const goToTask = () => {
        navigation.push("Task")
    }
   return (
       <View style={global.container}>
           <Text>Home</Text>
           <Button title="Go to task"
           onPress={goToTask}
           />
       </View>
   )
}

export default Home