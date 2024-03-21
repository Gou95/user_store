import { StyleSheet, Text, View,TextInput, Alert,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {

const [email,setEmail] = useState('')
const [Password,setPassword] = useState('')


const handleLogin = async()=>{
    if(email.trim()=='' || Password.trim()==''){
        Alert.alert('please fill in all fields')
        return
    }
    try{
        await AsyncStorage.setItem('email',email)
        await AsyncStorage.setItem('password',Password)
        Alert.alert('Login successfully')
       navigation.navigate('Home')
    }catch{
        console.error('not data save',error)
        Alert.alert('some went to wrong')
    }
}

  return (
    <View style = {{flex:1,justifyContent:'center'}} >
      <Text style={{textAlign:'center',fontSize:20,color:"#000",marginBottom:20}}>LoginPage</Text>
      <TextInput style = {{borderWidth:1,padding:10,marginBottom:10,width:'95%',marginHorizontal:10}}
       placeholder='Email'
      value={email}
      onChangeText={(text) => setEmail(text)}/>

<TextInput style = {{borderWidth:1,padding:10,marginBottom:10,width:'95%',marginHorizontal:10}}
value={Password}
placeholder='Password' 
onChangeText={(text) =>setPassword(text)}
secureTextEntry = {true}
/>

<TouchableOpacity style={{ alignItems: 'center',
    backgroundColor: '#DDDDDD',marginHorizontal:10,marginTop:20,
    padding: 10,}} onPress={handleLogin}
   >
        <Text>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})