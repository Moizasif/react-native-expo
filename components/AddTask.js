import React, {useState} from 'react'
import { TextInput, StyleSheet, Text, View, Button} from 'react-native';


const AddTask = ({addTask}) => {
    const [text, setText] = useState('');
    const changeHandler = (val) => {
       setText(val);
    }
    return (
        <View style={styles.addtask}>
              <TextInput 
              style={styles.input}
              placeholder='Add New Task'
              onChangeText={changeHandler}

              />
              <Button 
              title='add task'
              color='blue'
              onPress={() => addTask(text)}
              />
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
  margin: 10,   
  paddingVertical: 6, 
  borderBottomWidth: 1,
  borderBottomColor: 'grey'
  }
})

export default AddTask
