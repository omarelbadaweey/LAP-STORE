import { Route, Routes } from "react-router-dom";
import Container from "./pages/Container";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default App;