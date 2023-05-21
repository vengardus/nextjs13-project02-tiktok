"use client";
import { VideoPlayer } from "./../videoPlayer/VideoPlayer";
// import { VIDEOS } from "./../data";
import { useGetAll } from "@/app/api/supabase/useSupabase";
import { TABLES } from "@/data";

export const FeedVideos = () => {
  const [videos, error] = useGetAll(TABLES.videos);

  return (
    <>
      {
        !videos
          ? <div>Loading...</div>
          : videos.map((video) => <VideoPlayer key={video.id} video={video} />)
      }
    </>
  );
};
