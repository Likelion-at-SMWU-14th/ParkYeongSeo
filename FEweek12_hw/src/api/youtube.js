// src/api/youtube.js
import { decodeHtml } from '../utils/decodeHtml';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const FANCAM_KEYWORD_REGEX = /직캠|fancam|focus\s*cam|페이스캠|포커스캠/i;

function buildFancamQuery(rawQuery) {
  const hasFancamKeyword = FANCAM_KEYWORD_REGEX.test(rawQuery);
  return hasFancamKeyword ? rawQuery : `${rawQuery} 직캠`;
}

export async function searchVideos(query) {
  if (!query?.trim()) return [];

  const params = new URLSearchParams({
    part: 'snippet',
    q: buildFancamQuery(query.trim()),
    type: 'video',
    maxResults: '25', // 필터링으로 걸러질 걸 감안해 넉넉히 요청
    key: API_KEY,
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error?.message || `YouTube API 오류 (${res.status})`);
  }

  const data = await res.json();

  const normalized = (data.items || []).map((item) => ({
    id: item.id.videoId,
    title: decodeHtml(item.snippet.title),
    channelTitle: decodeHtml(item.snippet.channelTitle),
    thumbnail: item.snippet.thumbnails?.medium?.url,
  }));

  // 제목에 직캠 관련 키워드가 없는 영상은 제외
  return normalized.filter((video) => FANCAM_KEYWORD_REGEX.test(video.title));
}