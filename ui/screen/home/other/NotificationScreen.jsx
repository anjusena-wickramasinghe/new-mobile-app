import { View, Text, StyleSheet } from 'react-native';

export default function NotificationScreen() {
    return (
        <View style={styles.container}>
            <Text>Notification Screen</Text>
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