import React, {useState} from "react";
import { View, Text, Button, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { global } from "../styles/global";
import { useSelector } from "react-redux";

const Home = ({navigation}) => {
    // const [tasks, setTasks] = useState([
    //     {"task":"HTML I","done":true, "id": "1"},
    //     {"task":"CSS","done":true, "id": "2"},
    //     {"task":"Responsive design","done":true, "id": "3"},
    //     ])
    

    const tasks = useSelector(state => state.tasks)
    const [text, setText] = useState('');
    const changeHandler = (val) => {
           setText(val)
    }    



   return (
       <View style={global.container}>
           <TextInput 
           style={styles.input}
           placeholder="Add new task"
           onChangeText={changeHandler}
           />
           <Button title="add task" onPress={() => addTask(text)}/>
          <FlatList 
          data={tasks}
          renderItem={({item}) => (
              <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task",item)}>
           <Text>{item.task}</Text>
           </TouchableOpacity>
          )}
          />
       </View>
   )
}

const styles = StyleSheet.create({
   input : {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'

   } 
    
})

export default Home