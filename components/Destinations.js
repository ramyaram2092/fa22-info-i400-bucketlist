import { StyleSheet, View, TextInput, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export function Destination() {
    const TopTab = createMaterialTopTabNavigator();
    return (
        <TopTab.Navigator>
            <TopTab.Screen
                name="Search"
                component={SearchDestination}
            />
            <TopTab.Screen
                name="Monthly Goals"
                component={MonthlyGoals}
            />
            <TopTab.Screen
                name="Yearly Goals"
                component={YearlyGoals}
            />
        </TopTab.Navigator>

    )

}
function SearchDestination() {
    return (
        <View style={styles.container}>
            <View style={styles.SearchDestination}>
                <TextInput
                    placeholder="Search Keywords"
                    onChangeText={() => console.log("Yet to write logic")}
                    value="Yet to Implement"
                />
                <Button
                    style={styles.button}
                    title="Search"
                    onPress={() => { }}
                />

            </View>
        </View>

    )
}
function MonthlyGoals() {
    return (
        <View>

        </View>

    )
}
function YearlyGoals() {
    return (
        <View>

        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },

    image: {
        flex: 1,
        justifyContent: "center",
        opacity: 2.0,

    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
    destinations: {
        flex: 1,
        backgroundColor: '#E3112A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    SearchDestination: {
        flexDirection: "row",
        justifyContent: 'center',
        color: 'gray',
        width: '80%',
        marginTop: 5,
        marginBottom: 5,
    },
    button:{
        flex:1,
        padding:3,
        margin: 5
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }

});
