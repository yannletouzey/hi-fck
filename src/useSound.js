import { useEffect, useRef } from 'react'
import sound from '/fcku.mp3'

export function useSoundEffect() {
  const audioRef = useRef(new Audio(sound))

  useEffect(() => {
    const unlockAudio = () => {
      audioRef.current.play().catch(() => {})
      window.removeEventListener('click', unlockAudio)
    }

    window.addEventListener('click', unlockAudio)
    return () => window.removeEventListener('click', unlockAudio)
  }, [])

  const playSound = () => {
    audioRef.current.currentTime = 0
    audioRef.current.loop = true
    audioRef.current.play().catch(err => {
      console.warn('play() a échoué :', err)
    })
  }

  return playSound
}
