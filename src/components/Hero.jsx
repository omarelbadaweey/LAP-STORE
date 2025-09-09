function Hero() {
  return (
    <>
      <main
        className="bg-animation bg-cover md:bg-center h-[calc(100vh-5rem)] w-full flex justify-center items-center relative overflow-hidden"
        id="main"
      >
        <div
          id="content"
          className=" w-[100%] h-[60%] bg-gradient-to-r from-black to-gray-900 opacity-[.8] text-amber-50 mx-auto flex flex-col justify-center items-center gap-5 shadow-lg shadow-gray-900/50 border-b-2 border-t-2 border-gray-700 overflow-hidden group"
        >
          <i className="fa-solid fa-door-open text-4xl md:text-5xl text-blue-400 transition-all delay-[.6s] group-hover:text-white group-hover:scale-[1.150]"></i>
          <h3 className="text-xl md:text-3xl font-bold group-hover:text-blue-400 transition-all delay-[.6s]">
            Welcome To
            <span className="text-blue-400 md:text-5xl transition-all delay-[.5s] group-hover:text-white">
              _
            </span>
            LAP
            <span className="text-blue-400 md:text-5xl group-hover:text-white transition-all">
              _
            </span>
            STORE
          </h3>
          <span className="w-[200px] h-[6px] bg-blue-400 rounded-[50%] mt-[20px] translate-x-full opacity-0  transition-all duration-[1s] group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-white"></span>
        </div>
      </main>
    </>
  );
}
export default Hero;
