import React from 'react';
import {View, Text, Image} from 'react-native';

function App(){
  return(
    <View style={{flex:1,padding:20,backgroundColor:'#C0C0C0'}}>
      <View style={{marginBottom:30, alignItems:'center', width:'100%'}}>
        <Image source={require('./img/barbearia.png')} style={{width:200, height:200, borderRadius:20, borderColor:'#FFD700',borderBlockColor:5, borderWidth:5}}></Image>
      </View>
      <View style={{marginBottom:30, alignItems:'center', width:'100%', flexDirection:'column'}}>
        <Text style={{textAlign:'center', fontSize:28,fontWeight:'500',width:'95%',fontWeight: 'bold', textDecorationLine:'underline', textDecorationColor:'#FFD700'}}>Bem-Vindo(a)</Text>
        <Text style={{textAlign:'center', fontSize:25,fontWeight:'500',width:'95%',fontWeight: 'bold', textDecorationLine:'underline', textDecorationColor:'#FFD700'}}>à</Text>
        <Text style={{textAlign:'center', fontSize:28,fontWeight:'500',width:'95%',fontWeight: 'bold', color:'#FFD700', textDecorationLine:'underline', textDecorationColor:'#FFD700'}}>Barberia Prata e Ouro!</Text>
      </View>
      <View style={{marginBottom:30, width:'100%', alignItems:'center'}}>
        <Text style = {{textAlign:'justify', width:'85%',lineHeight:20}}>Estamos felizes em tê-lo aqui. Nosso aplicativo foi criado pensando na sua comodidade e estilo. Agende seu horário, acompanhe seus pontos de fidelidade e fique por dentro das últimas tendências de corte e barba.</Text>
      </View>
      <View style={{flexDirection:'row',width:'100%',justifyContent:'center', alignItems:'center'}}>
        <Text style = {{marginRight:5, textAlign:'center' ,backgroundColor:'#C0C0C0', color:'black', borderBlockColor:5, borderWidth:2, borderColor:'#FFD700', borderRadius: 25, padding:8, width:100, height: 40}}>Cadastrar-se</Text>
        <Text style = {{textAlign:'center' ,backgroundColor:'#FFD700', color:'black', borderBlockColor:5, borderWidth:2, borderColor:'#FFD700', borderRadius: 25, padding:8, width:100, height: 40}}>Entrar</Text>
      </View>
    </View>
  );
}
export default App;