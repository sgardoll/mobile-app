import {TextInput} from 'react-native'; 
import theme from '../style';

export default function TxtInput(props){
    return(<TextInput style={theme.textInput} value={props.value} onChangeText={props.onChangeText} />); 
}