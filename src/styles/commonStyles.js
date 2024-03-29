import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({


    button:{
        marginBottom:7,
        marginTop:7
    },  

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
    },
    calendarTitle: {
        flex: '1 1 100%'
    },
    calendarContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    homeCarousel: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 30
    },
    showPlanes: {
        display:'flex',
        flexDirection: 'row',
        flex: 1,
        paddingLeft: 1,
        alignSelf: "auto",
        flexWrap: "wrap"
      },
      infoCita: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 100
    }
  });

  export default styles