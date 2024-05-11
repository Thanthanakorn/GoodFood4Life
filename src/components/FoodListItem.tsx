import {Text, View, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";

// @ts-ignore
const FoodListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 5 }}>
                <Text style={{color: 'white',fontWeight: 'bold', fontSize: 16}}>{item.label}</Text>
                <Text style={{color: 'dimgray'}}> {item.cal} cal, {item.brand}</Text>
            </View>
            <AntDesign name="pluscircleo" size={24} color="royalblue"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c33',
        padding: 10,
        borderRadius: 5,
        gap: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default FoodListItem;