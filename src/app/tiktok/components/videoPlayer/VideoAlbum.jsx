import Image from 'next/image'

export const VideoAlbum = ({
    soundRef,
    video
}) => {
  const userIcon = `/assets/images/users/${video.user_icon}`
  
  return (
    <div
      className={`absolute bottom-[12%] right-[3%]`}
      ref={soundRef}
      style={{ display: 'none' }}
    >
      <Image
        alt="userIcon"
        blurDataURL={userIcon}
        className='rounded-full border-[5.5px] border-gray-600'
        height={46}
        placeholder="blur"
        priority={true}
        src={userIcon}
        width={46}
      />
    </div>
  )
}