import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const [getProduct, setGetProduct] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("cart"))
    if (saveData) setGetProduct(saveData)
  }, [])

  const handelDelete = (id) => {
    const updatedProducts = getProduct.filter((prev) => prev.id !== id)
    setGetProduct(updatedProducts)
    localStorage.setItem('cart', JSON.stringify(updatedProducts))
  }

  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 drop-shadow-lg">
          عربة التسوق
        </h2>

        {getProduct.length === 0 ? (
          <div className="text-center text-gray-500 text-lg font-semibold">
            <p>العربة فارغة</p>
            <button className='bg-blue-400 p-1 rounded-lg text-base font-serif text-white cursor-pointer hover:bg-blue-300 my-2' onClick={() => navigate(-1)}>الرجوع للخلف</button>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {getProduct.map((item, index) => (
              <div
                key={index}
                className="animation bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-200 flex flex-col overflow-hidden group"
              >
                <div className="overflow-hidden">
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
                  <span className="text-base font-bold text-green-600 mb-4">
                    {item.price}
                  </span>
                  <button
                    onClick={() => handelDelete(item.id)}
                    className="cursor-pointer mt-auto bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-bold shadow"
                  >
                    حذف من السلة
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart
