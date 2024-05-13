import {Text, View, StyleSheet} from "react-native";
import {AntDesign} from "@expo/vector-icons";

// @ts-ignore
const FoodLogListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 5 }}>
                <Text style={{color: 'white',fontWeight: 'bold', fontSize: 16}}>
                    {item.label} {item.food_brand}
                </Text>
                <Text style={{color: 'dimgray'}}>
                    {item.kcal} Kcal,
                    Carb: {item.carbohydrate} ,
                    Protein: {item.protein}  ,
                    Fat: {item.fat}
                </Text>
            </View>
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

export default FoodLogListItem;