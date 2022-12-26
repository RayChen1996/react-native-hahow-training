
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

import ShartPage from './src/screen/Share/share'
import ReaderPage from './src/screen/Reader/main'
import ReaderQuery from './src/screen/Reader/Query'
const App =  () => {
  //useState(variable,function)
  const [page,setPage] = useState(-1)
  const [stayMainView,setStayMainView] = useState(true) //跳下一頁a旗標
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [rightButtonText,setRightButtonText] = useState("")
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
    if(page==-1){
      return <ReaderQuery />
    }else if(page==0){
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
                onPress={()=>{
                  setPage(3)
                }}
                >
                  <Text style={{color:'white',}}>寫資料</Text>
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
                  setPage(4)
                }} 
                >
                  <Text
                    style={{color:'white',}}
                  >讀資料</Text>
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
                onPress={()=>{
                  setPage(5)
                }}        
                >
                  <Text style={{color:'white',}}>分享</Text>
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
                  setPage(6)
                }}
                >
                  <Text
                    style={{color:'white',}}
                  >Socket</Text>
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
    }else if(page ==3){
      return <ReaderPage />
    }else if(page ==4){
      return <ReaderQuery />
    }else if(page==5){
      return <ShartPage />
    }
  
  }
  const getTitle = () => {

    if(page==-1){
      return  <Text
         style={{color:'black'}}
       >主頁</Text>
    }else if(page==1){
      return      <Text
      style={{color:'black'}}
     >密碼驗證</Text>
    }else if(page == 2){
      return      <Text
      style={{color:'black'}}
     >FethcAPI</Text>
    }else if(page == 3){
      return      <Text
      style={{color:'black'}}
     >新增資料</Text>
    }else if(page == 4){
      return      <Text
      style={{color:'black'}}
     >查詢資料</Text>
    }else if(page == 5){
      return      <Text
      style={{color:'black'}}
     >分享功能</Text>
    }else if(page == 6){
      return      <Text
      style={{color:'black'}}
     >TCP通訊</Text>
    }else{
      return <Text
      style={{color:'black'}}
     >Fetch API</Text>
    }
  }

  const getBackButton = () => {
    
    if(page!=-1 ){
      return(
        <TouchableOpacity
            style={{color:'white'}}
            onPress={()=>{
              setPage(-1)
            }}
        >
          <Text
          style={{color:'black'}}
          >返回</Text>
        </TouchableOpacity>  
      )
    }else{
      // return(
      //   <View  >
      //       <Text>123</Text>
      //   </View>
      // )
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

          {
            //頁面切換在主頁面才顯示Nav
            page ==-1
            ?
            <View 
              style={{
                flex:1,
                backgroundColor:'white',
                flex:1,
                flexDirection:'row'
              }}
            >
              <View
              style={{
                flex:1,justifyContent:'center',alignItems:'center'
              }}
              >
                <TouchableOpacity>
                <Text style={{color:'black'}} >我的卡機</Text>
                </TouchableOpacity>
                

              </View>
              <View
                style={{
                  flex:1,justifyContent:'center',alignItems:'center'
                }}
              >
                <TouchableOpacity
                onPress={()=>{
                  setPage(0)
                }}
                >
                <Text style={{color:'black'}} >管理功能</Text>
                </TouchableOpacity>
                
                
              </View>              
              
            </View>           
            :
            ""
          }


      </View>
 
    
  );
};






const styles = StyleSheet.create({
   
});

export default App;
