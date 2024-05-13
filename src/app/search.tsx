import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Button,
    ActivityIndicator,
} from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions} from 'expo-camera';



const query = gql`
    query search($ingr: String, $upc: String) {
        search(ingr: $ingr, upc: $upc) {
            text
            hints {
                food {
                    label
                    brand
                    foodId
                    nutrients {
                        ENERC_KCAL
                    }
                }
            }
        }
    }
`;

export default function SearchScreen() {
    const [search, setSearch] = useState('');
    const [scannerEnabled, setScannerEnabled] = useState(false);
    const [runSearch, { data, loading, error }] = useLazyQuery(query);
    //Camera
    const [permission, requestPermission] = useCameraPermissions();
    // Request only if permission is not granted, so we can ask again.
    requestPermission();


    const performSearch = () => {
        runSearch({ variables: { ingr: search } });
    };

    if (error) {
        return <Text>Failed to search</Text>;
    }

    if (scannerEnabled) {
        return (
            <View>
                <CameraView style={{width: '50%', height: '50%'}}
                            onBarcodeScanned={(data) => {
                                runSearch({variables: {upc: data.data} })
                                setScannerEnabled(false);
                            }}/>
                <AntDesign
                    onPress={() => setScannerEnabled(false)}
                    name="closecircleo"
                    size={35}
                    color="red"
                    style={{ position: 'absolute', right: 10, top: 10 }}
                />
            </View>
        )
    }

    const items = data?.search?.hints || [];

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <View style={styles.input}>
                    <AntDesign name="search1" size={24} color="white" />
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        placeholder=" Search..."
                        placeholderTextColor={'#898888'}/>
                </View>
                <MaterialCommunityIcons
                    onPress={() => setScannerEnabled(true)}
                    name="barcode-scan"
                    size={30}
                    color="white" />
            </View>
            {search && <Button title="Search" onPress={performSearch} />}

            {loading && <ActivityIndicator />}
            <FlatList
                data={items}
                renderItem={({ item }) => <FoodListItem item={item} />}
                ListEmptyComponent={() => <Text>Search a food</Text>}
                contentContainerStyle={{ gap: 5 }}
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
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 20,
        flex: 1,
    }
});
