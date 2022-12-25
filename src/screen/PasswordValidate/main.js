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
  Modal
} from 'react-native';


const PasswordTester =  () => {
    const [time, setTime] = React.useState(10);

    const [pwd,setPwd] = useState("");
    const [pwdLen,setPwdLen] = useState(0);
    const [pwdHint,setPwdHint] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
  
    useEffect(()=>{
      console.log(`In useEffect    ${pwd}`)
    },[pwd,pwdLen])
  
    const timerRef = useRef(time);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
        } else {
          setTime(timerRef.current);
        }
      }, 1000);
      return () => {
        clearInterval(timerId);
      };
    }, []);
  
    const setChgPassword = (value) => {
      setPwd(value)
      // if(pwd==="5678"){
      //   ToastAndroid.show("您為管理者 !", ToastAndroid.SHORT);
      // }else{
      //   ToastAndroid.show("驗證失敗 !", ToastAndroid.SHORT);
      // }
    }

    
    return(


        <View 
        style={{flex:8, flexDirection:'row', justifyContent:'center',alignItems:'center'}}
        >

          <View
          style={{flex:1,backgroundColor:'green' }}
          >

          </View>
          <View
          style={{flex:3, }}
          >


           {
            time==3 || time ==2 || time == 1?<Text style={{color:'red',fontWeight:'bold'}}> {  time  } </Text>:<Text> {  time  } </Text>
           }
           
 
          



             {pwd==="5678"
             ?
             <Image
             style={styles.tinyLogo}
             source={                    
               require('../../../src/asset/opendoor.jpg')
             }
           />
             :
             <Image
             style={styles.tinyLogo}
             source={                    
               require('../../../src/asset/locked.jpg')
             }
             />
             }

{/* visible={modalVisible} */}
             <Modal
                  animationType="slide"
                  transparent={false}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
             >

            <View style={styles.centeredView}>

            <View style={styles.modalView}>



            <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

            
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center' }} >
                  <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  style={{backgroundColor:'black',width:150,borderRadius:20}}
                  />
                  
                </View>                
       
              </View>





              <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50 ,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text style={{textAlign:'center'}}>1</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center' }} >
                  <TouchableOpacity
                  style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                  >
                    <Text>2</Text>
                  </TouchableOpacity>
                  
                </View>                
                <View style={{flex:1 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text>3</Text>
                    </TouchableOpacity>                  
                </View>
              </View>




              <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50 ,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text style={{textAlign:'center'}}>4</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center' }} >
                  <TouchableOpacity
                  style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                  >
                    <Text>5</Text>
                  </TouchableOpacity>
                  
                </View>                
                <View style={{flex:1 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text>6</Text>
                    </TouchableOpacity>                  
                </View>
              </View>


              <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50 ,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text style={{textAlign:'center'}}>7</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center' }} >
                  <TouchableOpacity
                  style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                  >
                    <Text>8</Text>
                  </TouchableOpacity>
                  
                </View>                
                <View style={{flex:1 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text>9</Text>
                    </TouchableOpacity>                  
                </View>
              </View>


              <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50 ,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text style={{textAlign:'center'}}>*</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center' }} >
                  <TouchableOpacity
                  style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                  >
                    <Text>0</Text>
                  </TouchableOpacity>
                  
                </View>                
                <View style={{flex:1 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text>#</Text>
                    </TouchableOpacity>                  
                </View>
              </View>



              <View
              style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
              >

                <View style={{flex:2,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:150 ,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text style={{textAlign:'center'}}>確定</Text>
                    </TouchableOpacity>
                </View>
                   
                <View style={{flex:1 ,flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                  <TouchableOpacity
                  onPress={()=>{
                    setModalVisible(false);
                  }}
                    style={{borderWidth:1,padding:5,borderRadius:15,height:50,width:50,flexDirection:'column',justifyContent:'center',alignItems:'center' }}
                    >
                      <Text>關閉</Text>
                    </TouchableOpacity>                  
                </View>
              </View>

              

              </View>



              </View>


             </Modal>


                <Text>輸入卡機驗證碼：</Text>
                <TextInput
                style={{borderWidth:1, padding:10,margin:10, borderColor:'black',borderRadius:10}}
                placeholder='輸入驗證碼'
                keyboardType='numeric'
                
                secureTextEntry={true}
                onChangeText={(text)=>setChgPassword(text)}
                maxLength={4}
                
                />
                <Text>密碼提示：5678</Text>


                <Text>
                {pwd==="5678"?<Text style={{color:'lightblue',fontWeight:'bold'}} >驗證成功</Text>:<Text style={{color:'red',fontWeight:'bold'}}>驗證失敗</Text>}
                </Text>

              



                <TouchableOpacity
          
                style={{  width:100, backgroundColor:'purple',borderRadius:10,padding:10   }}
                >
                    <Text
                    style={{textAlign:'center',color:'white'}}
                    >登入</Text>
                </TouchableOpacity>

          </View>
          <View
          style={{flex:1,backgroundColor:'green'}}
          >

            

          </View>


        </View>



    );
};



const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    tinyLogo: {
      width: 200,
      height: 80,
    },
    modalView: {
      margin: 20,
      height:450,
      backgroundColor: "white",
      borderRadius: 20,
      // padding: 35,
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
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
  });


  export default PasswordTester;