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
  Share, Button
} from 'react-native';


const sharePage = () => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
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
            <Button onPress={onShare} title="Share" />
               
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


export default sharePage;