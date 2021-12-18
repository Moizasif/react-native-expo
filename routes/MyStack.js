import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Task from '../screens/Task';


const Stack = createNativeStackNavigator()

const MyStack = () => {
   return(
       <Stack.Navigator
       screenOptions={{
         headerStyle: {
            backgroundColor:'red',
         },
         headerTintColor: 'white',
         headerTitleStyle:{
            fontWeight: 'bold'
         }
      }}
       >
           <Stack.Screen name="Home" component={Home}  />
           <Stack.Screen name="Task" component={Task}  
           options={({route})=>({title:route.params.task})}
           />
        </Stack.Navigator>
   )
}

export default MyStack;