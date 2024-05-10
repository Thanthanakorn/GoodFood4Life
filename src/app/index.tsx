import {FlatList, StyleSheet, View} from 'react-native';
import FoodListItem from "../components/FoodListItem";

const foodItems = [
    {label: "Pizza", cal: 600, brand: "Domino's"},
    {label: "Rib eye", cal: 450, brand: "Sizzler"},
    {label: "Salmon Stake", cal: 400, brand: "Fuji"},
];


export default function Index() {
    return (
        <View style={styles.container}>
            <FlatList data={foodItems} renderItem={({item}) => <FoodListItem item={item}/>}
                      contentContainerStyle={{ gap: 5 }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});
