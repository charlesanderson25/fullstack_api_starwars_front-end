import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SearchCharacter from "./components/SearchCharacter";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <Banner />
      <SearchCharacter />
      <Footer />
    </div>
  );
}

export default App;
