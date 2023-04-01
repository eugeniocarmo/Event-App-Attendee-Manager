import { StyleSheet } from "react-native/";


export const styles = StyleSheet.create({
    Participant: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#fff"

    },
    container: {
      width: '100%',
      backgroundColor: '#1f1e25',
      borderRadius: 8,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10
    },
    name: {
      color: "#fff",
      flex: 1,
      marginLeft: 16,
      fontSize: 16
      
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#e23c44',
      alignItems: 'center',
      justifyContent: 'center' 
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 16
    },
})