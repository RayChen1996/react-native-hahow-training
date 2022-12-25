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


const BusList = () => {
    return(
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column"
          }]}>
            <View style={{ flex: .25, backgroundColor: "green" }} >
                <TextInput
                placeholder='搜尋'
                />
            </View>
            <View style={{ flex: 2,   }} >

                <FlatList
                
                
                
                />
            </View>
            <View style={{ flex: .25,   }} >



            </View>
          </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
  });

export default BusList;