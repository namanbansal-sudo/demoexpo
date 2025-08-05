import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 30,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    input: {
      width: '100%',
      height: 48,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginBottom: 16,
      fontSize: 16,
      backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
      width: '100%',
      marginTop: 10,
    },
  });

export default styles;