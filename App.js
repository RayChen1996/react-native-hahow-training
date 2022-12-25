
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

import PasswordValidate from './src/screen/PasswordValidate/main'
import OpenDataDemo from './src/screen/OpenData/FlatView'
 

const App =  () => {
  //useState(variable,function)
  const [page,setPage] = useState(0)
  const [stayMainView,setStayMainView] = useState(true) //跳下一頁a旗標
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(()=>{
    console.log(`cur page = ${page}`)
    //https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taichung?$top=300&$format=JSON
    //https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json
    // fetch('https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/Taichung?$top=300&$format=JSON')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
  },[page])


  const getPage = () => {
    if(page==0){
      return (
        <View style={{flex:1,flexDirection:'column'}} >
          <View style={{flex:1, flexDirection:'row',  }}>
            <View style={{ flex:1,}}>
                <TouchableOpacity                     
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',                  
                  margin:10,
                  padding: 10,
                  borderRadius:25,
                }}         
                onPress={()=>{
                  
                  setPage(1)
                }}
                >
                  <Text style={{color:'white',}}>密碼驗證</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex:1,}}>
                <TouchableOpacity
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',
                  borderRadius:25,
                  margin:10,
                  padding: 10
                }}   
                onPress={()=>{
                  setPage(2)
                }}
                >
                  <Text
                    style={{color:'white',}}
                  >Fetch API</Text>
                </TouchableOpacity>
            </View>            

            

          </View>
          <View style={{flex:1,flexDirection:'row',}}>
          <View style={{ flex:1,}}>
                <TouchableOpacity   
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',
                  borderRadius:25,
                  margin:10,
                  padding: 10
                }}         
                >
                  <Text style={{color:'white',}}>密碼驗證</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex:1,}}>
                <TouchableOpacity
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',
                  borderRadius:25,
                  margin:10,
                  padding: 10
                }}   
                >
                  <Text
                    style={{color:'white',}}
                  >Fetch API</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row', }}>
          <View style={{ flex:1,}}>
                <TouchableOpacity   
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',
                  borderRadius:25,
                  margin:10,
                  padding: 10
                }}         
                >
                  <Text style={{color:'white',}}>密碼驗證</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex:1,}}>
                <TouchableOpacity
                style={{
                  flex:1,
                  alignItems: "center",
                  justifyContent:'center',
                  backgroundColor:'blue',
                  borderRadius:25,
                  margin:10,
                  padding: 10
                }}   
                >
                  <Text
                    style={{color:'white',}}
                  >Fetch API</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={{flex:.15,flexDirection:'row',}}>

            <View style={{flex:1,  justifyContent:'center',alignItems:'center',borderRadius:50 ,backgroundColor:'#ccc'}}>
               <TouchableOpacity
               style={{width:150,height:150,borderRadius:20}}
               >
                <Text></Text>
               </TouchableOpacity>
            </View>
            <View style={{flex:1, }}>
      
            </View>
          </View>
          {/* <View style={{flex:1,flexDirection:'row',}}>

          </View>
          <View style={{flex:1,flexDirection:'row', }}>

          </View>
          <View style={{flex:1,flexDirection:'row',}}>

          </View>
          <View style={{flex:1,flexDirection:'row', }}>

          </View>                     */}
       </View>
       )
    }else if (page==1){
      return <PasswordValidate />
    }else if(page ==2){
      return <OpenDataDemo />
    }
  
  }
  const getTitle = () => {
    if(page==0){
      return  <Text
         style={{color:'black'}}
       >主頁</Text>
    }else if(page==1){
      return      <Text
      style={{color:'black'}}
     >密碼驗證</Text>
    }else{
      return <Text
      style={{color:'black'}}
     >Fetch API</Text>
    }
  }

  const getBackButton = () => {
    
    if(page!=0){
      return(
        <TouchableOpacity
            style={{color:'white'}}
            onPress={()=>{
              setPage(0)
            }}
        >
          <Text
          style={{color:'black'}}
          >返回</Text>
        </TouchableOpacity>  
      )
    }else{
      return(
        <View  >
            <Text>123</Text>
        </View>
      )
    }
  
  }
  return (
      <View 
        style={{flexDirection:'column',flex:1}}
      >

      <View 
        style={{flex:1, flexDirection:'row',  }}
        >

          <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'white' }}>

            {
              getBackButton()
            }
          </View>
          <View style={{flex:3,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            {getTitle()}
          </View>
          <View style={{flex:1,backgroundColor:'white' }}>
            
          </View>
      </View>

      <View
        style={{flex:8,backgroundColor:'white'}}
      >
        {getPage()}
      </View>


      <View 
        style={{flex:1,backgroundColor:'white'}}
        >

        </View>

      </View>
 
    
  );
};






const styles = StyleSheet.create({
   
});

export default App;
