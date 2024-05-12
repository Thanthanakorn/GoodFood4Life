import {Text, FlatList, StyleSheet, View, TextInput, Button, ActivityIndicator} from 'react-native';
import FoodListItem from "../components/FoodListItem";
import {useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";

const query = gql`
    query Search($ingr: String) {
        search(ingr: $ingr) {
            text
            hints {
                food {
                    label
                    brand
                    foodId
                    nutrients {
                        ENERC_KCAL
                        CHOCDF
                        PROCNT
                        FAT
                        FIBTG
                    }
                }
            }
        }
    }`;

export default function SearchScreen() {
    const [search, setSearch] = useState('');

    const [runSearch,
        {data, loading, error}] = useLazyQuery(query);

    const performSearch = () => {
        runSearch({variables: {ingr: search}});
    };

    if (error) {
        return <Text>An error occurred.</Text>;
    }

    const items = data?.search?.hints || [];

    return (
        <View style={styles.container}>
            <TextInput
                value={search}
                onChangeText={setSearch}
                placeholder="Search..."
                style={styles.input}
                placeholderTextColor={'#898888'}/>
            {search && <Button title="Search" onPress={performSearch}/>}

            {loading && <ActivityIndicator />}
            <FlatList data={items}
                      renderItem={({item}) => <FoodListItem item={item}/>}
                      ListEmptyComponent={() => <Text> Search a food</Text>}
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
