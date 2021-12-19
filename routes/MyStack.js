import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import About from '../screens/About';


const Stack = createNativeStackNavigator()
const screenOptionStyle = {
   headerStyle: {
      backgroundColor:'red',
   },
   headerTintColor: 'white',
   headerTitleStyle:{
      fontWeight: 'bold'
   }
}

const AboutStack = () => {
   return(
      <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="About" component={About}  />
      </Stack.Navigator>
   )
}

const HomeStack = () => {
   return(
       <Stack.Navigator
       screenOptions={screenOptionStyle}
       >
           <Stack.Screen name="Home" component={Home}  />
           <Stack.Screen name="Task" component={Task}  
           options={({route})=>({title:route.params.task})}
           />
        </Stack.Navigator>
   )
}

export {HomeStack,AboutStack};