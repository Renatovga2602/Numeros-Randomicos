import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';
//var View = require('react-native').View;
//var Button = require('react-native').Button;
//var AppRegistry = require('react-native').AppRegistry;
//linha 2 equivale as linhas 3,4 e 5;
const numAleatorio = () => {
  var num_aleatorio = Math.random();

  num_aleatorio = Math.floor(num_aleatorio * 10);
  alert(num_aleatorio);

}
const App = () => {

  return (
    <View>
      <Text>Gerador de Números Randômicos</Text>
      <Button
        title="Gerar número randômico"
        onPress={numAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);

