"use client"
import { useHasWindow } from '@/hooks/useHasWindow'
import { videos } from './../data'

export const VideoPlayer = () => {
  const hasWindow = useHasWindow()

  if ( !hasWindow ) return <div>Loading....</div>

  return (
    <div className="h-fit w-fit">
      <video
        autoPlay={true}
        className=""
        controls={false}
        muted={true}
        src={videos[0]}
      >
      </video>
    </div>
  )
}
