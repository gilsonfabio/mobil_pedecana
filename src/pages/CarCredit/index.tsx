import React, { useState } from "react";
import { View, Text, StyleSheet,TextInput, SafeAreaView } from "react-native";

const CarCredit = () => {
    const [nroCartao, setNroCartao] = useState('');
    const [nomCartao, setNomCartao] = useState('');
    const [valCartao, setValCartao] = useState('');
    const [cvvCartao, setCvvCartao] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtTitle} >Credit Card</Text>
            </View> 
            <View style={styles.containerForm}>
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Informe nro do cartão" 
                        style={styles.input } 
                        value={nroCartao}
                        onChangeText={setNroCartao}
                    />
                </View>    
                <View style={styles.containerInput}>
                    <TextInput 
                        placeholder="Nome no cartão" 
                        style={styles.input } 
                        value={nomCartao}
                        onChangeText={setNomCartao}
                    />
                </View>
                <View style={styles.qdrInterno}>
                    <View style={styles.containerInput}>
                        <TextInput 
                            placeholder="Validade" 
                            style={styles.input } 
                            value={valCartao}
                            onChangeText={setValCartao}
                        />
                    </View>
                    <View style={styles.containerInput}>
                        <TextInput 
                            placeholder="Cvv" 
                            style={styles.input } 
                            value={cvvCartao}
                            onChangeText={setCvvCartao}
                        />
                    </View>
                </View>
            </View>   
        </SafeAreaView>        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee7e3',
    },     
    header: {
        flexDirection: 'row',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FF7826',
        color: '#FFF',
    },              
    txtTitle: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerForm: {
        color: '#FFF',
        marginRight: 15,
    },
    containerInput: {
        width: '100%',
        height: 50,
        marginTop: 20,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#db8952',
        color: '#000',
        borderRadius: 10,
        padding: 5,  
        justifyContent: 'center',
    },
    input: {
        marginLeft: 10,
        fontSize: 18,
    },
    qdrInterno: {
        borderColor: '#807979',
        flexDirection: 'row',
        marginTop: 10,
        width: '40%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 

});

  
export default CarCredit

