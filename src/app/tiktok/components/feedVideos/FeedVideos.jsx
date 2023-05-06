import { VideoPlayer } from './../videoPlayer/VideoPlayer'
import { VIDEOS } from './../data'

export const FeedVideos = () => {
  return (
    VIDEOS.map(video => (
      <VideoPlayer key={video.id} video={video} />
    ))
  )
}


