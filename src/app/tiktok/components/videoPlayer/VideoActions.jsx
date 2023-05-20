import Image from 'next/image'
import { Heart } from '@/../public/assets/icons/Heart'
import { Comment } from '@/../public/assets/icons/Comment'
import { Share } from '@/../public/assets/icons/Share'

export const VideoActions = ({ 
  actionsRef,
  handleClickLike,
  heartColor,
  video, 
}) => {
  return (
    <div
      className={`absolute bottom-[24%] right-[3%]`}
      ref={actionsRef}
      style={{ display: 'none' }}
    >
      <div className='pt-7 flex flex-col space-y-3'>
        <div className='pb-4'>
          {/* userIcon */}
          <Image
            alt="userIcon"
            className='rounded-full border-[0.5px] border-white'
            height={46}
            src={video.userIcon}
            priority={true}
            width={46}
            placeholder="blur"
            blurDataURL={video.userIcon}
          />
        </div>

        {/* heart */}
        <div className='flex flex-col items-center'>
          <button onClick={handleClickLike}>
            <Heart heartColor={heartColor} />
          </button>
          <span className='font-semibold'>
            {video.likes}
          </span>
        </div>

        {/* comment */}
        <div className='flex flex-col items-center'>
          <Comment />
          <span className='font-semibold'>
            {video.comments}
          </span>
        </div>

        {/* shared */}
        <div className='flex flex-col items-center'>
          <Share />
          <span className='font-semibold'>
            {video.shared}
          </span>
        </div>
      </div>
    </div>
  )
}