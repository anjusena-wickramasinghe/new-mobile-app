import { View, Text, StyleSheet } from 'react-native';

export default function daillyDealScreen() {
    return (
        <View style={styles.container}>
            <Text>Dailly Deal Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});