import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import AddItemScreen from './AddItemScreen'

const HomePage = ({route}) => {

 const [items,setItems] = useState([])

 const fetchItems = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setItems(data)

    }catch(error){
        console.error('error fetching items',error)

    }
 }

 const AddItem = (newItem) =>{
    setItems([...items,newItem])
 }

 useEffect(() => {
    if (route.params?.newItem) {
      setItems([...items, route.params.newItem]);
    }
    fetchItems();
  }, [route.params?.newItem]);


 const renderItem = ({item}) =>(
    <View style={styles.itemContainer} >
<Text style={styles.title}>{item.title}</Text>
<Text style={styles.description}>{item.body}</Text>
</View>
 )

  return (
    <View style={styles.container}>
     <FlatList 
     data={items}
     renderItem={renderItem}
     keyExtractor={(item) => item.id.toString()}/>


     <AddItemScreen onSubmit={AddItem}/>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    container :{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10
    },
    itemContainer:{
        padding:10,
        marginVertical:5,
        backgroundColor:"#fofofo",
        borderRadius:5,
        width:'100%'
    },
    title:{
        fontSize:18,
        fontWeight:'700',
        marginBottom:5
    },
    description:{
        fontSize:16
    }
})