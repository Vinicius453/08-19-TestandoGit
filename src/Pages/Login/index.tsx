import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'; 

import {styles} from './styles';

const Login = () => {
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
                    <Text style={styles.botao}> 
                            Log in 
                    </Text> 
                </View> 
                <View style={styles.texto2}> 
                    <Text style={{color: "#ffffff",}}>Sing Up for FaceBook</Text> 
                </View> 
             </View> 
        </View> 
    );
}

export default Login;