import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import theme from '../style';

export default function User(props){
    //navigation
    const navigation = useNavigation(); 
    let u = props.user.item; 
    return (
        <View style={theme.userTile}>
            <View>
                <Text style={{backgroundColor:'red'}}>{u.firstName} {u.lastName}</Text>
            </View>
            <View style={{backgroundColor:'yellow',display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <Pressable  style={theme.userTileButton} onPress={()=>navigation.navigate("Details",u)}>
                    <Text  style={theme.userTileButtonText}>Details</Text>
                </Pressable>
                <Pressable  style={theme.userTileButton} onPress={()=>navigation.navigate("Edit",u)}>
                    <Text  style={theme.userTileButtonText}>Edit</Text>
                </Pressable>
                <Pressable  style={theme.userTileButton} onPress={()=>navigation.navigate("Delete",u)}>
                    <Text  style={theme.userTileButtonText}>Delete</Text>
                </Pressable>
            </View>      
        </View>
    ); 
}