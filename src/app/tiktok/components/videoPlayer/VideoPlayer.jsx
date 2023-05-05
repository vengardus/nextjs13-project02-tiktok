"use client"
import { useEffect, useRef, useState } from 'react'
import { useHasWindow } from '@/hooks/useHasWindow'
import { videos } from './../data'

export const VideoPlayer = () => {
  const hasWindow = useHasWindow()
  const [ playing, setPlaying ] = useState
  (true)
  const videoRef = useRef(null)

  useEffect(()=> {
    if ( hasWindow ) {
      console.log('hey')
      // videoRef.current.muted = true
      // videoRef.current.play()
      // videoRef.current.muted = false
    }
  }, [hasWindow])

  const handleClickPlay = () => {
    if ( videoRef.current.muted == true ) {
      videoRef.current.muted = false
      return 
    }

    ( playing )? videoRef.current.pause() : videoRef.current.play()

    // videoRef.current.controls = false
    videoRef.current.muted = false

    
    setPlaying( !playing )
  }


  if (!hasWindow) return <div>Loading....</div>

  return (
    <div className="h-fit w-fit relative"
      
    >
      <video
        autoPlay={true}
        className=""
        controls={false}
        loop
        muted={true}
        playsInline
        preload='auto'
        ref={videoRef}
        src={videos[0]}

        onClick={handleClickPlay}
      >
      </video>

      <div className={`absolute top-[42%] left-[42%] ${ playing? 'invisible':'visible' }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-16 h-16">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
        </svg>

      </div>


    </div>
  )
}
