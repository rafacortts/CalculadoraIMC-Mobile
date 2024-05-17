import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    if (isNaN(peso) || isNaN(altura)) {
      Alert.alert("Insira um valor valido nos campos");
      return;
    }
    const valorCalculado = peso / Math.pow(altura, 2);
    setResultado(valorCalculado.toFixed(1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso (KG)"
        onChangeText={(valor) => setPeso(valor)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura (M)"
        onChangeText={(valor) => setAltura(valor)}
        keyboardType="numeric"
      />
      <Button title="Calcular" color={'#E40C72'} onPress={calcular} />
      <Text style={styles.resultado}>{resultado}</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://superafarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },
});
