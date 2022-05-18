import { Text } from "react-native";
import theme from "../style";

export default function Label(props){
    return (   <Text style={theme.label}>{props.value}</Text>)
}