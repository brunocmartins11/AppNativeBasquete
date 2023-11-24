import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function AddPlayerScreen({ navigation }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [height, setHeight] = useState('');
  const [current_team, setCurrentTeam] = useState('');

  const addPlayer = async () => {
    try {
      await axios.post('https://sua-api.com/jogadoresdebasket', { name, position, height, current_team });
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao adicionar jogador:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Posição" value={position} onChangeText={setPosition} />
      <TextInput style={styles.input} placeholder="Altura" value={height} onChangeText={setHeight} />
      <TextInput style={styles.input} placeholder="Time Atual" value={current_team} onChangeText={setCurrentTeam} />
      <Button title="Adicionar" onPress={addPlayer} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos permanecem iguais
});

export default AddPlayerScreen;
