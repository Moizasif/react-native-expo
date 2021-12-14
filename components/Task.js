import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const Task = ({item}) => {
    return (
        <TouchableOpacity style={styles.item}>
           <Text>{item.task}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:15,
        borderColor:'black',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
        borderStyle:"dotted"

    }
})

export default Task
