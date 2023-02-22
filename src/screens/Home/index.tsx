import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {
  const [title, setTitle] = useState('Eduardo Soares');
  const [quantity, setQuantity] = useState(0);

  function handleAddQuantity() {
    setQuantity(state => state + 1)
  }

  return ( 
    <View style={styles.container}>
      <Text style={styles.text}>Nome do evento</Text>

      <Text style={styles.infoData}>22 de fevereiro de 2023</Text>

      <View style={styles.containerInputForm}>
        <TouchableOpacity style={styles.button} onPress={handleAddQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TextInput 
          value={title}
          placeholder="Digite seu nome"
          style={styles.input}
          onChangeText={setTitle}
          placeholderTextColor="#555555"
        />
      </View>
    </View>
  );
}