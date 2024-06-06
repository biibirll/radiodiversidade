import React from "react";

const AzuracastPlayer = () => {
  return (
    <div className="relative overflow-hidden w-full max-w-4xl">
      <iframe
        title="Player"
        src="https://azura.servercast.com.br/public/radio_diversidade/embed?theme=dark"
        frameBorder="0"
        allowTransparency={true}
        className="w-full aspect-video"
        style={{ width: "100%", minHeight: "150px", border: 0 }}
      />
    </div>
  );
};

export default AzuracastPlayer;
