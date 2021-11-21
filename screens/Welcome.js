import * as React from 'react';
import { Pressable, View, Text } from 'react-native';


 function Welcome({ navigation }) {
    return (
      <View style={{ backgroundColor: 'white',flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <View style={{flex:1,justifyContent:'flex-end', marginTop: '30%',width: '100%',alignItems: 'center',}}>
        <Text style={{ fontSize: 30,fontWeight: '500',fontWeight:'bold',color:'#002F67'}}>Welcome!</Text>
        <Text style={{  paddingHorizontal:20,color:'#004E96',fontSize: 16,textAlign:'center'}} >You are now one of the Catalysis family! Continue to choose your path</Text></View>
        <View style={{flex:1,justifyContent:'flex-end'}}>
        <Pressable
          onPress={() => navigation.navigate('Categories')}
          style={{ backgroundColor: '#002F67', padding: 10,marginBottom:80, borderRadius: 20,height: 40,width: 290,justifyContent: 'center',alignItems: 'center', }}
        >
        <Text 
         style={{ fontSize: 14, color:'white',}}>Continue</Text>
        </Pressable>
       </View>
      
      </View>
    );
  }

  export default Welcome;