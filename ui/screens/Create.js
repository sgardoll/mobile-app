import {useState} from 'react'; 
import {Text, View,TextInput,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native'; 
import {addUserAsync} from '../services/user.service'
import theme from '../style';

export default function Create(){
    //navigation
    const navigation = useNavigation(); 
    //state
    const [firstName,setFirstName] = useState(''); 
    const [lastName,setLastName] = useState(''); 
    const [age,setAge] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [phone,setPhone] = useState(''); 
    const [department,setDepartment] = useState(''); 
    const [street,setStreet] = useState(''); 
    const [suburb,setSuburb] = useState(''); 
    const [state,setState] = useState(''); 
    const [country,setCountry] = useState(''); 
    //functions
    function submit(){
        let user =  getUserObject(); 
        addUserAsync(user)
            .then(json=>navigation.navigate("Index",{op:'create',data:json}));
    }
    function getUserObject(){
        return {
            firstName,
            lastName,
            age,
            email,
            phone,
            department,
            address:{ 
                street,
                suburb,
                state,
                country 
            }
        };
    }
    //JSX
    return (
        <View>
            <Text style={theme.label}>FIRST NAME:</Text>
            <TextInput style={theme.textInput} value={firstName} onChangeText={setFirstName} />
            <Text style={theme.label}>LAST NAME:</Text>
            <TextInput style={theme.textInput} value={lastName} onChangeText={setLastName} />
            <Text style={theme.label}>AGE:</Text>
            <TextInput style={theme.textInput} value={age} onChangeText={setAge} />
            <Text style={theme.label}>EMAIL:</Text>
            <TextInput style={theme.textInput} value={email} onChangeText={setEmail} />
            <Text style={theme.label}>PHONE:</Text>
            <TextInput style={theme.textInput} value={phone} onChangeText={setPhone} />
            <Text style={theme.label}>DEPARTMENT:</Text>
            <TextInput style={theme.textInput} value={department} onChangeText={setDepartment} />
            <Text style={theme.label}>ADDRESS:</Text>
            <Text style={theme.label}>STREET:</Text>
            <TextInput style={theme.textInput} value={street} onChangeText={setStreet} />
            <Text style={theme.label}>SUBURB:</Text>
            <TextInput style={theme.textInput} value={suburb} onChangeText={setSuburb} />
            <Text style={theme.label}>STATE:</Text>
            <TextInput  style={theme.textInput} value={state} onChangeText={setState} />
            <Text style={theme.label}>COUNTRY:</Text>
            <TextInput  style={theme.textInput} value={country} onChangeText={setCountry} />
            <Pressable onPress={submit}>
                <Text>SAVE</Text>
            </Pressable>
        </View>
    ); 
}