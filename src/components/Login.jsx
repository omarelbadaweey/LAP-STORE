import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const alertWarning = () =>{
    Swal.fire({
        title: "تحقق من الحقول!",
        text: "من فضلك املأ جميع الحقول المطلوبة.",
        icon: "warning",
        confirmButtonText: "تمام"
      });
  }
  const handelLogin = (e) => {
    e.preventDefault();
    const Data = JSON.parse(localStorage.getItem("user"));
    if (!Data) {
      alertWarning()
      return;
    }

    if (email === Data.email && password === Data.password) {
      navigate("/");
    } else {
      alert("");
    }
  };
  return (
    <section className=" p-5 h-[100vh]  flex flex-col gap-5 items-center justify-center bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6 border border-blue-200">
        <form
          dir="auto"
          onSubmit={handelLogin}
          className=" w-full flex flex-col gap-6 "
        >
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">
            تسجيل الدخول
          </h2>
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            // required
            value={email}
            onChange={(e) => setEmail(e.target.value)}

            // ref={Email}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            // required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // ref={Password}
          />
          <button
            type="submit"
            className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors"
            // onClick={handelLogin}
          >
            دخول
          </button>
        </form>
        <div dir="auto" className="text-center text-sm text-blue-700 mt-2">
          ليس لديك حساب؟
          <button
            onClick={() => navigate("/Register")}
            className="cursor-pointer underline hover:text-blue-500"
          >
            أنشئ حساب
          </button>
        </div>
      </div>
      <button
        className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-lg transition-colors"
        onClick={() => navigate(-1)}
      >
        رجوع للخلف
      </button>
    </section>
  );
}

export default Login;
