import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Appbar, TouchableRipple} from "react-native-paper";
import { AccessTimeFilled } from "@fluentui/react-native-icons";
import { useEffect, useState } from "react";
import { getFcmToken, registerListenerWithFCM } from "../../Helpers/fcmHelper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";
import { valdiateMaintenance, validateMaintenance } from "../../Helpers/validateMaintenance";


const HomeScreen = ({navigation}) => {
    const maintenance = useSelector((state) => state.maintenance)
    const dispatch = useDispatch()

    const menuItems = [
      { icon: 'wallet', label: 'Payment'},
      { icon: 'account', label: 'Account'},
      { icon: 'cart', label: 'Product', },
    ];

    menuOnPress =(menu) => {
      if(validateMaintenance(maintenance, menu.label)){
        return;
      }else{
        console.log(menu.label)
        navigation.navigate('Detail')
      }
    }

    useEffect(() => {
        getFcmToken()
      }, []);

    useEffect(() => {
        registerListenerWithFCM(dispatch)
    }, [dispatch])

    return (
        <View style= {{flex: 1, backgroundColor: 'white'}}>
            <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.Content title="Home" style={{color:'white'}} />
                <Appbar.Action 
                    icon="home"
                    color="#5e69ee"
                    onPress={() => {}} 
                />
            </Appbar.Header>
            <View style={{ paddingHorizontal: 12}}>
                <FlatList
                    data={menuItems}
                    renderItem={({item}) => (
                        <TouchableRipple 
                          style={{ 
                            flex: 1,
                            margin: 4,
                          }} 
                          onPress={() => menuOnPress(item)}
                          rippleColor="rgba(0, 0, 0, .32)"
                        >
                          <View 
                            style={{ 
                              flexDirection: 'column', 
                              alignItems: 'center',
                              paddingHorizontal: 8,
                              paddingVertical: 16,
                              shadowColor: '#000',
                              shadowOffset: { width: 0, height: 16 },
                              shadowOpacity: 0.2,
                              shadowRadius: 36,
                              backgroundColor: '#F4F4FB',
                              borderRadius: 4,
                            }}
                          >
                              <Icon name={item.icon} size={24} color={"#5e69ee"}/>
                              <Text style={{color: '#5e69ee'}}>{item.label}</Text>
                        </View>
                      </TouchableRipple>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <Text>{JSON.stringify(maintenance, null, 2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });

export default HomeScreen;
