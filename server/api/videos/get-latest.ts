import type { YoutubeVideo } from "~/types/video/YoutubeVideo";

export default defineEventHandler(async (event) => {
  // Get the latest youtube video from a channel

  let { channelId } = getQuery(event);

  if (!channelId) {
    channelId = "UCeLvns7Gwo_aq18-GKT-yww";
  }

  try {
    const req = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=1&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}`
    );

    const res = await req.json();

    if (!res.items?.[0]?.snippet)
      throw createError({
        statusCode: 400,
        message: "Something went wrong",
      });

    return res.items[0] as YoutubeVideo;
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      message: "Something went wrong",
    });
  }
});
