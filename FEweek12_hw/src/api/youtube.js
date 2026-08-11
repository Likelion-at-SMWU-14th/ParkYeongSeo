const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function buildFancamQuery(rawQuery) {
  const hasFancamKeyword = /직캠|fancam|focus/i.test(rawQuery);
  return hasFancamKeyword ? rawQuery : `${rawQuery} 직캠`;
}

export async function searchVideos(query) {
  if (!query?.trim()) return [];

  const params = new URLSearchParams({
    part: 'snippet',
    q: buildFancamQuery(query.trim()),
    type: 'video',
    maxResults: '12',
    key: API_KEY,
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error?.message || `YouTube API 오류 (${res.status})`);
  }

  const data = await res.json();

  return (data.items || []).map((item) => ({
    id: item.id.videoId,
    title: decodeHtml(item.snippet.title),
    channelTitle: decodeHtml(item.snippet.channelTitle),
    thumbnail: item.snippet.thumbnails?.medium?.url,
  }));
}