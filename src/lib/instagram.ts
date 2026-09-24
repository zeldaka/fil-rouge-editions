// Flux Instagram en direct — Instagram API with Instagram Login (graph.instagram.com).
// Nécessite un compte Instagram professionnel/créateur, une application sur
// developers.facebook.com et un jeton d'accès (voir README du site).
// Variables d'environnement : INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID.

export interface InstagramPost {
  id: string;
  caption?: string;
  permalink: string;
  imageUrl: string;
}

let cache: { posts: InstagramPost[]; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes, pour éviter d'appeler l'API à chaque visite

export async function getInstagramPosts(limit = 8): Promise<InstagramPost[]> {
  const token = import.meta.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = import.meta.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return [];
  }

  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.posts.slice(0, limit);
  }

  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink';
  const url = `https://graph.instagram.com/v21.0/${userId}/media?fields=${fields}&access_token=${token}&limit=${limit}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Instagram: échec de la requête', await res.text());
      return cache?.posts.slice(0, limit) ?? [];
    }

    const data = await res.json();
    const posts: InstagramPost[] = (data.data ?? [])
      .filter((item: any) => item.media_type !== 'VIDEO' || item.thumbnail_url)
      .map((item: any) => ({
        id: item.id,
        caption: item.caption,
        permalink: item.permalink,
        imageUrl: item.media_type === 'VIDEO' ? item.thumbnail_url : item.media_url,
      }));

    cache = { posts, fetchedAt: Date.now() };
    return posts.slice(0, limit);
  } catch (error) {
    console.error('Instagram: erreur réseau', error);
    return cache?.posts.slice(0, limit) ?? [];
  }
}
