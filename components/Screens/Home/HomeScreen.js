import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Appbar} from "react-native-paper";
import { AccessTimeFilled } from "@fluentui/react-native-icons";
import { useEffect, useState } from "react";
import { getFcmToken, registerListenerWithFCM } from "../../Helpers/fcmHelper";


const HomeScreen = ({navigation}) => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        getFcmToken()
        let items = Array.apply(null, Array(9)).map((v, i) => {
          return {
            id: i,
            src: 'https://unsplash.it/400/400?image=' + (i + 1)
          };
        });
        setDataSource(items);
      }, []);

    useEffect(() => {
        const unsubscribe = registerListenerWithFCM();
        return unsubscribe;
    })

    return (
        <View className="bg-white">
            <Appbar.Header className="font-semibold text-xs bg-white">
                <Appbar.Content title="Home" style={{color:'white'}} />
                <Appbar.Action 
                    icon="home"
                    onPress={() => {}} 
                />
            </Appbar.Header>
            <View className="p-3">
                <FlatList
                    data={dataSource}
                    renderItem={({item}) => (
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'column',
                        margin: 1
                        }}>
                        <Image
                        style={styles.imageThumbnail}
                        source={{uri: item.src}}
                        />
                    </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Detail')}
                    className='flex justify-center bg-black w-full p-3 mt-3'
                >
                    <Text className="text-white text-center text-base font-semibold">Detail</Text>
                </TouchableOpacity>
            </View>
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
