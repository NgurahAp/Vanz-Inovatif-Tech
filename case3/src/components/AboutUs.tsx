export const AboutUs = () => {
  return (
    <section className="h-screen p-20 w-full flex">
      <div className="w-1/2 flex flex-col justify-center pr-10">
        <h1
          className="text-[#CA7E38] text-2xl font-bold"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
          ABOUT US
        </h1>
        <h1 className="text-5xl font-semibold py-10">
          Lebih dari Sekedar Kopi
        </h1>
        <p className="text-xl">
          Kami mengundang Anda untuk datang, bersantai, dan menikmati waktu di
          sini bersama teman, keluarga, atau sekadar sendiri ditemani buku
          favorit Anda. Dari kopi segar hasil seduhan tangan ahli barista kami
          hingga makanan yang dirancang untuk menggugah selera, kami selalu
          berusaha untuk memberikan yang terbaik.
        </p>
      </div>
      <div className="w-1/2 pl-14 flex items-center justify-center">
        <img src="/about.jpg" className="rounded-lg" alt="" />
      </div>
    </section>
  );
};
