'use client'
import { VideoPlayer } from './../videoPlayer/VideoPlayer'
import { VIDEOS } from './../data'
import { useGetAll } from '@/app/api/supabase/useSupabase'
import { TABLES} from '@/data'

export const FeedVideos = () => {
  const [data, error] = useGetAll(TABLES.user_video_likes)

  console.log('2', data, error)

  return (
    VIDEOS.map(video => (
      <VideoPlayer key={video.id} video={video} />
    ))
  )
}


