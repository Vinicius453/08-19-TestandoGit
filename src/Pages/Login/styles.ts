import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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