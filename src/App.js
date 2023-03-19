import "./App.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <div className="App w-full h-full bg-[#111111] ">
      <div className="max-w-4xl mx-auto text-white ">
        <Navbar />
        <CartContainer />
      </div>
    </div>
  );
}

export default App;
