import { FeedVideos } from './components/feedVideos/FeedVideos'

function TiktokPage() {
  return (
    <div className="h-auto w-screen border border-gray-700 aspect-[9/16] rounded-[3px] overflow-y-scroll snap-y snap-mandatory">
      <FeedVideos />
    </div>

  )
}

export default TiktokPage