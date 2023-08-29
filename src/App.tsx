import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <Banner />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
