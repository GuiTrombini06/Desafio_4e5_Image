import React from 'react';
import {View, Text, Image} from 'react-native';

function App(){
  return(
    <View style = {{flex:1, backgroundColor: '#4F4F4F'}}>

      <View style = {{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Text style = {{color: '#ffffff', fontSize: 40, textAlign: 'center', padding:10, fontFamily: 'Roboto', fontWeight:'bold'}}>PERFIL</Text>
      </View>

      <View style = {{flex:1,backgroundColor: '#1C1C1C', width:'100%'}}></View>

      <View style = {{flex:11, backgroundColor: '#4F4F4F', width:'100%',alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Image source = {require('./img/Ft_Perfil.png')} style = {{width: 200, height: 200, borderRadius: '100%', borderColor: '#1C1C1C', borderWidth:3}}></Image>
        <View>
          <Text style = {{marginTop: 30, color: 'gray', fontSize: 20, fontFamily: 'Roboto', fontWeight:'bold'}}>Nome</Text>
          <Text style = {{color: 'white', marginBottom: 20, marginTop: 5, fontSize: 16}}>Guilherme Trombini de Castro</Text>
          <Text style = {{color: 'gray', fontSize: 20, fontFamily: 'Roboto', fontWeight:'bold'}}>Telefone</Text>
          <Text style = {{color: 'white', marginBottom: 20, marginTop: 5, fontSize: 16}}>+55 41 998383103</Text>
          <Text style = {{color: 'gray', fontSize: 20, fontFamily: 'Roboto', fontWeight:'bold'}}>Descrição</Text>
          <Text style = {{color: 'white', marginTop: 5, fontSize: 16}}>provérbios 16:3 "Consagre ao Senhor todos os teus sonhos e tudo oque você for fazer e você será bem sucedido."</Text>
        </View>
      </View>

      <View style = {{flex:1,backgroundColor: '#1C1C1C', width:'100%'}}></View>

      <View style = {{flex:1, backgroundColor: '#4F4F4F',alignItems: 'center', justifyContent: 'center'}}>
        <View style ={{backgroundColor:'#1C1C1C', width: '90%', height: '80%', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style = {{color: '#ffffff', fontSize: 30, textAlign: 'center', padding:10, fontFamily: 'Roboto', fontWeight:'bold'}}>SALVAR PERFIL</Text>
        </View>
      </View>

    </View>
  );
}
export default App;