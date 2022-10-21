import { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import ListItem from '../../components/ListItem';
import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../pages/Services/api';
import { AuthContext } from '../../contexts/auth';

export interface ProductsProps {
    prdId: string;
    prdDescricao: string;
    prdReferencia: string;
    prdUrlPhoto: number;
    prdVdaUnitario: number;
}

type CarProps = {
  carId: number;
}

const Produtos = () => {
  const [produtos, setProdutos] = useState<Array<ProductsProps>>([]); 
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(produtos);

  const [nroCar, setNroCar] = useState();
  const [count, setCount] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  const {user}: any = useContext(AuthContext);

  useEffect(() => {
    api.get(`products`).then(response => { 
        setProdutos(response.data);
        setList(response.data);        
    }) 
    
    let idUsrCar = user.idUsr;    
    api.get(`searchCar/${idUsrCar}`).then(resp => { 
      setNroCar(resp.data.pedId)
      setCount(resp.data.pedQtdtotal)
    }).catch(() => {
      alert('Erro no cadastro!');
    })

  }, []);

  useEffect(() => {
    if (searchText === '') {
       setList(produtos);
    } else {
      setList(
        produtos.filter(
          (item) =>
            item.prdDescricao.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...produtos];

    newList.sort((a, b) => (a.prdDescricao > b.prdDescricao ? 1 : b.prdDescricao > a.prdDescricao ? -1 : 0));

    setList(newList);
  };

  function handleCarShopping(){
    navigation.navigate('CarShopping', {carId: nroCar} );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtProducts} >Olá, {user.nome}</Text>
        <TouchableOpacity onPress={() => {}} style={styles.btnCar}>
          <View style={styles.carShop}>                      
            <AntDesign name="rocket1" size={24} color="black" style={styles.iconCar} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCarShopping} style={styles.btnCar}>
          <View style={styles.carShop}>
            <View style={styles.backQtde}>
              <Text style={styles.qtde}>{count}</Text>
            </View>            
            <FontAwesome name="shopping-cart" size={26} color="black" style={styles.iconCar} />
          </View>
        </TouchableOpacity>  
      </View>         
      <View style={styles.searchArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise um produto"
          placeholderTextColor="#2c2929"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
          <MaterialCommunityIcons
            name="order-alphabetical-ascending"
            size={32}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={styles.list}
        numColumns={2}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.prdId}
      />

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8f0',
  },
  
  header: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF7826',
    color: '#FFF',
  },

  icone: {
    width: 50,
    height: 50,
    color: '#000',
    fontSize: 30,
    padding: 10,
    marginTop: 35,
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#db7107',
    margin: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#0a0a0a',    
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#0a0a0a',
  },
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderButton: {
    width: 32,
    marginRight: 30,
  },
  list: {
    flex: 1,
  },

  txtProducts: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },

  btnCar: {

  },

  carShop: {
    marginRight: 10,
  },

  backQtde: {
    marginLeft: 10,
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 25,
  },

  qtde: {
    color: '#a30c0c',
    fontSize: 12,
    fontWeight: 'bold',
  },

  iconCar: {
    marginTop: -10,
  },

});

export default Produtos;