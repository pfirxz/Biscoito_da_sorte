import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("../biscoito_da_sorte/assets/biscoitoaberto-removebg-preview.png"));
  const [textFrase, setTextFrase] = useState("");

  let frases = [
    "Eu não controlo o medo deles, só o meu",
    "vingadores, avante!",
    "Venham a mim, meus xmen",
    "Eu sou o homem de ferro",
    "O S signfica esperança",
    "Eu sou o batman",
    "Eu sou a encarnação da vida e da destruição",
    "Eu sou a fênix",
    "Tudo foi revelado",
    "Você não passa de uma voz, seraphine",
    "Continue a nadar",
    "maga e demaciana?",
    "esse era meu primerio hate?",
    "Sou mais alto que o topo",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextFrase(' "' + frases[numeroAleatorio] + '" ');
    setImg(require("../biscoito_da_sorte/assets/biscoitoaberto-removebg-preview.png"));
  }

  function reiniciarBiscoito() {
    setImg(require("../biscoito_da_sorte/assets/biscoitofechado-removebg-preview.png"));
    setTextFrase("");
  }

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />

      <Text style={styles.textoFrase}>{textFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { marginTop: 15, borderColor: "#732002" }]}
        onPress={reiniciarBiscoito}
      >
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#732002" }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'blue',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#732002",
    margin: 30,
    fontStyle: "bold",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#732002",
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor:"green",
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#732002",
    
  },
});

