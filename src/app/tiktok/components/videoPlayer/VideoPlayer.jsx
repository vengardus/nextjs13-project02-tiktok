"use client"
import { useRef, useState } from 'react'
import { useHasWindow } from '@/hooks/useHasWindow'
import Image from 'next/image'
import { LIKE_COLOR } from '../data'
import { VideoActions } from './VideoActions'
import { VideoDescription } from './VideoDescription'
import { VideoAlbum } from './VideoAlbum'

const imageIcon = '/assets/images/ui/play.png'

export const VideoPlayer = ({ video }) => {
  const hasWindow = useHasWindow()
  const [playing, setPlaying] = useState
    (true)
  const videoRef = useRef(null)
  const actionsRef = useRef(null)
  const infoRef = useRef(null)
  const soundRef = useRef(null)
  const [heartColor, setHeartColor] = useState(LIKE_COLOR.none)

  const handleClickPlay = () => {
    if (videoRef.current.muted == true) {
      videoRef.current.muted = false
      return
    }
    (playing) ? videoRef.current.pause() : videoRef.current.play()
    videoRef.current.muted = false
    setPlaying(!playing)
  }

  const handleOnPlaying = () => {
    actionsRef.current.style.display = 'block'
    infoRef.current.style.display = 'block'
    soundRef.current.style.display = 'block'
  }

  const handleClickLike = () => {
    setHeartColor((heartColor == LIKE_COLOR.none) ? LIKE_COLOR.like : LIKE_COLOR.none)
  }

  if (!hasWindow) return <></>

  const videoUrl = `/assets/videos/${video.src}`
  console.log(videoUrl)

  return (
    <div className="h-fit w-fit relative snap-center">
      <video
        autoPlay={true}
        className=""
        controls={false}
        loop
        muted={true}
        playsInline
        // preload='auto'
        ref={videoRef}
        src={videoUrl}
        onClick={handleClickPlay}
        onPlaying={handleOnPlaying}
      />

      {/* buttom playing*/}
      <div className={`absolute top-[45%] left-[45%] 
          ${playing ? 'invisible' : 'visible'}`
      }>
        <div 
          className='w-[62px] h-[62px]'
          onClick={handleClickPlay}
        >
          <Image src={imageIcon}
            alt='play'
            width={12}
            height={12}
            className='w-full h-full'
          />
        </div>
      </div>

      <VideoActions
        video={video}
        handleClickLike={handleClickLike}
        heartColor={heartColor}
        actionsRef={actionsRef}
      />

      <VideoDescription 
        infoRef={infoRef}
        video={video} 
      />

      <VideoAlbum
        video={video}
        soundRef={soundRef}
      />

    </div>
  )
}
