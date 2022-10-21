import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

type UserProps = {
    idUsr: number;
    nome: string;
    email: string;
    status: string;
}

const width = Dimensions.get('window').width - 5; 

const FrmPagto = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {user}:any = useContext(AuthContext);

    function handleCarCredit() {
        navigation.navigate("CarCredit");
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtProducts} >Formas de Pagamento</Text>
            </View>    
            <TouchableOpacity style={[styles.containerProd, styles.shadowProp]} onPress={handleCarCredit}>
                <View >
                    <Image source={require("../../assets/images/credito.jpg")} style={styles.image} />
                </View>    
                <View >
                    <Text style={styles.txtButton}>Cartão de Crédito</Text>
                </View>          
            </TouchableOpacity>
            <TouchableOpacity style={[styles.containerProd, styles.shadowProp]} onPress={() => {}}>
                <View >
                    <Image source={require("../../assets/images/pix.jpg")} style={styles.image} />
                </View>    
                <View >
                    <Text style={styles.txtButton}>Pagto Instantâneo Brasileiro</Text>
                </View>          
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#2e2929',
  },

  containerProd: { 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  image: {
    width: 100,
    height: 100,
  },
  
  header: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF7826',
    color: '#FFF',
  },
  
  txtProducts: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtButton: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default FrmPagto;