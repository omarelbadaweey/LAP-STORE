import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TransitionPage from "./TransitionPage";

function Register() {
  const navigate = useNavigate();
  const [user, setUsers] = useState({
    email: "",
    name: "",
    password: "",
  });
  const alertWarning = () => {
    Swal.fire({
      title: "تحقق من الحقول!",
      text: "من فضلك املأ جميع الحقول المطلوبة.",
      icon: "warning",
      confirmButtonText: "تمام",
    });
  };
  const handelForm = (e) => {
    e.preventDefault(e);
    if (user.email === "" || user.name === "" || user.password === ""  || user.password.length < 6) {
      alertWarning();
    } else {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/Login");
    }

  };
  return (
    <TransitionPage>
      <section className="p-5 h-[calc(100vh-80px)] flex gap-5 flex-col items-center justify-center">
        <form
          dir="auto"
          className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6 border border-blue-200"
        >
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-2">
            تسجيل الدخول
          </h2>
          <input
            type="text"
            placeholder=" اسم  المستخدم"
            className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            onInput={(e) => setUsers({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            onInput={(e) => setUsers({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            className="border mb-2 border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
            onInput={(e) => setUsers({ ...user, password: e.target.value })}
          />
          <span className={`absolute bottom-[135px] text-[12px] ${user.password.length < 6 ? "text-red-400" : "text-green-600"}`}>{user.password.length == 0 ?"" : user.password.length < 6 ? "كلمه المرور قصيره يجب ان تكون 6 احرف" : user.password.length >= 6 ? "كلمه المرور مقبوله" :""}</span>
          <button
            type="submit"
            className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded-lg transition-colors"
            onClick={handelForm}
          >
            دخول
          </button>
          <div dir="auto" className="text-center text-sm text-blue-700 mt-2">
            لدى حساب
            <button
              onClick={() => navigate("/Login")}
              className="cursor-pointer underline hover:text-blue-500"
            >
              سجل الآن
            </button>
          </div>
        </form>
        <button
          className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-lg transition-colors"
          onClick={() => navigate(-1)}
        >
          رجوع للخلف
        </button>
      </section>
    </TransitionPage>
  );
}

export default Register;
