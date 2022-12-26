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
  ProgressBarAndroidBase,
  FlatList
} from 'react-native';

import {
    createReaderTable,
} from '../../DB/reader-db-service'


import ReaderJson from '../../screen/Reader/db.json'

const AddReader = () => {

}
const LoadReader = () => {
    
}

const Query = () => {
 
    const [modalVisible, setModalVisible] = useState(false);
   

    useEffect(()=>{

    },[])
    const Item = ({ title }) => (
        <View style={[styles.item,{ flex:1,flexDirection:'row',justifyContent:'space-between' }]}>

          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
          onPress={()=>{
            console.log("123")
            setModalVisible(!modalVisible)
          }}
          >
            <Text>詳細</Text>
          </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (    
      <Item title={item.Name} />
    );

    const ItemCard = ({ title }) => (
        <View style={[styles.item,{ flex:1,flexDirection:'row',justifyContent:'space-between' }]}>

          <Text style={styles.title}>{title}</Text>
           
        </View>
    );
    const cardItem = ({ item }) => (    
      <ItemCard title={item.card} />
    );


    const AddReader = () => {
        // createReaderTable()        
    }
    const getReaderNoMessage = () => {
        return(
            valideRNo > 255 ? 
            <Text>機號不能大於255</Text>
            :
            <Text></Text>            
        ) 
    }
    const renderCardList = () => {
        return(
            <FlatList
            data={ReaderJson.Cards}
            renderItem={cardItem}
            />
        )
    }
    const GetReadersFromDB = () => {
        console.log( ReaderJson.Readers)    
        return(
            <FlatList
            data={ReaderJson.Readers}
            renderItem={renderItem}
            />
        )
    }
    return(
        <View
          style={{flex:1, flexDirection:'column',}}
        >
            {/* Input Area */}
            <View
                style={{
                    flex:1.5,
                    flexDirection:'column', 
                }} 
            >

                {
                    GetReadersFromDB() 
                }
              

                <Modal
                    animationType="slide"                    
                    visible={modalVisible}
                    onRequestClose={() => {                
                      setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView,{
                            
                            flexDirection:'column'
                        }]}>
                            <Text style={[ { color:'black' }]}>卡機詳細資訊</Text>


                            {
                                renderCardList()
                            }

                            <TouchableOpacity
                            onPress={()=>{
                                setModalVisible(!modalVisible);
                            }}
                            
                            >
                                <Text style={[ { color:'black' }]}>關閉</Text>
                            </TouchableOpacity>
                
                        </View>
                    </View>
                </Modal>


            </View>

            {/* Bottom Button  */}
            {/* <View
               style={{flex:.15,backgroundColor:'blue', }}
            >

               
                
            </View> */}

                    
        </View>
    )
}


const styles = StyleSheet.create({
   InputArea:{

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
  modalView: {
    // margin: 5,
    marginTop:100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    justifyContent:'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'black'
  }
});




export default Query;