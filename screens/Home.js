import React, {useState} from "react";
import { View, Text, Button, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { global } from "../styles/global";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, didTask } from '../store/taskAction'

const Home = ({navigation}) => {
    // const [tasks, setTasks] = useState([
    //     {"task":"HTML I","done":true, "id": "1"},
    //     {"task":"CSS","done":true, "id": "2"},
    //     {"task":"Responsive design","done":true, "id": "3"},
    //     ])
    
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)
    const [text, setText] = useState('');
    const changeHandler = (val) => {
           setText(val)
    }    

    const submitTask = ( text) => dispatch(addTask(text));
    const removeTask = id => dispatch(deleteTask(id));
    const finishTask = id => dispatch(didTask(id))



   return (
       <View style={global.container}>
           <TextInput 
           style={styles.input}
           placeholder="Add new task"
           onChangeText={changeHandler}
           />
           <Button title="add task" color="blue" onPress={() => submitTask(text)}/>
          <FlatList 
          data={tasks}
          renderItem={({item}) => (
              <TouchableOpacity style={global.item} onPress={() => navigation.navigate("Task",item)}>
           <Text 
           style={ item.done ? null: {fontWeight:'bold'}}
           onPress={() => finishTask(item.id)}
           >{item.task}</Text>
           <Button title="delete" color="red" onPress={() => removeTask(item.id)}/>
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

   } ,
   text: {
       paddingBottom:10
   }
})

export default Home