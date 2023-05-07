export const VideoInfo = ({ 
  video, 
  infoRef 
}) => {
  return (
    <div
      className={`absolute bottom-[15%] left-[0%] w-[82%] pl-3 `}
      ref={infoRef}
      style={{ display: 'none' }}
    >
      <div className='flex flex-col space-y-2 '>
        <span className='text-[14px] font-bold'>
          {video.username[0].toUpperCase() + video.username.substring(1)}
        </span>
        <span className='font-semibold'>
          {video.description}
        </span>
      </div>
    </div>
  )
}