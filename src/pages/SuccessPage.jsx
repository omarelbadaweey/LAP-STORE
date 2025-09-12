import React from "react";
import { useNavigate } from "react-router-dom";
import TransitionPage from "../components/TransitionPage";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <TransitionPage>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-lg text-center border border-green-300">
          <img
            src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
            alt="success"
            className="w-24 h-24 mx-auto mb-6"
          />
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            ✅ تم تسجيل بياناتك بنجاح
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            شكراً لشرائك من موقعنا، سيتم التواصل معك قريباً لتأكيد الطلب.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-green-500 cursor-pointer text-white px-6 py-2 rounded-lg text-lg font-bold hover:bg-green-600 transition-colors shadow"
          >
            الرجوع للصفحة الرئيسية
          </button>
        </div>
      </section>
    </TransitionPage>
  );
}

export default SuccessPage;
