import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageProps, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../pages/Services/api';

export interface LinhasProps {
    idLinha: number;
    lnhDescricao: string;
}

export default function LinhasList() {
    const [linhas, setLinhas] = useState<Array<LinhasProps>>([]);

    const navigation = useNavigation();
    useEffect(() => {
        api.get(`linhas`).then(response => { 
            setLinhas(response.data);        
        })    
    },[]);

    return(
        <View style={styles.container}>
            <FlatList 
                style={{marginTop: 35}}
                contentContainerStyle={{marginHorizontal: 20}}
                horizontal
                data={linhas}
                keyExtractor={item => String(item.idLinha)}
                renderItem={({item}) => <ListItem data={item}/> }
            /> 
        </View>
    )    
}

function ListItem({data}: any){
    return(
        <View >
            <TouchableOpacity style={styles.button} onPress={() =>{}}>
                <Image style={styles.icones} source={require(`../../assets/icones/${data.idLinha}.png`)} />
                <Text style={styles.txtLinha} >{data.lnhDescricao}</Text>
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },

    button: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#CCC",
        height: 90,        
        width: 90,
        borderRadius: 50,
        marginLeft: 10,
    },        

    icones: {
        height: 40,        
        width: 40,
        marginBottom: 5,
    },

    txtLinha: {
        fontSize: 9,
        fontWeight: 'bold',
        color: '#FF7826',
    }
})