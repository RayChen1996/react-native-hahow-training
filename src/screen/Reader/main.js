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
  ProgressBarAndroidBase
} from 'react-native';

import {
    createReaderTable,
} from '../../DB/reader-db-service'

const AddReader = () => {

}
const LoadReader = () => {
    
}

const main = () => {
    const [valideRName,setValideRName] = useState("")
    const [valideRNo,setValideRNo] = useState(1)
    const [valideIP,setValideIP] = useState("192.168.10.89")
    const [validePort,setValidePort] = useState(4444)
    const [valideTimeOut,setValideTimeOut] = useState(3)

    useEffect(()=>{




    },[])

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


                <View
                    style={{
                        flex:1,                         
                        flexDirection:'row'
                    }}
                >
                    <View
                    style={{
                        flex:.5,
                    }}
                    >

                    </View>
                    <View                    
                        style={{                            
                            justifyContent:'center',
                            alignItems:'center', 
                            backgroundColor:'white'
                        }}
                    >
                        <TextInput
                        style={{
                            borderWidth:1,
                            width:150,
                            borderRadius:10,
                            color:'black',
                            textAlign:'center'
                        }}
                        value='1'
                         placeholder='輸入機號'
                        />
                        <Text>
                            {getReaderNoMessage()}
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            flex:.5,                            
                        }}
                    >
                        
                    </View>                  


                </View>


                <View
                    style={{
                        flex:1, 
                        flexDirection:'row'
                    }}
                >


<View
                    style={{
                        flex:.5,
                    }}
                    >

                    </View>
                    <View                    
                        style={{                            
                            justifyContent:'center',
                            alignItems:'center', 
                            backgroundColor:'white'
                        }}
                    >
                        <TextInput
                        style={{
                            borderWidth:1,
                            width:150,
                            borderRadius:10,
                            color:'black',
                            textAlign:'center'
                        }}
                        value='我的卡機'
                         placeholder='輸入機號'
                        />
                        <Text>
                            {getReaderNoMessage()}
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            flex:.5,                            
                        }}
                    >
                        
                    </View>




                </View>
         
                <View
                    style={{
                        flex:1, 
                        flexDirection:'row'
                    }}
                >


<View
                    style={{
                        flex:.5,
                    }}
                    >

                    </View>
                    <View                    
                        style={{                            
                            justifyContent:'center',
                            alignItems:'center', 
                            backgroundColor:'white',
                            color:'black',
                            textAlign:'center'
                        }}
                    >
                        <TextInput
                        style={{
                            borderWidth:1,
                            width:150,
                            borderRadius:10,
                            color:'black',
                            textAlign:'center'
                        }}
                         placeholder='輸入機號'
                         value='192.168.10.89'
                        />
                        <Text>
                            {getReaderNoMessage()}
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            flex:.5,                            
                        }}
                    >
                        
                    </View>


                </View>


                <View
                    style={{
                        flex:1,flexDirection:'row'
                    }}
                >

                <View
                    style={{
                        flex:.5,
                    }}
                    >

                    </View>
                    <View                    
                        style={{                            
                            justifyContent:'center',
                            alignItems:'center', 
                            backgroundColor:'white',

                        }}
                    >
                        <TextInput
                        style={{
                            borderWidth:1,
                            width:150,
                            borderRadius:10,
                            color:'black',
                            textAlign:'center'
                        }}
                        value='4444'
                         placeholder='輸入機號'
                        />
                        <Text>
                            {getReaderNoMessage()}
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            flex:.5,                            
                        }}
                    >
                        
                    </View>

                </View>

            </View>

            {/* Bottom Button  */}
            <View
               style={{flex:.15,backgroundColor:'blue', }}
            >

                <TouchableOpacity
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                onPress={()=>{
                    AddReader()
                    ToastAndroid.show("新增成功 !", ToastAndroid.SHORT);
                }}
                >
                    <Text>下一步</Text>
                </TouchableOpacity>
                
            </View>

                    
        </View>
    )
}


const styles = StyleSheet.create({
   InputArea:{

   }
});




export default main;