import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <div className="App">
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
