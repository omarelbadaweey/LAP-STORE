import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/img/logo.png";
import ImageUploader from "./ImageUploader";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const showAlert = () => {
    Swal.fire({
      title: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "You will be logged out",
          html: "I will close in <b></b> milliseconds.",
          timer: 1500,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        localStorage.clear();
        setTimeout(() => {
          navigate("/Register");
        }, 1500);
      }
    });
  };

  const handelLogOut = () => {
    showAlert();
  };
  return (
    <header className=" h-[80px] mx-auto bg-black sticky top-0 left-0 overflow-hidden z-[1000]">
      <div className=" mx-auto capitalize text-white flex items-center justify-between w-[90%] h-[100%]">
        <Link to={"/"}>
          <img
            src={logo}
            alt="Lap Store "
            className="h-[125px]"
            title="Lap Store"
          />
        </Link>
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
          {Data && (
            <button
              className="px-4 mx-4  py-1 text-lg md:text-xl  bg-red-700  border-2 border-red-700 rounded-4xl transition-all duration-[.7s] hover:bg-black hover:text-white font-bold cursor-pointer"
              onClick={handelLogOut}
            >
              <i class="fa-solid fa-right-from-bracket"></i>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
