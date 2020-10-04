import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const { height, width } = Dimensions.get('window');

const locationPin = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>SET PICKUP</Text>
                <TouchableOpacity style={styles.bannerButton} onPress={() => {
                    props.onClickBooking();
                }}>
                    <Text style={styles.bannerButtonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bannerPole}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignSelf: 'center',
        top: height / 2 - 60

    },
    banner: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#333',
        padding: 10,
        paddingBottom: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 2,
    },
    bannerText: {
        alignSelf: 'center',
        color: 'white',
        marginRight: 10,
        marginLeft: 10,
        fontSize: 10,
    },
    bannerButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 26,
        height: 26,
        borderRadius: 13,
    },
    bannerButtonText: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 18
    },
    bannerPole: {
        backgroundColor: '#333',
        width: 3,
        height: 30,
        alignSelf: 'center'
    }
})

export default locationPin;