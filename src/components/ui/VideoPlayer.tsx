import { useState, useRef } from 'react';
import { cn } from '../../lib';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
}

export const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={cn('relative group', className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};
