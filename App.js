import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/components/Detail';
import Main from './src/components/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='main'
            component={Main} />
        <Stack.Screen
            name='Detail'
            component={Detail} />

      
      </Stack.Navigator>
      

      <StatusBar style='auto' />
    </NavigationContainer>

  )
  
};

export default App;