import Image from 'next/image'

export const VideoSound = ({
    soundRef,
    video
}) => {
  return (
    <div
      className={`absolute bottom-[12%] right-[3%]`}
      ref={soundRef}
      style={{ display: 'none' }}
    >
      <Image
        alt="userIcon"
        className='rounded-full border-[5.5px] border-gray-600'
        height={46}
        src={video.userIcon}
        priority={true}
        width={46}
        placeholder="blur"
        blurDataURL={video.userIcon}
      />
    </div>


  )
}