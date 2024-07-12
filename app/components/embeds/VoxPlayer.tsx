"use client"; // For client components in Next.js 13+

import { useState, useRef, useEffect } from "react";

const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    if (newVolume == 0 && !isMuted) {
      setIsMuted(true);
      setPreviousVolume(volume);
    } else if (isMuted && newVolume > 0) {
      setIsMuted(false);
    }

    changeVolume(newVolume);
  };

  const toggleMute = () => {
    if (isMuted) {
      changeVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      changeVolume(0);
    }

    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <button onClick={handlePlayPause} className="p-2 rounded bg-gray-200">
        {isPlaying ? "Pausar" : "Tocar"}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={volume}
        aria-valuetext={`${volume * 100}`}
        onChange={handleVolumeChange}
        className="w-40"
      />

      <button
        role="switch"
        aria-checked={isMuted}
        onClick={toggleMute}
        className="p-2 rounded bg-gray-200"
      >
        Silenciar
      </button>

      <audio
        ref={audioRef}
        src="http://stm8.painelvox.com:8130/?type=http"
        autoPlay={false}
      />
    </div>
  );
};

export default RadioPlayer;
