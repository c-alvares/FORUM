import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF4DF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divQuadro: {
        width: '75vw',
        height: '40vh',
        borderRadius: '5vw',
        backgroundColor: '#FFE5F2',
    },
    divCirculo: {
        width: '75vw',
        height: '40vh',
        borderRadius: '20vw',
        backgroundColor: '#d3fffb',
        alignItems: 'center',
        justifyContent: 'center'
    },

    titulo: {
        fontFamily: 'Berkshire Swash',
        alignItems: 'center',
    },
    input: {
        width: '65vw',
        height: '5vh',
        borderRadius: '2vw',
        backgroundColor: '#FFFFFF',
        margin: '2vh',
        boxShadow: '0rem 0.25rem 0.25rem rgb(252 156 156 / 25%)',
    },
});