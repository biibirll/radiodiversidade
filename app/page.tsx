"use client";

import AzuracastPlayer from "./components/embeds/AzuracastPlayer";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-base mb-4">Rádio diversidade</h1>
        <p className="text-2xl mb-8 font-semibold">Aqui toca o seu som!</p>

        <h2 className="text-xl mb-6 font-semibold">Escute ao vivo</h2>
        <AzuracastPlayer />
      </div>
    </div>
  );
};

export default Home;
