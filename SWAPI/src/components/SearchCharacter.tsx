import api from "../api";
import React, { useState } from "react";

interface Personagem {
  name: string;
  height: string;
  mass: string;
  // ... outros campos que você espera receber
}

const SearchCharacter: React.FC = () => {
  const [procuraPersonagem, setProcuraPersonagem] = useState("");
  const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState<
    Personagem[]
  >([]);
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const containerStyle = {
    backgroundColor: "#1a202c",
    padding: "1.5rem 2rem",
  };

  const formStyle = {
    display: "flex",
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#2d3748",
    color: "white",
    padding: "0.75rem",
    borderRadius: "0.25rem 0 0 0.25rem",
    border: "none",
  };

  const buttonStyle = {
    backgroundColor: "#f9004d",
    hoverBackgroundColor: "#ffcdb8",
    color: "white",
    padding: "0.75rem 1rem",
    borderRadius: "0 0.25rem 0.25rem 0",
    cursor: "pointer",
    border: "none",
  };

  const resultStyle = {
    marginTop: "1rem",
  };

  const search = async () => {
    try {
      const response = await api.get(`/people/search/${procuraPersonagem}`);
      console.log(response.data); // Verifique o que é retornado aqui
      setResultadoProcuraPersonagem(response.data.results); // Usar response.data.results
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
    <div style={containerStyle}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
        style={formStyle}
      >
        <input
          style={inputStyle}
          type="text"
          placeholder="Pesquisar personagens de Star Wars"
          value={procuraPersonagem}
          onChange={(e) => setProcuraPersonagem(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>
          Pesquisar
        </button>
      </form>
      <div style={resultStyle}>
        {resultadoProcuraPersonagem.map((personagem, index) => (
          <div key={index}>
            <h2 style={{ color: "white" }}>{personagem.name}</h2>
            <p style={{ color: "white" }}>Altura: {personagem.height}</p>
            <p style={{ color: "white" }}>Peso: {personagem.mass}</p>
            {/* Outras informações que você deseja mostrar */}
            <button
              style={{
                backgroundColor: favoritos.includes(personagem.name)
                  ? "yellow"
                  : "white",
              }}
              onClick={() => alteraFavoritos(personagem.name)}
            >
              Adicionar aos Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCharacter;
