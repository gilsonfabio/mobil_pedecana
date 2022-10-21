import React, { useState, createContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import api from '../pages/Services/api';

type Nav = {
    navigate: (value: string) => void;
}

export const AuthContext = createContext({})

function AuthProvider({children}: any){
    const [user, setUser] = useState({});
    const navigation = useNavigation<Nav>();

    function signIn(email: string, password:string) {
        if(email !== '' && password !== ''){            
            api.get(`signIn/${email}/${password}`).then(response => { 
                setUser({
                    idUsr: response.data.cliId,
                    nome: response.data.cliNome,
                    email: email,
                    status: "ATIVO"
                })
                navigation.navigate("Produtos")
            })             
        } 
    }

    return(
        <AuthContext.Provider value={{signIn, user  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;