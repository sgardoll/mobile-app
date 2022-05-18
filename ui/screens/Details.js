import { Text, View } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import theme from '../style';

export default function Details(){
    //navigation
    const navigation  = useNavigation(); 
    const route = useRoute(); 
    const u = route.params; 
    //JSX
    return (
      <View>
        <Text style={theme.label}>NAME:</Text>
        <Text>{u.firstName} {u.lastName}</Text>
        <Text style={theme.label}>AGE:</Text>
        <Text>{u.age}</Text>
        <Text style={theme.label}>EMAIL:</Text>
        <Text>{u.email}</Text>
        <Text style={theme.label}>PHONE:</Text>
        <Text style={theme.label}>DEPARTMENT:</Text>
        <Text style={theme.label}>ADDRESS:</Text>
        <Text>{`${u.address.street}, ${u.address.suburb}, ${u.address.state}`}</Text>
      </View>
    ); 
  }