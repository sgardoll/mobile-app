import {useState} from 'react'; 
import {Text, View,TextInput,Pressable} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native'; 
import TxtInput from '../components/TxtInput'; 
import Label from '../components/Label';
import {updateUserAsync} from '../services/user.service'
import theme from '../style';

export default function Edit(){
    //navigation
    const navigation = useNavigation(); 
    const route = useRoute(); 
    const user = route.params; 
    //state
    const [firstName,setFirstName] = useState(user.firstName); 
    const [lastName,setLastName] = useState(user.lastName); 
    const [age,setAge] = useState(user.age); 
    const [email,setEmail] = useState(user.email); 
    const [phone,setPhone] = useState(user.phone); 
    const [department,setDepartment] = useState(user.department); 
    const [street,setStreet] = useState(user.address.street); 
    const [suburb,setSuburb] = useState(user.address.suburb); 
    const [state,setState] = useState(user.address.state); 
    const [country,setCountry] = useState(user.address.country); 
    //functions
    function submit(){
        updateUserAsync(getUserObject())
            .then(json=>{
                navigation.navigate("Index",{op:'edit',data:json}); 
            });
    }
    function getUserObject(){
        return {
            id: user.id,
            firstName:firstName,
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
            <Label value="FIRST NAME:" />
            <TxtInput value={firstName} onChangeText={setFirstName} />
            <Label value="LAST NAME:" />
            <TxtInput value={lastName} onChangeText={setLastName} />
            <Label value="AGE:" />
            <TxtInput value={age} onChangeText={setAge} />
            <Text style={theme.label}>EMAIL:</Text>
            <TxtInput value={email} onChangeText={setEmail} />
            <Text style={theme.label}>PHONE:</Text>
            <TxtInput value={phone} onChangeText={setPhone} />
            <Text style={theme.label}>DEPARTMENT:</Text>
            <TxtInput value={department} onChangeText={setDepartment} />
            <Text style={theme.label}>ADDRESS:</Text>
            <Text style={theme.label}>STREET:</Text>
            <TxtInput value={street} onChangeText={setStreet} />
            <Text style={theme.label}>SUBURB:</Text>
            <TxtInput value={suburb} onChangeText={setSuburb} />
            <Text style={theme.label}>STATE:</Text>
            <TxtInput value={state} onChangeText={setState} />
            <Text style={theme.label}>COUNTRY:</Text>
            <TxtInput value={country} onChangeText={setCountry} />
            <Pressable style={theme.saveButton} onPress={submit}>
                <Text style={theme.saveButtonText}>SAVE</Text>
            </Pressable>
        </View>
    ); 
}