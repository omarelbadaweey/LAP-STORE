import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Footer() {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // let scrollTopBtn = document.getElementById("backTop");
      const backtop = () =>{
        window.scroll({top:0 , behavior : "smooth"})
    };





  return (

    <>
{showBtn &&  (<button onClick={backtop} id="backTop"className="fixed bottom-6 right-6 bg-gray-900 text-white w-[50px] h-[50px] rounded-full shadow-lg border-3 border-white outline-4 outline-gray-900 transition-opacity  z-50 cursor-pointer">
    <i className="fas fa-chevron-up text-xl"></i>
  </button>)}
      <footer className="bg-gradient-to-r from-black to-black text-gray-200 py-12 font-sans mt-[50px]">
          <div className="max-w-7xl mx-auto  px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <h3 className="text-cyan-400 text-xl mb-4 font-semibold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="courses.html" className="hover:text-white">Home</a></li>
                  <li><a href="about.html" className="hover:text-white">About Us</a></li>
                  <li><a href="contact.html" className="hover:text-white">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-cyan-400 text-xl mb-4 font-semibold">Follow Us</h3>
                <div className="flex space-x-4 text-2xl">
                  <a href="#" className="text-teal-600 hover:text-white"><i className="fab fa-facebook"></i></a>
                  <a href="#" className="text-teal-600 hover:text-white"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="text-teal-600 hover:text-white"><i className="fab fa-linkedin"></i></a>
                </div>

            </div>
            <div>
                <h3 className="text-cyan-400 text-xl mb-4 font-semibold">LAP STORE</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  An online learning platform offering top-quality courses in programming, design, and business. Learn at your pace, boost your skills, and level up your career.
                </p>
              </div>
            </div>
          <p className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500"> © 2025 All rights reserved - LAP STORE</p>
      </footer>
      </>
  );
}
export default Footer;