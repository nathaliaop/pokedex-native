import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { useUser } from "../context/UserContext";
import { Colors, Sizing } from "../styles";
import api from "../services/api";

export default function Login({}) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const handleLogin = () => {
    api
      .get(`users/${username}`)
      .then((response) => setUser(response.data))
      .catch(() => setError("Esse usuário não existe."));
  };

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/illustrations/login-illustration.png")}
        />
        <Text style={styles.title}>
          Explore o{"\n"} mundo pokémon{"\n"} e se divirta
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva seu nome"
          value={username}
          onChangeText={setUsername}
        />
        {!!error && <Text style={styles.errorMessage}>{error}</Text>}
        <Button onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Button>
        <LinkButton text="Criar Conta"></LinkButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: Colors.lightpink,
    paddingHorizontal: Sizing.x50,
    paddingVertical: Sizing.x40,
    justifyContent: "center",
    flex: 1,
  },
  container: {},
  image: {
    height: 350,
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Barlow_700Bold",
    color: Colors.wine,
    fontSize: 30,
    textAlign: "center",
    marginBottom: Sizing.x60,
  },
  input: {
    backgroundColor: Colors.mediumpink,
    borderRadius: Sizing.x20,
    fontFamily: "Barlow_500Medium",
    color: Colors.wine,
    fontSize: 16,
    paddingVertical: Sizing.x20,
    paddingHorizontal: Sizing.x30,
  },
  errorMessage: {
    fontFamily: "Barlow_400Regular",
    color: Colors.primary,
    fontSize: 14,
    marginLeft: Sizing.x10,
  },
  buttonText: {
    fontFamily: "Barlow_600SemiBold",
    color: Colors.white,
    fontSize: 18,
  },
});