import api from "../api";
import React, { useState } from "react";

// interface Personagem {
//   name: string;
//   height: string;
//   mass: string;
//   hair_color: string;
//   skin_color: string;
// }

// const SearchCharacter: React.FC = () => {
//   const [procuraPersonagem, setProcuraPersonagem] = useState("");
//   const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState(
//     []
//   );

//   const Search = async () => {
//     try {
//       const response = await api.get(`/people/search/${procuraPersonagem}`);
//       console.log("Resultados da pesquisa:", response.data);
//       setResultadoProcuraPersonagem(response.data);
//     } catch (error) {
//       console.error("Erro na procura", error);
//     }
//   };

//   return (
//     <div className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16">
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
//       {resultadoProcuraPersonagem.map((personagem, index) => (
//         <div key={index} className="bg-white p-4 m-2 rounded-md">
//           <h3>{personagem.name}</h3>
//           {/* Outras informações do personagem */}
//         </div>
//       ))}
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

  const Search = async () => {
    try {
      const response = await api.get(`/people/search/${procuraPersonagem}`);
      console.log(response.data); // Verifique o que é retornado aqui
      setResultadoProcuraPersonagem(response.data.results); // Usar response.data.results
    } catch (error) {
      console.error("Erro na procura", error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 sm:p-8 md:p-12 lg:p-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Search();
        }}
        className="flex"
      >
        <input
          className="w-full bg-gray-800 text-white p-3 rounded-l-md"
          type="text"
          placeholder="Pesquisar personagens de Star Wars"
          value={procuraPersonagem}
          onChange={(e) => setProcuraPersonagem(e.target.value)}
        />
        <button
          type="submit"
          className="bg-f9004d hover:bg-ffcdb8 text-white p-3 rounded-r-md cursor-pointer"
        >
          Pesquisar
        </button>
      </form>
      {/* Renderize os resultados da pesquisa aqui */}
      <div>
        {resultadoProcuraPersonagem.map((personagem, index) => (
          <div key={index}>
            <h2>{personagem.name}</h2>
            <p>Altura: {personagem.height}</p>
            <p>Peso: {personagem.mass}</p>
            {/* Outras informações que você deseja mostrar */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCharacter;
