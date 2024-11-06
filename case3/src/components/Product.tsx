export const Product = () => {
  return (
    <section className="w-full p-20">
      <h1
        className="flex flex-col items-center font-bold text-5xl text-[#CA7E38]"
        style={{ fontFamily: "'Playfair Display SC', serif" }}
      >
        OUR PRODUCTS
      </h1>
      <div className="flex justify-center items-center">
        <hr className="mt-4 mb-10 border-black w-72 border-[1px] " />
      </div>
      <div className="flex gap-x-4">
        <div className="relative w-[35%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/americano.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Americano
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative w-[25%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/caramel.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Caramel
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative w-[40%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/cafeLate.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Cafe Latte
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
      <div className="flex gap-x-4 pt-4">
        <div className="relative w-[15%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/matcha.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Matcha Latte
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative w-[35%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/chocolate.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Iced Chocolate
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative w-[20%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/red.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Red Velvet
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative w-[30%] h-96 overflow-hidden group">
          <img
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            src="/rum.jpg"
            alt=""
          />
          <div className="absolute bottom-4 left-4 text-white font-medium z-10">
            Rum
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>
    </section>
  );
};
