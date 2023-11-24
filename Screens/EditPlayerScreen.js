import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function EditPlayerScreen({ route, navigation }) {
  const { id } = route.params;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [height, setHeight] = useState('');
  const [current_team, setCurrentTeam] = useState('');

  useEffect(() => {
    fetchPlayer();
  }, []);

  const fetchPlayer = async () => {
    try {
      const response = await axios.get(`https://web-kzzvnxvgckc8.up-de-fra1-1.apps.run-on-seenode.com/jogador${id}`);
      const player = response.data;

      setName(player.name);
      setPosition(player.position);
      setHeight(player.height);
      setCurrentTeam(player.current_team);
    } catch (error) {
      console.error("Erro ao buscar jogador:", error);
    }
  };

  const editPlayer = async () => {
    try {
      await axios.put(`https://web-kzzvnxvgckc8.up-de-fra1-1.apps.run-on-seenode.com/jogador${id}`, { name, position, height, current_team });
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao editar jogador:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Posição" value={position} onChangeText={setPosition} />
      <TextInput style={styles.input} placeholder="Altura" value={height} onChangeText={setHeight} />
      <TextInput style={styles.input} placeholder="Time Atual" value={current_team} onChangeText={setCurrentTeam} />
      <Button title="Editar" onPress={editPlayer} />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos permanecem iguais
});

export default EditPlayerScreen;
