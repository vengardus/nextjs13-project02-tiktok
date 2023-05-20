import Marquee from "react-fast-marquee";

export const VideoDescription = ({ 
  video, 
  infoRef 
}) => {
  return (
    <div
      className={`absolute bottom-[10%] left-[0%] w-[82%] pl-3 `}
      ref={infoRef}
      style={{ display: 'none' }}
    >
      <div className='flex flex-col space-y-2 pl-3'>
        <span className='text-[14px] font-bold'>
          {video.username[0].toUpperCase() + video.username.substring(1)}
        </span>
        <span className='font-semibold'>
          {video.description}
        </span>
        <Marquee>
          {video.titleSong}
        </Marquee>
      </div>
    </div>
  )
}