import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Content() {
  const [items ] = useState([
    { id: 1, name: "Dell XPS 13", os: "Windows 11", price: "32,000 EGP", img: "src/img/Dell XPS 13.jpg" },
    { id: 2, name: "MacBook Pro 14", os: "macOS Sonoma", price: "65,000 EGP", img: "src/img/MacBook Pro 14.jpg" },
    { id: 3, name: "Lenovo ThinkPad X1", os: "Windows 10 Pro", price: "28,000 EGP", img: "src/img/Lenovo ThinkPad X1.jpg" },
    { id: 4, name: "HP Spectre x360", os: "Windows 11", price: "34,000 EGP", img: "src/img/HP Spectre x360.jpg" },
    { id: 5, name: "Asus ZenBook", os: "Windows 10", price: "25,000 EGP", img: "src/img/Asus ZenBook.jpg" },
    { id: 6, name: "Acer Swift 5", os: "Linux Ubuntu", price: "22,000 EGP", img: "src/img/Acer Swift 5.jpg" },
    { id: 7, name: "MSI GF63", os: "Windows 11", price: "30,000 EGP", img: "src/img/MSI GF63.jpg" },
    { id: 8, name: "MacBook Air M2", os: "macOS Ventura", price: "48,000 EGP", img: "src/img/MacBook Air M2.jpg" },
    { id: 9, name: "Huawei MateBook X Pro", os: "Windows 11", price: "36,000 EGP", img: "src/img/Huawei MateBook X Pro.jpg" },
    { id: 10, name: "Microsoft Surface Laptop 5", os: "Windows 11", price: "38,000 EGP", img: "src/img/Microsoft Surface Laptop 5.jpg" },
    { id: 11, name: "Razer Blade 15", os: "Windows 11", price: "55,000 EGP", img: "src/img/Razer Blade 15.jpg" },
    { id: 12, name: "Apple MacBook Pro 16", os: "macOS Sonoma", price: "80,000 EGP", img: "src/img/Apple MacBook Pro 16.jpg" },
    { id: 13, name: "Dell Inspiron 15", os: "Windows 10", price: "20,000 EGP", img: "src/img/Dell Inspiron 15.jpg" },
    { id: 14, name: "HP Envy 13", os: "Windows 11", price: "27,000 EGP", img: "src/img/HP Envy 13.jpg" },
    { id: 15, name: "Acer Aspire 7", os: "Linux Mint", price: "19,000 EGP", img: "src/img/Acer Aspire 7.jpg" },
    { id: 16, name: "Asus VivoBook S15", os: "Windows 10", price: "23,000 EGP", img: "src/img/Asus VivoBook S15.jpg" },
    { id: 17, name: "Lenovo Yoga Slim 7", os: "Windows 11", price: "29,000 EGP", img: "src/img/Lenovo Yoga Slim 7.jpg" },
    { id: 18, name: "MSI Prestige 14", os: "Windows 11", price: "33,000 EGP", img: "src/img/MSI Prestige 14.jpg" },
    { id: 19, name: "Apple MacBook Air M1", os: "macOS Ventura", price: "40,000 EGP", img: "src/img/Apple MacBook Air M1.jpg" },
    { id: 20, name: "Dell Latitude 7420", os: "Windows 11", price: "35,000 EGP", img: "src/img/Dell Latitude 7420.jpg" },
    { id: 21, name: "HP Pavilion 14", os: "Windows 10", price: "18,000 EGP", img: "src/img/HP Pavilion 14.jpg" },
    { id: 22, name: "Acer Nitro 5", os: "Windows 11", price: "31,000 EGP", img: "src/img/Acer Nitro 5.jpg" },
    { id: 23, name: "Asus ROG Zephyrus G14", os: "Windows 11", price: "60,000 EGP", img: "src/img/Asus ROG Zephyrus G14.jpg" },
    { id: 24, name: "Lenovo Legion 5", os: "Windows 11", price: "42,000 EGP", img: "src/img/Lenovo Legion 5.jpg" },
    { id: 25, name: "Apple MacBook Pro 13", os: "macOS Sonoma", price: "55,000 EGP", img: "src/img/Apple MacBook Pro 13.jpg" },
    { id: 26, name: "Dell G5 15", os: "Windows 11", price: "37,000 EGP", img: "src/img/Dell G5 15.jpg" },
    { id: 27, name: "HP Omen 15", os: "Windows 11", price: "44,000 EGP", img: "src/img/HP Omen 15.jpg" },
    { id: 28, name: "Acer Chromebook 14", os: "Chrome OS", price: "12,000 EGP", img: "src/img/Acer Chromebook 14.jpg" },
    { id: 29, name: "Asus TUF Gaming F15", os: "Windows 11", price: "39,000 EGP", img: "src/img/Asus TUF Gaming F15.jpg" },
    { id: 30, name: "Lenovo IdeaPad 5", os: "Windows 10", price: "21,000 EGP", img: "src/img/Lenovo IdeaPad 5.jpg" },
    { id: 31, name: "MSI Modern 14", os: "Windows 11", price: "26,000 EGP", img: "src/img/MSI Modern 14.jpg" },
    { id: 32, name: "Apple MacBook Air 2024", os: "macOS Sequoia", price: "52,000 EGP", img: "src/img/Apple MacBook Air 2024.jpg" },
  ]);

  const [cart, setCart] = useState([]); 
  const navigate = useNavigate()
  const addToCart = (id) => {
    const product = items.find(item => item.id === id); // نجيب المنتج
    if (product) {
      setCart(prevCart => [...prevCart, product]); // نضيفه للسلة
      localStorage.setItem('cart', JSON.stringify([...cart, product])); 
       window.dispatchEvent(new Event("storageUpdated")); 

      toast.success(
      <div className="w-[200px] flex items-center  " key={product}>
        <img src={product.img} alt={product.title} className='h-[50px] w-[70px] object-cover rounded-2xl'/>
        <div className=" flex flex-col ml-5">
          <strong className="mb-3 text-over-flow">{product.name}</strong>
          <p>added to cart</p>
          <div>
            <button onClick={() => navigate("/Cart")} className='cursor-pointer mt-4 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-bold shadow'>View Cart</button>
          </div>
        </div>
      </div>
      ,{duration : 3500}
    )

    }

  };

  return (
    <section className=" py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <marquee behavior="" direction="" className="mb-10 flex flex-wrap gap-4 border-t-2 border-b-2 py-2 border-blue-400">
        <div className=" flex gap-8 ">
          {items.map((item) => (
            <div
              key={item.id}
              className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200 flex w-[300px] flex-col overflow-hidden group"
            >
              <div className="overflow-hidden ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.name}</h3>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs mb-2 font-semibold">
                  {item.os}
                </span>
                <span className="text-base font-bold text-green-600 mb-4">{item.price}</span>
                <button onClick={() => addToCart(item.id)} className={`cursor-pointer mt-auto bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-bold shadow `}>
                  اشتري الآن
                </button>
              </div>
            </div>
          ))};
        </div>
        </marquee>
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 drop-shadow-lg">أحدث أجهزة اللابتوب</h2>
        <div className=" grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="animation bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200 flex flex-col overflow-hidden group"
            >
              <div className="overflow-hidden ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-blue-700 mb-2">{item.name}</h3>
                <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs mb-2 font-semibold">
                  {item.os}
                </span>
                <span className="text-base font-bold text-green-600 mb-4">{item.price}</span>
                <button onClick={() => addToCart(item.id)} className="cursor-pointer mt-auto bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-bold shadow">
                  اشتري الآن
                </button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </section>
  );
}

export default Content;


