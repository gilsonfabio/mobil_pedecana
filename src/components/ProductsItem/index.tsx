import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image, ImageProps, TouchableOpacity, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import api from '../../pages/Services/api';

export interface ProductsProps {
    idProd: string;
    proImage: ImageProps["source"];
    proDescricao: string;
    proReferencia: string;
}

const width = Dimensions.get('window').width -40;

export default function ProductsItem() {
    const [produtos, setProdutos] = useState<Array<ProductsProps>>([]);

    const navigation = useNavigation();
    useEffect(() => {
        api.get(`products`).then(response => { 
            setProdutos(response.data);        
        })    
    },[]);

    //useEffect(() => {
    //    api.get(`products`).then(response => { 
    //        setProdutos(response.data);        
    //    })    
    //},[linha]);

    return(
        <View style={styles.container}>
            <FlatList 
                style={{marginTop: 35}}
                contentContainerStyle={{marginHorizontal: 20}}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={produtos}
                keyExtractor={item => String(item.idProd)}
                renderItem={({item}) => <ListItem data={item}/> }
            /> 
        </View>
    )    
}

function ListItem({data}: any){
    return(
        <View >
            <TouchableOpacity style={styles.button} onPress={() =>{}}>
                <View style={styles.content}>
                  <Image style={styles.icones} source={require('../../assets/icones/1.png')} />
                  <Text  style={styles.text}>{data.proDescricao}</Text>
                  <Text style={styles.text} numberOfLines={5} >{data.proReferencia}</Text>
                </View>  
            </TouchableOpacity>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    button: {
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginBottom: 3,
        marginLeft: 2,      
    },        
    
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width / 2 - 10,
      padding: 8,
      borderRadius: 10,
    },

    icones: {
      height: 40,        
      width: 40,
      marginBottom: 5,
    },

    text:{
      fontSize:12,

    }


})