import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

const confirmationModal = (props) => {
    return (
        <Modal animationType={'fade'} visible={props.visible} transparent={true} >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Contacting nearest car...</Text>
                    <ActivityIndicator style={styles.spinner} color="#0000ff" size={'large'} />
                    <TouchableOpacity style={styles.closeButton} onPress={() => {
                        props.onClose();
                    }}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#0006',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 20,
        borderColor: '#ccc',
        borderWidth: 1
    },
    title: {
        textAlign: 'right',
        fontFamily: 'blair',
        paddingTop: 5,
        fontSize: 12
    },
    spinner: {
        margin: 50,
        alignSelf: 'center'
    },
    closeButton: {
        backgroundColor: '#333',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    closeButtonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
    }
});

export default confirmationModal;