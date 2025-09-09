import React, { useEffect, useState } from "react";

function ImageUploader() {
  const Data = JSON.parse(localStorage.getItem("user"));

  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saveImage = localStorage.getItem("profileImage");
    if (saveImage) return setImage(saveImage);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader(file);
    reader.onloadend = () => {
      localStorage.setItem("profileImage", reader.result);
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImage(null);
    localStorage.removeItem("profileImage");
    setOpen(false);
  };
  return (
    <>
      {Data && (
        <section className=" text-white flex justify-between items-center px-6 py-4 shadow-md">
          <h1 className=" hidden sm:block text-xl font-bold mr-4">
            {Data.name}
          </h1>

          {/* زرار Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="w-12 h-12 rounded-full border-2 border-gray-300 overflow-hidden focus:outline-none"
            >
              {image ? (
                <img
                  title="تغيير الصوره"
                  src={image}
                  alt="User"
                  className="w-full h-full object-cover cursor-pointer"
                />
              ) : (
                <div
                  className="cursor-pointer w-full h-full bg-gray-700 flex items-center justify-center text-xl"
                  title="اضافه صوره"
                >
                  👤
                </div>
              )}
            </button>

            {/* Dropdown Menu */}
            {open && (
              <div className="fixed right-13 mt-4 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                <div className="flex flex-col">
                  <input
                    type="file"
                    accept="image/* "
                    id="fileInput"
                    hidden
                    onChange={handleFileChange}
                  />
                  {/* اختيار صورة */}
                  {!image && (
                    <label
                      htmlFor="fileInput"
                      className="cursor-pointer px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition"
                    >
                      📤 رفع صورة
                    </label>
                  )}

                  {/* حذف صورة */}
                  {image && (
                    <div>
                      <label
                        htmlFor="fileInput"
                        className="cursor-pointer px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition"
                      >
                        📤 تغيير صورة
                      </label>
                      <button
                        onClick={removeImage}
                        className="px-4 py-3 text-left text-red-600 hover:bg-red-100 transition cursor-pointer"
                      >
                        ❌ حذف الصورة
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

export default ImageUploader;
