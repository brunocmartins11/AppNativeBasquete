import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('https://web-kzzvnxvgckc8.up-de-fra1-1.apps.run-on-seenode.com/jogador');
      setPlayers(response.data);
    } catch (error) {
      console.error("Erro ao buscar jogadores:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPlayers();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.addButtonContainer}>
        <Button
          title="Adicionar Novo Jogador"
          onPress={() => navigation.navigate('AddPlayer')}
        />
      </View>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.name}</Text>

            <Image source={{ uri: item.photo }} style={styles.thumbnail} />

            <Text>Posição: {item.position}</Text>

            {/* Adicione outras informações do jogador, conforme sua API fornece */}

            <View style={styles.buttonsContainer}>
              <Button
                title="Visualizar"
                onPress={() => navigation.navigate('ViewPlayer', { id: item.id })}
              />

              <Button
                title="Editar"
                onPress={() => navigation.navigate('EditPlayer', { id: item.id })}
              />

              <Button
                title="Remover"
                onPress={async () => {
                  await axios.delete(`https://web-kzzvnxvgckc8.up-de-fra1-1.apps.run-on-seenode.com/jogador/${item.id}`);
                  fetchPlayers();
                }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos permanecem iguais
});

export default HomeScreen;
