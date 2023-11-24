import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

function ViewPlayerScreen({ route }) {
  const { id } = route.params;
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetchPlayer();
  }, []);

  const fetchPlayer = async () => {
    try {
      const response = await axios.get(`https://sua-api.com/jogadoresdebasket/${id}`);
      setPlayer(response.data);
    } catch (error) {
      console.error("Erro ao buscar jogador:", error);
    }
  };

  return (
    <View style={styles.container}>
      {player && (
        <View style={styles.content}>

          <Text style={styles.title}>{player.name}</Text>

          <Image source={{ uri: player.photo }} style={styles.thumbnail} />

          <Text>Posição: {player.position}</Text>

          {/* Adicione outras informações relevantes sobre o jogador de basquete */}
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos permanecem iguais
});

export default ViewPlayerScreen;
