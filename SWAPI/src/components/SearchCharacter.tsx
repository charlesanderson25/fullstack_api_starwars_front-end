import api from "../api";
import React, { useState } from "react";

const SearchCharacter: React.FC = () => {
  const [procuraPersonagem, setProcuraPersonagem] = useState("");
  const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState(
    []
  );

  const Search = async () => {
    try {
      const response = await api.get(`/people/search/${procuraPersonagem}`);
      setResultadoProcuraPersonagem(response.data);
      console.log(resultadoProcuraPersonagem);
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
    </div>
  );
};

export default SearchCharacter;

// const SearchCharacter: React.FC = () => {
//   const [procuraPersonagem, setProcuraPersonagem] = useState("");
//   const [resultadoProcuraPersonagem, setResultadoProcuraPersonagem] = useState(
//     []
//   );

//   const Search = async () => {
//     if (!procuraPersonagem) {
//       return; // Não fazer a chamada se o input estiver vazio
//     }

//     try {
//       const response = await api.get(
//         `http://localhost:3000/people/search/${procuraPersonagem}`
//       );
//       setResultadoProcuraPersonagem(response.data);
//       console.log(resultadoProcuraPersonagem);
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
//     </div>
//   );
// };

// export default SearchCharacter;
