import {FlatList, StyleSheet, View, Text, TextInput, Button} from 'react-native';
import FoodListItem from "../components/FoodListItem";
import {useState} from "react";

const foodItems = [
    {label: "Pizza", cal: 600, brand: "Domino's"},
    {label: "Rib eye", cal: 450, brand: "Sizzler"},
    {label: "Salmon Stake", cal: 400, brand: "Fuji"},
];


export default function Index() {
    const [search, setSearch] = useState('');

    const performSearch = () => {
        console.warn('Searching for: ', search);

        setSearch('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search..."
                style={styles.input}
                placeholderTextColor={'#898888'}/>
            {search && <Button title="Search" onPress={performSearch}/>}

            <FlatList data={foodItems} renderItem={({item}) => <FoodListItem item={item}/>}
                      contentContainerStyle={{gap: 5}}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(2,5,21)',
        padding: 10,
        gap: 10,
    },
    input: {
        color: 'white',
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 20,
    }
});
