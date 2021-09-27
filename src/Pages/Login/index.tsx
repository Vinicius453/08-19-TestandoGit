import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'; 

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';

type LoginProps = NativeStackNavigationProp<StackNavigatorParamList,"Login">;

const Login = () => {

    const navigation = useNavigation<LoginProps>();

    function irParaTelaHome(){
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}> 
            <View style={styles.conteudos}> 
                <View style={styles.facebook}>
                    <View> 
                        <Image source={ 
                            require("../../assets/facebook.png") 
                            }> 
                        </Image>
                    </View> 
                    <View> 
                        <Text style={styles.texto}> 
                            Facebook 
                        </Text> 
                    </View> 
                </View> 
                <View style={styles.email}> 
                    <TextInput 
                        placeholder="Email" 
                        placeholderTextColor="#a7a7a7" 
                        style={styles.textInput} 
                    /> 
                    <TextInput 
                        placeholder="Senha" 
                        placeholderTextColor="#a7a7a7" 
                        style={styles.textInput} 
                    />
                    <TouchableOpacity onPress={irParaTelaHome}> 
                        <Text style={styles.botao}> 
                                Log in 
                        </Text> 
                    </TouchableOpacity>
                </View> 
                <View style={styles.texto2}> 
                    <Text style={{color: "#ffffff",}}>Sing Up for FaceBook</Text> 
                </View> 
             </View> 
        </View> 
    );
}

export default Login;