import React, { useState, useEffect} from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import api from '../../pages/Services/api';

export interface ProductsProps {
  itePedId: number;
  itePedItem: string;
  itePedProId: number;
  itePedQtde: number;
  itePedVlrUnit: number;
  itePedVlrTotal: number;
}

const width = Dimensions.get('window').width - 5; 

const ListIteCar = ({ data }:any) => {

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

  const onPressAdd = () => {    
    let qtdProd = 1;
    api.post('adiprocar', {   
      itePedId: data.itePedId,
      itePedItem: data.itePedItem,
      itePedProId: data.itePedProId,
      itePedQtde: data.itePedQtde,
      itePedVlrUnit: data.itePedVlrUnit,
      itePedVlrTotal: data.itePedVlrTotal,
    }).then(() => {
        alert('Produto adicionado com sucesso!')
    }).catch(() => {
        alert('Erro no cadastro!');
    })  
    
  }

  const onPressSub = () => {    
    let qtdProd = 1;
    api.post('subprocar', {      
      itePedId: data.itePedId,
      itePedItem: data.itePedItem,
      itePedProId: data.itePedProId,
      itePedQtde: data.itePedQtde,
      itePedVlrUnit: data.itePedVlrUnit,
      itePedVlrTotal: data.itePedVlrTotal,
    }).then(() => {
        alert('Produto subtraido com sucesso!')
    }).catch(() => {
        alert('Erro no cadastro!');
    })  
  }

  return (
    <View key={data.itePedProId} style={styles.containerProd}>
      <View style={styles.itemInfo}>
        <View style={styles.colDescricao}>  
          <Text style={styles.txtDescricao}>{data.prdDescricao}</Text>
          <Text style={styles.txtReferencia}>{data.prdReferencia}</Text>
        </View>
        <View style={styles.colCodigo}>
          <Text>{data.itePedQtde}</Text>
        </View>
        <View style={styles.colVlrProd}>
          <Text style={styles.txtVlrProd}>R$ {data.itePedVlrTotal}</Text>
        </View> 
        <View> 
        <TouchableOpacity style={styles.buttonAdd} onPress={onPressAdd}>  
            <AntDesign name="pluscircleo" size={24} color='white' />
          </TouchableOpacity> 
          <TouchableOpacity style={styles.buttonSub} onPress={onPressSub}>  
            <AntDesign name="minuscircleo" size={24} color='white' />
          </TouchableOpacity>                    
        </View>
      </View>        
    </View>  
  );
};

const styles = StyleSheet.create({  
  containerProd: { 
    width: '100%',
    backgroundColor: '#e6ac76',
    marginBottom: 5,
  },
  
  itemInfo: {
    height: 70,
    backgroundColor: '#e7bf9a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 2,
    marginRight: 2,
  },

  colCodigo: {    
    width: 30,
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  
  colDescricao: {    
    width: 200,
    height: 60,
    flexDirection: 'column',
    marginRight: 2,
  },

  colVlrProd: {    
    width: 70,
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },

  txtDescricao: {
    fontSize:14,
  },

  txtReferencia: {
    fontSize:12,
    fontWeight: 'bold'
  },

  txtVlrProd: {
    fontSize:14,
    fontWeight: 'bold'
  },

  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#14aa7d',
    color: '#fff',
    padding: 2, 
    borderRadius: 50,
  },

  buttonSub: {
    alignItems: 'center',
    backgroundColor: '#9e1313',
    color: '#fff',
    padding: 2,
    borderRadius: 50,
    marginTop:2,
  },

});

export default ListIteCar;
