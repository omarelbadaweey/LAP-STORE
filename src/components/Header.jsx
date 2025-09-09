import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logo.png";
import ImageUploader from "./ImageUploader";
import { useEffect, useState } from "react";

function Header() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const Data = JSON.parse(localStorage.getItem("user"));

  const handelLogin = (e) => {
    e.preventDefault();
    navigate("/Login");
  };

  const handelRegister = (e) => {
    e.preventDefault();
    navigate("/Register");
  };

  useEffect(() => {
    const updateCart = () => {
      const counter = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(counter);
    };

    window.addEventListener("storageUpdated", updateCart);
    updateCart();

    return () => window.removeEventListener("storageUpdated", updateCart);
  }, []);

  return (
    <header className=" h-[80px] mx-auto bg-black sticky top-0 left-0 overflow-hidden z-[1000]">
      <div className=" mx-auto capitalize text-white flex items-center justify-between w-[90%] h-[100%]">
        <img
          src={logo}
          alt="Lap Store "
          className="h-[125px]"
          title="Lap Store"
        />
        <div className="parent flex items-center">
          {!Data && (
            <>
              <button
                className="px-1 md:px-4 py-1 md:py-1.5 text-lg md:text-xl  bg-blue-400  border-2 border-blue-400 rounded-4xl transition-all duration-[.7s] hover:bg-black hover:text-blue-400 font-bold cursor-pointer"
                onClick={handelRegister}
              >
                sign up
              </button>
              <button
                className=" ml-3 px-1 md:px-4 py-1 md:py-1.5 text-lg md:text-xl  bg-blue-400  border-2 border-blue-400 rounded-4xl transition-all duration-[.7s] hover:bg-black hover:text-blue-400 font-bold cursor-pointer"
                onClick={handelLogin}
              >
                sign in
              </button>
            </>
          )}

          <ImageUploader />

          <a
            href="dashBoard.html"
            title="Profile Name"
            className="hidden font-bold sm:text-xl md:text-2xl uppercase lg:ml-5 border-x-2 px-2"
            id="account"
          ></a>

          <button className="cursor-pointer" onClick={() => navigate("/Cart")}>
            <i className="fas fa-shopping-cart ml-3 text-3xl text-transparent bg-clip-text cursor-pointer bg-gradient-to-l to-blue-400 from-blue-400 relative">
              <span
                className="absolute top-[-10px] left-0 z-10 bg-red-600 w-6 h-6 rounded-full text-blue-50 text-xl font-bold text-center"
                id="badge"
              >
                {cart.length}
              </span>
            </i>
          </button>

          <div
            dir="auto"
            className="hidden overflow-auto h-auto max-h-[60vh] fixed top-[50%] left-[50%] translate-[-50%] bg-white text-black text-center px-4 py-6 rounded-lg shadow-lg w-[70%] md:w-[40%]"
            id="cartDropdown"
          >
            <h3 className="text-2xl text-blue-400 font-bold mb-2 ">
              عربة التسوق
            </h3>

            <div id="viewProduct">
              {cart.map((item, index) => (
                <p key={index}>{item.name}</p>
              ))}
            </div>

            <button
              className=" cursor-pointer mt-2 px-4 py-2  text-white rounded-lg bg-red-700 hover:opacity-[.9]"
              id="closeCard"
            >
              إغلاق
            </button>
            <button
              className=" cursor-pointer mt-2 px-4 py-2 bg-black text-white rounded-lg hover:opacity-[.9]"
              id="showCardPage"
              onClick={() => navigate("/Cart")}
            >
              عرض المنتجات
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
