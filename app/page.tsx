"use client";

import AzuracastPlayer from "./components/embeds/AzuracastPlayer";
import VoxPlayer from "./components/embeds/VoxPlayer";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-2xl mb-8 mt-2 font-semibold">Aqui toca o seu som!</p>

        <h2 className="text-xl mb-6 font-semibold">Escute ao vivo</h2>
        <VoxPlayer />
        {/* <AzuracastPlayer /> */}
      </div>
    </div>
  );
};

export default Home;
