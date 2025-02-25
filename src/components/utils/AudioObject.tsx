import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { RWAudio } from "../../classes/yard/music/RWAudio";
import {
  PlayIcon,
  PauseIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";

export interface AudioObjectProps {
  audio: RWAudio;
  name?: string;
  artist?: string;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const AudioObject: React.FC<AudioObjectProps> = memo(
  ({ name, audio, artist }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioName = name ?? audio.getName();
    const audioUrl = audio.getUrl();

    const handlePlay = useCallback(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, []);

    const handleStop = useCallback(() => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }, []);

    const handleDownload = useCallback(async () => {
      let blobUrl: string | undefined;
      try {
        if (audioUrl) {
          const response = await fetch(audioUrl);
          const blob = await response.blob();
          blobUrl = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = `${audioName}.ogg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error("Failed to download audio:", error);
      } finally {
        if (blobUrl) {
          window.URL.revokeObjectURL(blobUrl);
        }
      }
    }, [audioUrl, audioName]);

    const handleEnded = useCallback(() => {
      setIsPlaying(false);
    }, []);

    useEffect(() => {
      const audio = audioRef.current;
      if (audio) {
        const updateCurrentTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);

        audio.addEventListener("timeupdate", updateCurrentTime);
        audio.addEventListener("loadeddata", updateDuration);
        audio.addEventListener("ended", handleEnded);

        audio.load();

        return () => {
          audio.removeEventListener("timeupdate", updateCurrentTime);
          audio.removeEventListener("loadeddata", updateDuration);
          audio.removeEventListener("ended", handleEnded);
        };
      }
    }, [handleEnded, audioRef.current]);

    return (
      <div className="round-gray flex flex-col gap-1 p-4">
        <h3 className="overflow-hidden text-ellipsis" title={audioName}>
          {audioName}
        </h3>
        <p>{artist}</p>
        <div className="not-prose flex w-fit flex-row gap-2">
          <button
            className="btn-main relative flex flex-row overflow-hidden"
            onClick={isPlaying ? handleStop : handlePlay}
            disabled={duration === 0}
          >
            <span className="z-10 flex flex-row items-center">
              {isPlaying ? (
                <PauseIcon className="svg-fill-alt" width={24} height={24} />
              ) : (
                <PlayIcon className="svg-fill-alt" width={24} height={24} />
              )}
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <span
              className="absolute left-0 top-0 z-0 h-full bg-slate-700 opacity-30"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </button>
          <button
            className="btn-main"
            onClick={handleDownload}
            disabled={duration === 0}
          >
            <ArrowDownTrayIcon
              className="svg-fill-alt"
              width={24}
              height={24}
            />
          </button>
        </div>
        <audio ref={audioRef} src={audioUrl} />
      </div>
    );
  },
);

export default AudioObject;
