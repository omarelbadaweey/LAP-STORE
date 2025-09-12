import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import { AnimatePresence } from "motion/react";
import SuccessPage from "./pages/SuccessPage";

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
      <Header />

        <AnimatePresence mode="wait">
                <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
      </Routes>
        </AnimatePresence>
    </>
  );
}
export default App;