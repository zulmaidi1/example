import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const DetailScreen  = () => {
    const maintenance = useSelector((state) => state.maintenance)
    const dispatch = useDispatch();

    return (
        <View
            style= {{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>{JSON.stringify(maintenance, null, 2)}</Text>
        </View>
    );
}

export default DetailScreen;

