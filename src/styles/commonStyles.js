import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    errorMsg: {
        color: "red",
        marginBottom: "10px",
        marginLeft:"10px"
    },
    registerContainer2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: "red",
        opacity: 0.7,
        color: "white",
        marginTop: "20px",
        padding:"60px, 30px"
    },
    loginContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor: "red",
        opacity: 0.7,
        color: "white",
        marginTop: "20px",
        padding:"60px, 30px"
    }
  });

  export default styles