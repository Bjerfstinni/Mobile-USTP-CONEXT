import { StyleSheet, Text, View, Button} from "react-native";

function HomeScreen() {
    return (
        <View style={styles.viewStyle}>
        <Text style={styles.headingStyle}>THIS IS HOMESCREEN</Text>
        <Text style={styles.textStyle}>NEWS</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 30,
        color:'black',
        textAlign: 'center',
    },
});
export default HomeScreen;