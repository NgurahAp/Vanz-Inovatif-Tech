export const Hero = () => {
  return (
    <section className="relative max-h-screen h-[100vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay untuk membuat video lebih gelap */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display SC', serif" }}
          >
            KISAH KOPI
          </h1>

          <p className="text-lg  text-white mx-auto ">
            Setiap cangkir kopi punya kisahnya, dan kami di Kisah Kopi ingin
            membaginya dengan Anda. Dari biji kopi lokal terbaik, kami
            menghadirkan berbagai varian kopi yang tak hanya nikmat, tetapi juga
            memiliki cerita di balik prosesnya.
          </p>
          <button className="px-10 py-3 border text-white rounded-lg font-semibold mt-10">
            Layanan Kami
          </button>
        </div>
      </div>
    </section>
  );
};
