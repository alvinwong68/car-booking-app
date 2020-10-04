import React from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

const locationSearch = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                PICKUP LOCATION
            </Text>
            { props.position && <TextInput style={styles.location}
                value={props.position} />}
            { !props.position && <ActivityIndicator style={styles.spinner}
                color="#0000ff" />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 20,
        marginTop: 40,
        height: 65,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    title: {
        alignSelf: 'center',
        fontSize: 12,
        color: 'green',
        fontWeight: 'bold',
        fontFamily: 'blair',
    },
    location: {
        height: 40,
        textAlign: 'center',
        fontSize: 13,
    },
    spinner: {
        margin: 10,
    }
})

export default locationSearch;