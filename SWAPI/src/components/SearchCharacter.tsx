import api from "../api";
import React, { useState } from "react";

// interface Personagem {
//   name: string;
//   height: string;
//   mass: string;
//   // ... outros campos que você espera receber
// }

// const SearchCharacter: React.FC = () => {
//   const [procuraPersonagem, setProcuraPersonagem] = useState("");
//   const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState<
//     Personagem[]
//   >([]);

//   const Search = async () => {
//     try {
//       const response = await api.get(`/people/search/${procuraPersonagem}`);
//       console.log(response.data); // Verifique o que é retornado aqui
//       setResultadoProcuraPersonagem(response.data.results); // Usar response.data.results
//     } catch (error) {
//       console.error("Erro na procura", error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16 border border-red-500">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           Search();
//         }}
//         className="flex"
//       >
//         <input
//           className="w-full bg-gray-800 text-white p-3 rounded-l-md"
//           type="text"
//           placeholder="Pesquisar personagens de Star Wars"
//           value={procuraPersonagem}
//           onChange={(e) => setProcuraPersonagem(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="bg-f9004d hover:bg-ffcdb8 text-white p-3 rounded-r-md cursor-pointer"
//         >
//           Pesquisar
//         </button>
//       </form>
//       {/* Renderize os resultados da pesquisa aqui */}
//       <div>
//         {resultadoProcuraPersonagem.map((personagem, index) => (
//           <div key={index}>
//             <h2>{personagem.name}</h2>
//             <p>Altura: {personagem.height}</p>
//             <p>Peso: {personagem.mass}</p>
//             {/* Outras informações que você deseja mostrar */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchCharacter;

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCharacter;
