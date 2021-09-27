import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'; 

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
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#4167b2",
    },
    conteudos: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
    },
    textInput: {
        backgroundColor: "#ffffff",
        marginTop: 30,
        marginHorizontal: 40,
        height: 48,
        borderRadius: 5,
        paddingLeft: 10,
    },
    facebook:{
        justifyContent: "center",
        //backgroundColor: "red",
        alignItems: "center",
        flexDirection: "row",
        //marginTop: -80,
    },
    texto:{
        fontSize: 50,
        color: "#ffffff",
        fontWeight:'bold',
        marginLeft: 10,
    },
    email:{
        marginTop: 50,
    },
    botao: {
        fontSize: 25,
        backgroundColor: "#223872",
        marginTop: 30,
        marginHorizontal: 40,
        height: 48,
        color: "#ffffff",
        paddingTop: 5,
        textAlign: "center",
    },
    texto2:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    },
});

export default Login;