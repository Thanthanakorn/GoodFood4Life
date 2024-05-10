import {StyleSheet, View} from 'react-native';
import FoodListItem from "../components/FoodListItem";
export default function Index() {
    return (
        <View style={styles.container}>
            {/* Food Item View*/}
            <FoodListItem item = {{label: "Pizza", cal: 600, brand: "Domino's"}}/>
            <FoodListItem item = {{label: "Rib eye Stake", cal: 400, brand: "Santa fe"}} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10,
        gap: 5,
    },
});
