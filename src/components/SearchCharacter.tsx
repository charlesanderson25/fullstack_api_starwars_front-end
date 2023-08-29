import api from "../api";
import React, { useState } from "react";
import Button from "./Button";
import searchCharacterStyles from "../searchCharacterStyles";

interface Personagem {
  name: string;
  height: string;
  mass: string;
}

const textSearchCharacter = {
  buttonPesquisar: "Pesquisar",
  buttonAdicionarFavoritos: "Adicionar aos Favoritos",
  h2: "Favoritos",
  pHeight: "Altura:",
  pWeight: "Peso:",
};

const SearchCharacter: React.FC = () => {
  const [procuraPersonagem, setProcuraPersonagem] = useState("");
  const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState<
    Personagem[]
  >([]);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const search = async () => {
    try {
      const response = await api.get(`/people/search/${procuraPersonagem}`);
      console.log(response.data);
      setResultadoProcuraPersonagem(response.data.results);
    } catch (error) {
      console.error("Erro na procura", error);
    }
  };

  const alteraFavoritos = (personagemId: string) => {
    if (favoritos.includes(personagemId)) {
      setFavoritos(favoritos.filter((id) => id !== personagemId));
    } else {
      setFavoritos([...favoritos, personagemId]);
    }
  };

  return (
    <div style={searchCharacterStyles.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        style={searchCharacterStyles.form}
      >
        <input
          style={searchCharacterStyles.input}
          type="text"
          placeholder="Pesquisar personagens de Star Wars"
          value={procuraPersonagem}
          onChange={(e) => setProcuraPersonagem(e.target.value)}
        />
        <Button type="submit" style={searchCharacterStyles.button}>
          {textSearchCharacter.buttonPesquisar}
        </Button>
      </form>
      <div style={searchCharacterStyles.result}>
        {resultadoProcuraPersonagem.map((personagem, index) => (
          <div key={index}>
            <h2 style={searchCharacterStyles.characterInfo}>
              {personagem.name}
            </h2>
            <p style={searchCharacterStyles.characterInfo}>
              {textSearchCharacter.pHeight} {personagem.height}
            </p>
            <p style={searchCharacterStyles.characterInfo}>
              {textSearchCharacter.pWeight} {personagem.mass}
            </p>

            <Button onClick={() => alteraFavoritos(personagem.name)}>
              {textSearchCharacter.buttonAdicionarFavoritos}
            </Button>
          </div>
        ))}
      </div>
      <div style={searchCharacterStyles.favorites}>
        <h2 style={searchCharacterStyles.favorites}>
          {textSearchCharacter.h2}
        </h2>
        <ul style={searchCharacterStyles.favoritesList}>
          {favoritos.map((personagemId) => (
            <li key={personagemId} style={searchCharacterStyles.favoriteItem}>
              {personagemId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCharacter;
