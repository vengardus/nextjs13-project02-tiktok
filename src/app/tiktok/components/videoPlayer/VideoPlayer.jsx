"use client"
import { useEffect, useRef, useState } from 'react'
import { useHasWindow } from '@/hooks/useHasWindow'
import Image from 'next/image'
import { Heart } from '@/../public/assets/icons/Heart'
import { Comment } from '@/../public/assets/icons/Comment'
import { Share } from '@/../public/assets/icons/Share'
import { LIKE_COLOR } from '../data'

const imageIcon = '/assets/images/ui/play.png'

export const VideoPlayer = ({ video }) => {
  const hasWindow = useHasWindow()
  const [playing, setPlaying] = useState
    (true)
  const videoRef = useRef(null)
  const actionsRef = useRef(null)
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
  }

  const handleClickLike = () => {
    setHeartColor((heartColor == LIKE_COLOR.none) ? LIKE_COLOR.like : LIKE_COLOR.none)
  }

  if (!hasWindow) return <></>

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
        src={video.url}
        onClick={handleClickPlay}
        onPlaying={handleOnPlaying}
      />

      <div className={`absolute top-[45%] left-[45%] 
          ${playing ? 'invisible' : 'visible'}`
      }>
        <div className='w-[62px] h-[62px]'
          onClick={handleClickPlay}>
          <Image src={imageIcon}
            alt='play'
            width={12}
            height={12}
            className='w-full h-full'
          ></Image>
        </div>
      </div>

      <div
        className={`absolute bottom-[22%] right-[5%]`}
        ref={actionsRef}
        style={{ display: 'none' }}
      >
        <div className='pt-7 flex flex-col space-y-5'>
          <button onClick={handleClickLike}>
            <Heart heartColor={heartColor} />
          </button>
          <Comment />
          <Share />
        </div>
      </div>

    </div>
  )
}
