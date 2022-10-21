import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import MapView from 'react-native-maps';

type UserProps = {
    idUsr: number;
    nome: string;
    email: string;
    status: string;
}

const LocEntrega = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {user}:any = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Localização para Entrega</Text>
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7826',
    },    
    texto: {
        fontSize: 20,
        color: '#fff',
    },
    
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})

export default LocEntrega;