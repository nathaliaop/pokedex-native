import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView, FlatList, ActivityIndicator} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from '../components/Card';
import api from '../services/api';
import { Sizing } from "../styles";

export default function Feed() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
  
    const fetchPokemons = async () => {
      /** se já estiver carregando, não deve carregar */
      if (loading) return;
      /** se chegou ao final dos pokemons, não deve carregar mais */
      if (page == null) return;
  
      setLoading(true);
  
      const response = await api.get(`pokemons?page=${page}`);
      const { data, next_page } = response.data;
      setPokemons([...pokemons, ...data]);
      setPage(next_page);
  
      setLoading(false);
    };
  
    useEffect(() => {
      fetchPokemons();
    }, []);

  useEffect(() => {
    axios
      .get("https://pokedex20201.herokuapp.com/pokemons")
      .then((response) => setPokemons(response.data.data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={pokemons}
        numColumns={2}
        renderItem={({ item }) => <Card pokemon={item} />}
        keyExtractor={(pokemon) => pokemon.id.toString()}
        onEndReached={fetchPokemons}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          loading ? (
            <ActivityIndicator size={Sizing.x30} color={Colors.primary} />
          ) : (
            <View style={{ height: Sizing.x30 }} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatList: {
    alignItems: "center",
  },
});