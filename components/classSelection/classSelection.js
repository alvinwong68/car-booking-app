import React, { useState } from 'react';
import {
    View,
    Image,
    Dimensions,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet
} from 'react-native';


import classBar from '../../assets/images/classBar.png';
import classCar from '../../assets/images/class.png';

const { height, width } = Dimensions.get('window');


const classSelection = () => {
    const [classBtnPosition] = useState(new Animated.Value(15 + width * 0.1));

    const onClassChange = (className) => {
        switch (className) {
            case 'superior':
                Animated.timing(classBtnPosition, {
                    toValue: width * 0.77,
                    duration: 500,
                    useNativeDriver: true
                }).start();
                break;
            case 'special':
                Animated.timing(classBtnPosition, {
                    toValue: width * 0.50 - 20,
                    duratio: 500,
                    useNativeDriver: true
                }).start();
                break;
            case 'economy':
                Animated.timing(classBtnPosition, {
                    toValue: 15 + width * 0.1,
                    duration: 500,
                    useNativeDriver: true
                }).start();
                break;
            default:
                break;
        }
    }
    

    return (
        <View style={styles.container}>
            <Image style={styles.classBar}
                source={classBar} />
            <Animated.View style={[styles.classButton, { transform: [{
                translateX: classBtnPosition
            }] }]}>
                <Image style={styles.classButtonImage}
                    source={classCar} />
            </Animated.View>
            <TouchableOpacity
                style={[styles.classButtonContainer, { width: width / 3 - 10, left: width * 0.11 }]}
               onPress={()=> {
                   onClassChange('economy');
               }}
            >
                <Text style={styles.classLabel}>economy</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.classButtonContainer, { width: width / 3, left: width / 3 }]}
                onPress={()=> {
                    onClassChange('special');
                }}
            >
                <Text style={[styles.classLabel, { textAlign: 'center' }]}>Special</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.classButtonContainer, { width: width / 3, right: width * 0.11 }]}
                onPress={()=> {
                    onClassChange('superior');
                }}
            >
                <Text style={[styles.classLabel, { textAlign: 'right' }]}>Superior</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 10
    },
    classBar: {
        width: width * 0.7,
        left: width * 0.15,
        resizeMode: 'contain',
        height: 30,
        top: 35
    },
    classButton: {
        top: 30,
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        position: 'absolute',
        backgroundColor: 'white',
        height: 40,
        width: 40
    },
    classButtonImage: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 30
    },
    classButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 70,
        top: 10
    },
    classLabel: {
        paddingTop: 5,
        fontSize: 12,
        fontFamily: 'blair'
    }
});

export default classSelection;