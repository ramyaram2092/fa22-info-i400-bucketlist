import { StyleSheet, View, } from 'react-native';


export function Restaurant() {
    return (
      <View style={styles.restaurants}>
  
      </View>
  
    )
  
  }



  const styles = StyleSheet.create({
    
    image: {
      flex: 1,
      justifyContent: "center",
      opacity:2.0,
  
    },
    text: {
      color: "white",
      fontSize: 30,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
    },
    
    restaurants: {
      flex: 1,
      backgroundColor: '#E311D6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      justifyContent: 'center',
  
      borderWidth: 1,
      
    },
  
    header:{
      fontSize: 20,
      fontWeight: 'bold',}
    
  });
  