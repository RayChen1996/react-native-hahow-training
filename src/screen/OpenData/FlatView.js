import React,{useState,useEffect,useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  ToastAndroid,
  Modal,
  FlatList
} from 'react-native'; 
import CountryList from '../../Data(1110512-open).csv.json';

const BusList = () => {
  const [busData,setBusData] = useState(null)
  const searchData = undefined
  useEffect(()=>{

  },[busData])
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item["地點名稱"]} />
  );
  const chgSearchText = () =>{
    
  }
  const filterFromTitle = (title) => {
    let tmp = CountryList.filter((item)=>{
      return item["地點名稱"] == title
    })
    return tmp
  }
  const getData = () => {
    console.log(typeof CountryList)
    CountryList.forEach((item)=>{
      // console.log(item["地點名稱"])
      console.log(item)
    })

    return(
      <FlatList
      data={CountryList}
      renderItem={renderItem}
      />
    )
  }
    return(

      
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            <View style={{ flex: .25, backgroundColor:'lightblue',borderRadius:10,marginBottom:5 }} >
                <TextInput
                style={{
                  color:'black',
                  
                }}
                placeholder='搜尋'
                />
            </View>
            <View style={{ flex: 2,   }} >

                {
                  getData()
                }
            </View>
            {/* <View style={{ flex: .25,   }} >
            </View> */}
          </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    item: {
      backgroundColor: '#003300',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
      
    },
  });

export default BusList;