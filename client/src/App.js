import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
