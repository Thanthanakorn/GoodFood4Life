import { View, Text, StyleSheet } from 'react-native';

// @ts-ignore
const FoodLogListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, gap: 5 }}>
                <Text style={{color: 'white',fontWeight: 'bold', fontSize: 16}}>{item.label}</Text>
                <Text style={{ color: 'dimgray' }}>{item.kcal} cal</Text>
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