'use client'

import React, { useState, useRef } from 'react'
import { Pause, Play, Star } from 'lucide-react'

interface typeItems {
  items: {
    name: string
    votes: number
    url: string
    favicon: string
    country: string
  }
  setPlayNow: any
}

const AudioPlayer = ({ items, setPlayNow }: typeItems) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        setPlayNow(items.name)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (event: any) => {
    if (audioRef.current) {
      const seekTime = Number(event.target.value)
      audioRef.current.currentTime = seekTime
      setProgress(seekTime)
    }
  }

  return (
    <div className="container_audio-player">
      <div className="box_info-name">
        <p>{items.name}</p>
        <span>
          <Star size={20} />
          {items.votes}
        </span>
      </div>

      <audio
        ref={audioRef}
        src={items.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="box_button-play">
        <div>
          <button onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
        <div>
          <input
            type="range"
            min="0"
            max={duration}
            value={progress}
            onChange={handleSeek}
          />
          <span>
            {Math.floor(progress)} /{' '}
            {Math.floor(duration) > 0 ? 'Ao Vivo' : 'Fora do ar'}
          </span>
        </div>
      </div>
      <span className="country">{items.country}</span>
    </div>
  )
}

export default AudioPlayer
