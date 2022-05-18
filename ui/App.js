import {NavigationContainer} from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './screens/Index'; 
import Details from './screens/Details';
import Create from './screens/Create';
import Edit from './screens/Edit';
import Delete from './screens/Delete';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Index">
          <Stack.Screen name="Index" component={Index} options={{ title: 'MY CONTACTS' }}/>
          <Stack.Screen name="Details" component={Details} options={{ title: 'CONTACT DETAILS' }} />
          <Stack.Screen name="Create" component={Create} options={{ title: 'ADD CONTACT' }}/>
          <Stack.Screen name="Edit" component={Edit} options={{ title: 'UPDATE CONTACT' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{ title: 'DELETE CONTACT' }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ); 
}