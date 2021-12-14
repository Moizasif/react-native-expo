import React from "react";
import { View, StyleSheet, Text } from "react-native";


const Header = () => {
  return (
      <View style={styles.header}>
          <Text style={styles.title}>
              TODO APP
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
   header: {
   paddingTop:50,
   marginTop: 20,
   backgroundColor: "blue",
   height: 90
   },
   title:{
     textAlign: "center",
     color:"white",
     fontSize: 20,
     fontWeight: "bold",
     fontStyle:"italic"
   }
})

export default Header