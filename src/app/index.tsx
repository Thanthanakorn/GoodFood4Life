import {View, Text, StyleSheet, FlatList, Button, StatusBar} from "react-native";
import {Link} from "expo-router";
import FoodListItem from "../components/FoodListItem";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import React from "react";


const foodItems = [
    {
    food: {label: 'Pizza', nutrients: { ENERC_KCAL:100, CHOCDF:10, PROCNT: 20, FAT: 5 }, brand: "Domino's"}
    }
];

export default function HomeScene() {
    return(
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={styles.subtitle}>Calories</Text>
                <Text style={{color: "white"}}> 1770 - 360 = 1410</Text>
            </View>
            <View style={styles.headerRow} >
                <Text style={styles.subtitle}>Today's logged food</Text>
                <Link href={"/search"} style={{ color: 'white'}} asChild>
                    <Button title={"ADD FOOD"} />
                </Link>
            </View>

            <FlatList
                data={foodItems}
                contentContainerStyle={{ gap: 5 }}
                renderItem={({ item }) => <FoodListItem item = {item} />}
                      />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(2,5,21)',
        flex: 1,
        padding: 10,
        gap: 10,
        justifyContent: 'center',
    },
    headerRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subtitle:{
        fontSize: 18,
        fontWeight: '500',
        flex: 1,
        color: 'white'
    }

});
