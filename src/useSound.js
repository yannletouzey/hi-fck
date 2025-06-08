import { useEffect, useRef, useState } from 'react'
import sound from '/fcku.mp3'

export function useSoundEffect() {
  const audioRef = useRef(new Audio(sound))
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    const handlePlaying = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    const handleError = () => setIsPlaying(false)

    audio.addEventListener('playing', handlePlaying)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    const handleClick = () => {
      if (audio.paused) {
        audio.loop = true
        audio.play().catch((err) => {
          console.warn('play() error :', err)
        })
      }
    }

    window.addEventListener('click', handleClick, { once: true })

    return () => {
      audio.removeEventListener('playing', handlePlaying)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return { isPlaying }
}
