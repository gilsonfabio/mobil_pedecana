import React, { useState, useEffect} from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ProductsProps = {
  prdId: string;
  prdDescricao: string;
  prdReferencia: string;
  prdUrlPhoto: number;
  prdVdaUnitario: number;
}

const width = Dimensions.get('window').width - 5; 

const ListItem = ({ data }:any) => {

  const codProd = 4;
  const imageUrl = require("../../assets/images/1.jpg");
  const navigation = useNavigation();

  const [countItens, setCountItens] = useState(0);

  const images = [
    { id: 0, path: require('../../assets/images/0.jpg') },
    { id: 1, path: require('../../assets/images/1.jpg') },
    { id: 2, path: require('../../assets/images/2.jpg') },
    { id: 3, path: require('../../assets/images/3.jpg') },
    { id: 4, path: require('../../assets/images/4.jpg') },
    { id: 5, path: require('../../assets/images/5.jpg') },
    { id: 6, path: require('../../assets/images/6.jpg') },
    { id: 7, path: require('../../assets/images/7.jpg') },
    { id: 8, path: require('../../assets/images/8.jpg') },
    { id: 9, path: require('../../assets/images/9.jpg') },
    { id: 10, path: require('../../assets/images/10.jpg') },
    { id: 11, path: require('../../assets/images/11.jpg') },
    { id: 12, path: require('../../assets/images/12.jpg') },
    { id: 13, path: require('../../assets/images/13.jpg') },
    { id: 14, path: require('../../assets/images/14.jpg') },
    { id: 15, path: require('../../assets/images/15.jpg') },
    { id: 16, path: require('../../assets/images/16.jpg') },
  ];

  function handleDetalhes(){
    navigation.navigate('Detalhes', {proId: data.prdId});
  }

  return (
    <TouchableOpacity style={styles.item} onPress={handleDetalhes}>
      <View style={[styles.containerProd, styles.shadowProp]}>
        <Image source={images[data.prdUrlPhoto].path} style={styles.itemPhoto} resizeMode="contain" />
        <View style={styles.itemInfo}>
          <Text style={styles.itemP1}>{data.prdDescricao}</Text>
          <Text style={styles.itemP2}>{data.prdReferencia}</Text>
          <Text style={styles.itemP3}>R$ {data.prdVdaUnitario}</Text>
        </View>        
      </View>  
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({  
  containerProd: { 
    width: width / 2 - 10, 
    height: 250,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  item: {
    flexDirection: 'row',
    marginLeft: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
  
  itemPhoto: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  itemInfo: {
    marginLeft: 5,
  },
  itemP1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 16,
    color: '#1b18b3',
    fontWeight: 'bold',
  },
  itemP3: {
    marginTop: 15,
    marginLeft: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#185512',
  },
  itemP4: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#14aa7d',
    color: '#511257',
  },
  button: {
    width: '100%',    
    alignItems: 'center',
    backgroundColor: '#14aa7d',
    padding: 10
  },
});

export default ListItem;
